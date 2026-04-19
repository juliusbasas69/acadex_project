package com.acadex.backend.adapter.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.acadex.backend.adapter.UserAdapter;
import com.acadex.backend.dao.UserDao;
import com.acadex.backend.dao.entity.UserEntity;


@Service
public class UserAdapterImpl implements UserAdapter{
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
    private RedisTemplate<String, Object> redisTemplate;
	
	@Override
	public void saveUser(UserEntity user) {
		
		userDao.save(user);
	}

	@Override
	public UserEntity findUserByEmail(String email) {

	    try {
	        UserEntity cached = (UserEntity) redisTemplate.opsForValue().get(email);
	        if (cached != null) return cached;
	    } catch (Exception ignored) {}

	    System.out.println("🔥 DB CALLED");

	    UserEntity user = userDao.findUserByEmail(email);

	    try {
	        redisTemplate.opsForValue().set(email, user);
	    } catch (Exception ignored) {}

	    return user;
	}

}

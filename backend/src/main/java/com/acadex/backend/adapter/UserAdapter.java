package com.acadex.backend.adapter;

import org.springframework.stereotype.Service;

import com.acadex.backend.dao.entity.UserEntity;

@Service
public interface UserAdapter {
	
	public void saveUser(UserEntity user);

	public UserEntity findUserByEmail(String email);
}

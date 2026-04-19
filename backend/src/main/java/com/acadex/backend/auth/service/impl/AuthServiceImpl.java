package com.acadex.backend.auth.service.impl;

import static com.acadex.backend.constants.CommonConstant.*;
import static com.acadex.backend.auth.common.constants.MessageConstant.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.acadex.backend.adapter.UserAdapter;
import com.acadex.backend.auth.common.exceptions.AuthException;
import com.acadex.backend.auth.dto.request.AuthRequest;
import com.acadex.backend.auth.dto.response.AuthResponse;
import com.acadex.backend.auth.service.AuthService;
import com.acadex.backend.auth.service.JwtService;
import com.acadex.backend.common.util.CipherUtil;
import com.acadex.backend.common.util.DateUtil;
import com.acadex.backend.dao.entity.UserEntity;


@Service
public class AuthServiceImpl implements AuthService{
	
	@Autowired
	private UserAdapter userAdapter;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public void registerUser(AuthRequest req) {
		
		UserEntity newUser = new UserEntity();
		newUser.setEmail(req.getEmail());
		newUser.setPassword(passwordEncoder.encode(req.getPassword()));
		newUser.setCreatedAt(DateUtil.now());
		newUser.setUpdatedAt(DateUtil.now());
		newUser.setDeleted(IS_NOT_DELETED);
		
		userAdapter.saveUser(newUser);
		
	}

	@Override
	public AuthResponse login(AuthRequest request) throws Exception {

		UserEntity user = userAdapter.findUserByEmail(request.getEmail());

	    if (user == null) {
	        throw new AuthException(USER_NOT_FOUND);
	    }

	    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
	        throw new AuthException(INVALID_CREDENTIALS);
	    }
	    
	    String token = jwtService.generateToken(user);
	    
	    return new AuthResponse(CipherUtil.encrypt(String.valueOf(user.getId())),
	    		user.getEmail(), 
	    		user.getRole(), 
	    		token);
	}

}
package com.acadex.backend.auth.service;

import org.springframework.stereotype.Service;

import com.acadex.backend.auth.dto.request.AuthRequest;
import com.acadex.backend.auth.dto.response.AuthResponse;

@Service
public interface AuthService {
	
	public void registerUser(AuthRequest userDto);

	public AuthResponse login(AuthRequest request) throws Exception ;
}

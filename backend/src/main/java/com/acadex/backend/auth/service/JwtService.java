package com.acadex.backend.auth.service;

import org.springframework.stereotype.Service;

import com.acadex.backend.dao.entity.UserEntity;

import io.jsonwebtoken.Claims;

@Service
public interface JwtService {

	public String generateToken(UserEntity user);
	
	// 🔥 CORE: Parse + validate signature + extract claims
    public Claims extractAllClaims(String token);
    
    public String extractUsername(String token);
    
    public String extractRole(String token);
    
    // EXPIRATION CHECK
    public boolean isTokenExpired(String token);
    
    // 🔥 FINAL VALIDATION (IMPORTANT FIX)
    public boolean isValid(String token);
}

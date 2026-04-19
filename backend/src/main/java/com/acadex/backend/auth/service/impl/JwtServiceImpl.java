package com.acadex.backend.auth.service.impl;

import java.security.Key;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.acadex.backend.auth.service.JwtService;
import com.acadex.backend.dao.entity.UserEntity;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtServiceImpl implements JwtService{

	@Value("${jwt.secret}")
    private String SECRET_KEY;
	
	private static final long EXPIRATION_TIME = 1000 * 60 * 60;

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    // GENERATE TOKEN ONLY (AUTH-SERVICE RESPONSIBILITY)
	@Override
    public String generateToken(UserEntity user) {

        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

	@Override
	public Claims extractAllClaims(String token) {
		return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
	}

	@Override
	public String extractUsername(String token) {
		return extractAllClaims(token).getSubject();
	}

	@Override
	public String extractRole(String token) {
		return extractAllClaims(token).get("role", String.class);
	}

	@Override
	public boolean isTokenExpired(String token) {
		return extractAllClaims(token)
                .getExpiration()
                .before(new Date());
	}

	@Override
	public boolean isValid(String token) {
		try {
            // This validates EVERYTHING:
            // ✔ signature
            // ✔ structure
            // ✔ expiration
            extractAllClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
	}
}

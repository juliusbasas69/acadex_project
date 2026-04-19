package com.acadex.backend.auth.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
	
	private String encrpytedId;
	
	private String email;
	
	private String role;
	
	private String token;
}
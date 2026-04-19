package com.acadex.backend.auth.controller;

import static com.acadex.backend.constants.CommonConstant.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acadex.backend.auth.dto.request.AuthRequest;
import com.acadex.backend.auth.dto.response.AuthResponse;
import com.acadex.backend.auth.service.AuthService;
import com.acadex.backend.common.response.ErrorResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthRequest request) {
	    try {
	        AuthResponse response = authService.login(request);
	        return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	            .body(new ErrorResponse(
            		UNAUTHORIZED,
	                "AUTH_ERROR",
	                e.getMessage()
	            ));
	    }
	}

	@PostMapping("/register")
	public String register(@RequestBody AuthRequest req) {
		
		try {
			authService.registerUser(req);
		} catch(Exception e) {
			e.printStackTrace();
			
			return "User Failed";
		}
		
		return "User Registered";
	}
}

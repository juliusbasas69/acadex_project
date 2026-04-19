package com.acadex.backend.auth.dto.request;

import lombok.Data;

@Data
public class AuthRequest {

    private String email;
    
    private String firstName;
    
    private String familyName;
    
    private String password;
}
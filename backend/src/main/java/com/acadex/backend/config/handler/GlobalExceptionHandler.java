package com.acadex.backend.config.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.acadex.backend.auth.common.exceptions.AuthException;
import com.acadex.backend.common.response.ErrorResponse;


//Uncomment if use postman. comment if use swagger
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AuthException.class)
    public ResponseEntity<ErrorResponse> handleAuth(AuthException ex) {
        return ResponseEntity.status(401)
                .body(new ErrorResponse(401, "UNAUTHORIZED", ex.getMessage()));
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntime(RuntimeException ex) {
        return ResponseEntity.status(400)
                .body(new ErrorResponse(400, "BAD_REQUEST", ex.getMessage()));
    }
}

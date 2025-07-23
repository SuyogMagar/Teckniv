package com.teckniv.teckniv.controller;

import com.teckniv.teckniv.model.User;
import com.teckniv.teckniv.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String email = body.get("email");
        String password = body.get("password");
        boolean success = userService.registerUser(username, email, password);
        if (success) {
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.badRequest().body("Email already registered");
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        return userService.signIn(email, password)
                .map(user -> ResponseEntity.ok(Map.of(
                    "username", user.getUsername(),
                    "email", user.getEmail()
                )))
                .orElseGet(() -> ResponseEntity.status(401).body(Map.of("error", "Invalid email or password")));
    }
} 
package com.example.demo.controller;

import com.example.demo.service.FirebaseAuthService;
import com.google.firebase.auth.UserRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // permite llamadas desde tu frontend
public class AuthController {

    @Autowired
    private FirebaseAuthService authService;

    // Registro
    @PostMapping("/register")
    public String register(@RequestParam String email, @RequestParam String password) {
        try {
            return authService.registrarUsuario(email, password);
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }

    // Login
    @PostMapping("/login")
    public String login(@RequestParam String email) {
        try {
            UserRecord user = authService.loginUsuario(email);
            return "Usuario autenticado: " + user.getEmail();
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}

package com.example.demo.service;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import org.springframework.stereotype.Service;

@Service
public class FirebaseAuthService {

    // Registrar usuario
    public String registrarUsuario(String email, String password) throws Exception {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(email)
                .setPassword(password);

        UserRecord userRecord = FirebaseAuth.getInstance().createUser(request);
        return userRecord.getUid();
    }

    // Obtener usuario por email
    public UserRecord loginUsuario(String email) throws Exception {
        return FirebaseAuth.getInstance().getUserByEmail(email);
    }
}

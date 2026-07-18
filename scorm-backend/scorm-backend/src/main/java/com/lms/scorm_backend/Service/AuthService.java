package com.lms.scorm_backend.Service;

import com.lms.scorm_backend.dto.AuthResponse;
import com.lms.scorm_backend.dto.LoginRequest;
import com.lms.scorm_backend.model.User;
import com.lms.scorm_backend.repository.UserRepository;
import com.lms.scorm_backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;
    public AuthResponse authenticateUser(LoginRequest request)
    {
        Optional<User> userOptional = userRepository.findByEmail(request.email());
        if(userOptional.isPresent())
        {
            User user = userOptional.get();
            if (passwordEncoder.matches(request.password(), user.getPassword()))
            {
                String token = jwtUtil.generateToken(user);
                return new AuthResponse(user.getUserId(), token, "Login Succesfully", true);
            }
        }
        return new AuthResponse(null,null,"Invalid email or password",false);
    }
}

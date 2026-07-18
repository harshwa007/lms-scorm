package com.lms.scorm_backend.security;

import com.lms.scorm_backend.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "E_H{Z-M34a@U$Ce{w&gLb1S2U!DoU53o}P#5]sEV8(QQk<H:|mItE0L(x#&8R<7tM8?ZQNSNMnJ5b1Wx?(0?<|";
    private final SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    private final long EXPIRATION_TIME = 86400000; // 24 hours in milliseconds

    public String generateToken(User user) {
        return Jwts.builder()
                .subject(user.getEmail())
                .claim("userId", user.getUserId())
                .claim("role", user.getPersonnelRole().getRoleName())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

    public String getEmailFromToken(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getSubject();
        } catch (Exception e) {
            return null;
        }
    }

    public boolean validateToken(String token, String email) {
        try {
            String tokenEmail = getEmailFromToken(token);
            return (tokenEmail != null && tokenEmail.equals(email) && !isTokenExpired(token));
        } catch (Exception e) {
            return false;
        }
    }

    private boolean isTokenExpired(String token) {
        try {
            Date expiration = Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getExpiration();
            return expiration.before(new Date());
        } catch (Exception e) {
            return true;
        }
    }
}
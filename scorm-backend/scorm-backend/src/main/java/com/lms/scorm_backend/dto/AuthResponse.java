package com.lms.scorm_backend.dto;

public record AuthResponse(Long userId, String token, String message, boolean success) {
}
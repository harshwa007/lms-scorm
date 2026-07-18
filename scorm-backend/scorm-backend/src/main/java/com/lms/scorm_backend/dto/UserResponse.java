package com.lms.scorm_backend.dto;

public record UserResponse(
    Long userId,
    String email,
    String firstName,
    String lastName,
    String roleName,
    boolean isActive
) {}

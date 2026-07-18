package com.lms.scorm_backend.dto;

public record ChangePasswordRequest(
    String currentPassword,
    String newPassword
) {}

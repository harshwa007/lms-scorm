package com.lms.scorm_backend.dto;

public record CreateUserRequest(
    String email,
    String password,
    String firstName,
    String lastName,
    String roleName
) {}

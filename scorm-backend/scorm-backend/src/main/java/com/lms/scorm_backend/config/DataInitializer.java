package com.lms.scorm_backend.config;

import com.lms.scorm_backend.model.Role;
import com.lms.scorm_backend.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        createRoleIfNotFound("ADMIN", "Administrator");
        createRoleIfNotFound("INSTRUCTOR", "Instructor / Teacher");
        createRoleIfNotFound("STUDENT", "Student / Learner");
    }

    private void createRoleIfNotFound(String name, String description) {
        if (roleRepository.findByRoleName(name).isEmpty()) {
            Role role = new Role();
            role.setRoleName(name);
            role.setDescription(description);
            roleRepository.save(role);
        }
    }
}

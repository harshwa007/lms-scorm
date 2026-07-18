package com.lms.scorm_backend;

import jakarta.persistence.Entity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.lms.scorm_backend.repository")
@EntityScan(basePackages = "com.lms.scorm_backend.model")
@EnableJpaAuditing
public class ScormBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScormBackendApplication.class, args);
	}
}

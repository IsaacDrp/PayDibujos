package com.synectura.paydibujos.config;

import com.synectura.paydibujos.modules.auth.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

  @Bean
  CommandLineRunner initDatabase(UserService userService) {
    return args -> {
      String adminEmail = "itzel@paydibujos.com";

      if (!userService.existsByEmail(adminEmail)) {
        System.out.println("🚀 Creando usuario ADMIN inicial...");
        userService.createAdminUser(
          adminEmail,
          "ItzelSecreta2025", // Raw password, service will hash
          "Itzel Ruiz"
        );
      } else {
        System.out.println("✅ Usuario ADMIN ya existe.");
      }
    };
  }
}

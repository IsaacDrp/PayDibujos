package com.synectura.paydibujos.modules.auth.service.impl;

import com.synectura.paydibujos.modules.auth.entity.User;
import com.synectura.paydibujos.modules.auth.repository.UserRepository;
import com.synectura.paydibujos.modules.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor // Constructor for dependency injection
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder; // Injecting encoder from security config

  @Override
  @Transactional(readOnly = true)
  public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  @Override
  @Transactional(readOnly = true)
  public boolean existsByEmail(String email) {
    return userRepository.existsByEmail(email);
  }

  @Override
  @Transactional
  public User createAdminUser(String email, String rawPassword, String nombre) {
    // 1. Validate if exists
    if (existsByEmail(email)) {
      throw new RuntimeException("El email ya está registrado");
    }

    // 2. Creating entity and hash pass
    User newAdmin = User.builder()
      .email(email)
      .password(passwordEncoder.encode(rawPassword)) // <--- HASH!!!!
      .nombre(nombre)
      .role("ADMIN")
      .build();

    // 3. Save
    return userRepository.save(newAdmin);
  }

  @Override
  @Transactional
  public User save(User user) {
    return userRepository.save(user);
  }
}

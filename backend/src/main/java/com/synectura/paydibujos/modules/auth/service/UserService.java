package com.synectura.paydibujos.modules.auth.service;

import com.synectura.paydibujos.modules.auth.entity.User;
import java.util.Optional;

public interface UserService {

  Optional<User> findByEmail(String email);

  boolean existsByEmail(String email);

  User createAdminUser(String email, String rawPassword, String nombre);

  User save(User user);
}

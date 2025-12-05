package com.synectura.paydibujos.modules.auth.service;

import com.synectura.paydibujos.modules.auth.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Autowired
  private UserService userService; // <--- Using interface

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    // Using interface method
    User user = userService.findByEmail(email)
      .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

    return new org.springframework.security.core.userdetails.User(
      user.getEmail(),
      user.getPassword(),
      new ArrayList<>());
  }
}

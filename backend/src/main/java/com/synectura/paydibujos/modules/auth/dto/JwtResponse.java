package com.synectura.paydibujos.modules.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor // new JwtResponse(token, email)
@NoArgsConstructor
public class JwtResponse {
  private String token;
  private String email;
  // Opcional: private String role;
}

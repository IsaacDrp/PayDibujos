package com.synectura.paydibujos.modules.auth.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "users") // Exact table name
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class) // Auto dates
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Postgres SERIAL
  private Long id;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(name = "password_hash", nullable = false)
  private String password; // Java = password, DB = password_hash

  @Column(nullable = false)
  private String nombre;

  @Column(nullable = false)
  private String role; // "ADMIN" o "USER"

  // --- Auto Audit ---
  @CreatedDate
  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @LastModifiedDate
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}

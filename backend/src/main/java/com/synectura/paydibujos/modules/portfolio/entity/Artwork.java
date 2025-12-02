package com.synectura.paydibujos.modules.portfolio.entity;

import com.synectura.paydibujos.modules.auth.entity.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "artworks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Artwork {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String title;

  @Column(unique = true)
  private String slug;

  @Column(name = "imagen_url", nullable = false)
  private String imageUrl;

  @Column(nullable = false)
  private String categoria;
  // 1. JSONB to java map
  @JdbcTypeCode(SqlTypes.JSON)
  @Column(columnDefinition = "jsonb")
  private Map<String, Object> metadata;

  // 2. (text[]) to List<String> MapSQL
  @JdbcTypeCode(SqlTypes.ARRAY)
  @Column(columnDefinition = "text[]")
  private List<String> tags;

  // -----------------------------------

  @Column(name = "is_visible")
  private boolean visible = true;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User author;

  @CreatedDate
  @Column(name = "fecha_subida", nullable = false, updatable = false)
  private LocalDateTime fechaSubida;
}

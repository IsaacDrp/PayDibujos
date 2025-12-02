package com.synectura.paydibujos.modules.comics.entity;

import com.synectura.paydibujos.modules.auth.entity.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "comics")
@Getter @Setter // Getter/Setter instead @Data to avoid infinite loops in toString()
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Comic {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String title;

  @Column(columnDefinition = "TEXT") // Large synopsis support
  private String synopsis;

  @Column(name = "portada_url")
  private String coverUrl;

  @Column(nullable = false)
  private String estado; // "EN_EMISION", "FINALIZADO"

  @Column(nullable = false, unique = true)
  private String slug;

  // --- Arrays de Postgres ---
  @JdbcTypeCode(SqlTypes.ARRAY)
  @Column(columnDefinition = "text[]")
  private List<String> tags;

  // --- Relaciones ---

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User author;


  @OneToMany(mappedBy = "comic", cascade = CascadeType.ALL, orphanRemoval = true)
  @Builder.Default // Para que el Builder no ponga null
  private List<Chapter> chapters = new ArrayList<>();

  // --- Audit --//

  @CreatedDate
  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @LastModifiedDate
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}

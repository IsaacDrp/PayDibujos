package com.synectura.paydibujos.modules.comics.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "pages", uniqueConstraints = {
  @UniqueConstraint(columnNames = {"chapter_id", "orden"})
})
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Page {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private Integer orden; // 1, 2, 3...

  @Column(name = "imagen_path", nullable = false)
  private String imagePath;

  // --- Relations---

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "chapter_id", nullable = false)
  private Chapter chapter;

  @CreatedDate
  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt;
}

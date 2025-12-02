package com.synectura.paydibujos.modules.comics.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chapters", uniqueConstraints = {
  @UniqueConstraint(columnNames = {"comic_id", "numero_capitulo"})
})
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Chapter {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String title;

  // Usamos BigDecimal para precisión exacta (1.1, 1.2)
  @Column(name = "numero_capitulo", nullable = false, precision = 6, scale = 1)
  private BigDecimal chapterNumber;

  @Column(name = "fecha_publicacion")
  private LocalDateTime publishDate;

  @Column(name = "is_visible")
  private boolean visible = false;

  // --- Relaciones ---

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "comic_id", nullable = false)
  private Comic comic;

  @OneToMany(mappedBy = "chapter", cascade = CascadeType.ALL, orphanRemoval = true)
  @Builder.Default
  private List<Page> pages = new ArrayList<>();

  @CreatedDate
  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt;
}

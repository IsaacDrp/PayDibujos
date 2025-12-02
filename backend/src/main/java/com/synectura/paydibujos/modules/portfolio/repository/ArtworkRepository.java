package com.synectura.paydibujos.modules.portfolio.repository;

import com.synectura.paydibujos.modules.portfolio.entity.Artwork;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, Long> {

  // ByURL
  Optional<Artwork> findBySlug(String slug);

  // Public gallery
  // SQL: SELECT * FROM artworks WHERE categoria = ? AND is_visible = true
  Page<Artwork> findByCategoriaAndVisibleTrue(String categoria, Pageable pageable);
  // No filter
  Page<Artwork> findByVisibleTrue(Pageable pageable);
}

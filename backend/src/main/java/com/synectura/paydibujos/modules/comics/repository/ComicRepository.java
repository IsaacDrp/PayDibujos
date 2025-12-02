package com.synectura.paydibujos.modules.comics.repository;

import com.synectura.paydibujos.modules.comics.entity.Comic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ComicRepository extends JpaRepository<Comic, Long> {

  Optional<Comic> findBySlug(String slug);

  // Only Active Comics in Home
  List<Comic> findByEstadoNot(String estadoExcluido); // e.g: findByEstadoNot("PAUSADO")
}

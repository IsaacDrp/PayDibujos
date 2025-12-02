package com.synectura.paydibujos.modules.comics.repository;

import com.synectura.paydibujos.modules.comics.entity.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PageRepository extends JpaRepository<Page, Long> {

  // Bring pages from X chapter
  List<Page> findByChapterIdOrderByOrdenAsc(Long chapterId);

  // Delete all pages from a chapter
  void deleteByChapterId(Long chapterId);
}

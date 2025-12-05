package com.synectura.paydibujos.modules.comics.repository;

import com.synectura.paydibujos.modules.comics.entity.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChapterRepository extends JpaRepository<Chapter, Long> {

  // All chapters in order (1, 1.5, 2...)
  // Spring already manages the relationships
  List<Chapter> findByComicIdOrderByChapterNumberAsc(Long comicId);
  // Only public chapters
  List<Chapter> findByComicIdAndVisibleTrueOrderByChapterNumberAsc(Long comicId);
}

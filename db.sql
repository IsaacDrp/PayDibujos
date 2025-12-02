-- ==========================================
-- USERS
-- ==========================================
CREATE TABLE USERS (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('ADMIN', 'USER')) DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- ARTWORKS (Portafolio)
-- ==========================================
CREATE TABLE ARTWORKS (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    -- Slug para URLs amigables de SEO (ej: /obra/princesa-pez)
    slug VARCHAR(300) UNIQUE, 
    imagen_url TEXT NOT NULL,
    
    -- CORRECCIÓN: Alineado con tu Frontend Angular
    categoria VARCHAR(50) CHECK (categoria IN ('PERSONAJES', 'COMIC', '3D', 'FOTOGRAFIA', 'EDITORIAL', 'ILUSTRACION', 'OTRO')) NOT NULL,
    
    -- MEJORA: JSONB para datos flexibles (Software, Cliente, Año, Pinceles)
    metadata JSONB DEFAULT '{}'::jsonb, 
    
    fecha_subida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES USERS(id) ON DELETE SET NULL,
    is_visible BOOLEAN DEFAULT TRUE
);

-- ==========================================
-- COMICS (Series)
-- ==========================================
CREATE TABLE COMICS (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopsis TEXT,
    portada_url TEXT,
    estado VARCHAR(20) CHECK (estado IN ('EN_EMISION', 'FINALIZADO', 'PAUSADO', 'CANCELADO')) DEFAULT 'EN_EMISION',
    slug VARCHAR(300) UNIQUE NOT NULL,
    
    -- MEJORA: Tags para SEO y búsqueda
    tags TEXT[], 
    
    user_id INTEGER REFERENCES USERS(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- CHAPTERS (Capítulos)
-- ==========================================
CREATE TABLE CHAPTERS (
    id SERIAL PRIMARY KEY,
    comic_id INTEGER NOT NULL REFERENCES COMICS(id) ON DELETE CASCADE,
    
    -- CORRECCIÓN: Numeric para soportar capítulos 1.5, 10.1, etc.
    numero_capitulo NUMERIC(6, 1) NOT NULL, 
    
    titulo VARCHAR(255) NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_visible BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Evita duplicar el capítulo 1.0 en el mismo cómic
    UNIQUE(comic_id, numero_capitulo)
);

-- ==========================================
-- PAGES (Imágenes del capítulo)
-- ==========================================
CREATE TABLE PAGES (
    id SERIAL PRIMARY KEY,
    chapter_id INTEGER NOT NULL REFERENCES CHAPTERS(id) ON DELETE CASCADE,
    orden INTEGER NOT NULL CHECK (orden > 0),
    imagen_path TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(chapter_id, orden)
);

-- ==========================================
-- POSTS (Blog - Opcional)
-- ==========================================
CREATE TABLE POSTS (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES USERS(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    contenido_html TEXT NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    portada_url TEXT,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- ÍNDICES & OPTIMIZACIÓN
-- ==========================================

-- Búsquedas por URL (Slug)
CREATE INDEX idx_artworks_slug ON ARTWORKS(slug);
CREATE INDEX idx_comics_slug ON COMICS(slug);
CREATE INDEX idx_posts_slug ON POSTS(slug);

-- Filtros del Portafolio (Lo usará mucho Angular)
CREATE INDEX idx_artworks_cat_visible ON ARTWORKS(categoria, is_visible);

-- Lector de Cómics (Ordenamiento crítico)
CREATE INDEX idx_chapters_comic_orden ON CHAPTERS(comic_id, numero_capitulo);
CREATE INDEX idx_pages_chapter_orden ON PAGES(chapter_id, orden);

-- Metadatos JSONB (Para búsquedas avanzadas futuras)
CREATE INDEX idx_artworks_metadata ON ARTWORKS USING gin (metadata);

-- ==========================================
-- TRIGGERS (Actualizar updated_at)
-- ==========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON USERS FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_comics_updated_at BEFORE UPDATE ON COMICS FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON POSTS FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


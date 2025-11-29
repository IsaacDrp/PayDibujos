#!/bin/bash

# Directorio objetivo
TARGET_DIR="./assets"

echo "🧹 Iniciando limpieza de nombres en $TARGET_DIR..."

# Usamos find con -depth para renombrar primero los archivos profundos y luego las carpetas contenedoras
# Esto evita errores de "directorio no encontrado" si renombramos la carpeta padre antes que sus hijos.
find "$TARGET_DIR" -depth | while read -r FILE; do
    
    # Obtener el nombre base y el directorio
    DIRNAME=$(dirname "$FILE")
    BASENAME=$(basename "$FILE")
    
    # Lógica de limpieza usando sed y tr
    NEW_BASENAME=$(echo "$BASENAME" | \
        tr '[:upper:]' '[:lower:]' | \
        sed 's/ /-/g' | \
        sed 's/_/-/g' | \
        sed 's/&/y/g' | \
        sed 's/ñ/n/g' | \
        sed 'y/áéíóúü/aeiouu/')

    # Solo renombra si el nombre cambió
    if [ "$BASENAME" != "$NEW_BASENAME" ]; then
        echo "Renombrando: $BASENAME -> $NEW_BASENAME"
        mv "$FILE" "$DIRNAME/$NEW_BASENAME"
    fi
done

echo "✅ ¡Listo! Archivos sanitizados."
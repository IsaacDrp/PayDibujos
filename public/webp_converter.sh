#!/bin/bash

# Directorio base (el punto actual)
DIR="."
CALIDAD=70

echo "📂 Buscando imágenes recursivamente en $DIR..."
echo "⚙️  Calidad configurada a: $CALIDAD"

# Buscamos archivos .png, .jpg, .jpeg (insensible a mayúsculas/minúsculas)
# Usamos process substitution y loop while para manejar espacios en nombres de archivo correctamente
find "$DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' file; do

    # Definir nombre de salida (mismo path, extensión .webp)
    output_file="${file%.*}.webp"
    
    # 1. Convertir
    # -quiet: para que no llene la terminal de texto, solo errores
    cwebp -q $CALIDAD "$file" -o "$output_file" -quiet
    
    # 2. Verificar si la conversión fue exitosa ($? es el código de salida del comando anterior)
    if [ $? -eq 0 ]; then
        # 3. Eliminar el original
        rm "$file"
        echo "✅ Reemplazado: $file -> $output_file"
    else
        echo "❌ Error convirtiendo: $file (Se mantiene el original)"
    fi

done

echo "🎉 ¡Proceso terminado! Todas las imágenes han sido migradas a WebP."
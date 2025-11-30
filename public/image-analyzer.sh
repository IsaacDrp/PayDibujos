#!/bin/bash

# Directorio base
DIR="assets"

echo "🔍 Ejecutando 'identify' recursivamente en $DIR..."

# 1. find busca archivos (-type f) que terminen en .webp
# 2. -print0 separa los archivos con un caracter nulo (ideal para espacios en nombres)
# 3. xargs -0 recibe esos archivos y ejecuta 'identify' sobre ellos
find "$DIR" -type f -name "*.webp" -print0 | xargs -0 identify
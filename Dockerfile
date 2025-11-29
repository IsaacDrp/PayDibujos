# ==========================================
# STAGE 1: BUILDER
# Compilamos la aplicación de Angular
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo los package json para aprovechar el caché de Docker
COPY package*.json ./

# Instalamos dependencias (npm ci es más rápido y estricto que npm install)
RUN npm ci

# Copiamos el resto del código fuente
COPY . .

# Construimos la aplicación para producción
RUN npm run build

# ==========================================
# STAGE 2: RUNNER
# Imagen final ligera para producción
# ==========================================
FROM node:20-alpine

WORKDIR /app

# Copiamos solo los artefactos construidos desde el Stage 1
# Ajusta "paydibujos" si el nombre de tu proyecto en angular.json es diferente
COPY --from=builder /app/dist/paydibujos ./dist/paydibujos

# Exponemos el puerto SSR por defecto de Angular
EXPOSE 4000

# Comando de arranque (Angular SSR moderno usa server.mjs)
# Asegúrate de que la ruta coincida con la carpeta generada en dist
CMD ["node", "dist/paydibujos/server/server.mjs"]
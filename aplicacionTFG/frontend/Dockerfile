# Etapa de construcción
FROM node:22

# ENV SERVIDOR=10.88.0.2
# Establecer el directorio de trabajo
WORKDIR /app/svc_frontend

# Copiar los archivos de configuración del paquete
COPY svc_frontend/package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY svc_frontend .

# Construir la aplicación
RUN npm run build

EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]

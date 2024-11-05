# Usa la imagen de Node.js versión 20
FROM node:20

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencia de la aplicación
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente de la aplicación al contenedor
COPY . .

# Expone el puerto 8080 (ajusta si usas otro puerto en tu app.js)
EXPOSE 8080

# Define el comando para iniciar la aplicación
CMD ["node", "src/app.js"]

# Usar una imagen base de Node.js
FROM node:20.19.0-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]

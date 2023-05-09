FROM node:16-alpine

# Installation des dépendances pour PostgreSQL
RUN apk update && apk add postgresql postgresql-client

# Création de l'utilisateur PostgreSQL avec le nom d'utilisateur et le mot de passe personnalisés

# Création du répertoire de travail
WORKDIR /app

# Installation des dépendances de l'application
COPY package*.json ./
RUN npm install

# Copie des fichiers de l'application
COPY . .

# Build de l'application
RUN npm run build

# Exposition du port 3000 utilisé par l'application
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]
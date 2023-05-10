FROM node:16-alpine as production

# Installation des dépendances pour PostgreSQL
RUN apk update && apk add postgresql postgresql-client

# Création de l'utilisateur PostgreSQL avec le nom d'utilisateur et le mot de passe personnalisés

# Création du répertoire de travail
WORKDIR /app

# Installation des dépendances de l'application
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install --only=production

# Copie des fichiers de l'application
COPY . .

# Build de l'application
RUN npm run build


# Étape finale pour l'environnement d'exécution
FROM node:16-alpine as runtime

# Création du répertoire de travail
WORKDIR /app

# Copie des fichiers de l'étape de construction pour l'environnement de production
COPY --from=production /app .

# Exposition du port 3000 utilisé par l'application
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]

FROM node:16-alpine as production

# Installation des dépendances pour PostgreSQL
RUN apk update && apk add libressl-dev ca-certificates

# Création du répertoire de travail
WORKDIR /app
RUN export NODE_ENV=production

# Installation des dépendances de l'application
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install --production

# Copie des fichiers de l'application
COPY . .

RUN npx prisma generate

# Build de l'application
RUN npm run build


# Étape finale pour l'environnement d'exécution
FROM node:16-alpine as runtime

# Création du répertoire de travail
WORKDIR /app

# Copie des fichiers de l'étape de construction pour l'environnement de production
COPY --from=production /app .

EXPOSE 80

ENV PORT=80

# Commande de démarrage de l'application
CMD ["node", ".next/standalone/server.js"]

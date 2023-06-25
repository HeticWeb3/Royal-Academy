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

COPY --from=production /app/public ./public
COPY --from=production /app/.next/standalone ./
COPY --from=production /app/.next/static ./.next/static
COPY --from=production /app/prisma ./prisma
COPY --from=production /app/config/startup.sh ./

EXPOSE 80

ENV PORT=80

# Commande de démarrage de l'application
CMD ["./startup.sh"]

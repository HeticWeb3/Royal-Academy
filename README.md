This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
=======

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Atomic Design

On va utiliser L'atomic design pour avoir un code plus structure et propre et en cas de test unitaire cette architecture nous facilitera la vie pour pas avoir beaucoup de ligne de code a tester, pour en savoir plus et comprendre comment il faut l'utiliser je vous invite a regarder sur ce site [Atomic design documentation](https://blog-ux.com/quest-ce-que-latomic-design/)

## Types

Le dossier Type c'est pour mettre en place tout les interfaces et types de typescript pour ne pas avoir des code inutile dans le front, oublier pas de faire un export pour pouvoir l'utiliser

exemple : 
pour un User on cree un dossier User/user.ts puis on rajoute notre code ensuite on va dans Icon.tsx on import User
et on export:  export * from "User/user"

# Docker
## Env
`.env.development` est envoyé à l'environnement de développement pour définir les variables
`.env.production` est envoyé à l'environnement de production pour définir les variables
## Conteneurs
| Nom      | Port Externe | Port Interne | Variables                                                                               |
|----------|--------------|--------------|-----------------------------------------------------------------------------------------|
| app      | 3000         | 3000         | DATABASE_URL<br/>NEXT_WEBPACK_USEPOLLING<br/>HOST<br/>PORT<br/>ACCESS_TOKEN_SECRET<br/>REFRESH_TOKEN_SECRET |
| db | 5432         | 5432         | PGUSER <br/>POSTGRES_USER<br/>POSTGRES_PASSWORD<br/>POSTGRES_DB                         |
| pgadmin    | 5050         | 80           | PGADMIN_DEFAULT_EMAIL<br/>PGADMIN_DEFAULT_PASSWORD                                      |
## Commandes
Pour lancer le build de l'environnement de développement
```shell
docker-compose -f .\docker-compose-dev.yml up -d --build
```
Mac :
```shell
docker-compose -f docker-compose-dev.yml up -d --build
```

Pour lancer le build de l'environnement de production
```shell
docker-compose -f .\docker-compose.yml up -d --build
```
Mac :
```shell
docker-compose -f .\docker-compose.yml up -d --build
```

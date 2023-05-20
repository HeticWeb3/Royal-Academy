This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
=======
# PostgreSQL
## pgAdmin
### To configure postgre database admin tab follow thoses steps :

Access to pgadmin : http://localhost:5050

>username : admin@admin.com
> 
> password : root


Click on "Add new server"

- On the first tab of the new window, enter a name.
- On the second tab "connection" :
- Enter credentials entered in docker-compose
- To find the db IP, run this command in shell: 
  - ``` docker inspect <CONTAINER>> | grep IPAddress```
  - to find container id : docker ps

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Docker
## Conteneurs
| Nom      | Port Externe | Port Interne | Variables                                               |
|----------|--------------|--------------|---------------------------------------------------------|
| app      | 3000         | 3000         | DATABASE_URL<br/>NEXT_WEBPACK_USEPOLLING                |
| db | 5432         | 5432         | PGUSER <br/>POSTGRES_USER<br/>POSTGRES_PASSWORD<br/>POSTGRES_DB |
| pgadmin    | 5050         | 80           | PGADMIN_DEFAULT_EMAIL<br/>PGADMIN_DEFAULT_PASSWORD      |
## Commandes
Pour lancer le build de l'environnement de développement
```shell
docker-compose -f .\docker-compose-dev.yml up -d --build
```

Pour lancer le build de l'environnement de production
```shell
docker-compose -f .\docker-compose.yml up -d --build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

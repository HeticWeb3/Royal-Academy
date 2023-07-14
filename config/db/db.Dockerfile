FROM postgres

COPY --chmod=0755 ./config/db/create-databases.sh /docker-entrypoint-initdb.d/

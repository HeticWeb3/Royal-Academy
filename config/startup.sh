#!/bin/sh

npx prisma migrate deploy
# start app
node server.js
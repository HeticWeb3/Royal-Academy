#!/bin/sh

npx prisma migrate dev
# start app
npm run dev
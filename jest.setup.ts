const util = require('util');
const exec = require('child_process').execSync;

const resetDB =  () => {
    return exec('npx prisma migrate reset --force --skip-generate')

}

afterAll( () => {
    return resetDB()
});

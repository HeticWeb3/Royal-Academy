const util = require('util');
const exec =  util.promisify(require('child_process').exec);

afterAll(async () => {
    try {
        await exec('npx prisma migrate reset --force --skip-generate')
    } catch(e: any) {
        return
    }
});

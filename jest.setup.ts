const util = require('util');
const exec =  util.promisify(require('child_process').exec);

afterAll(() => exec('npx prisma migrate reset --force --skip-generate'));

// import { homepage } from '../tests/example.spec';
const { homepage } = require('./testcase1_test');

async function artilleryScript(page)
{
    await homepage(page);
}


module.exports = 
{
    artilleryScript
}
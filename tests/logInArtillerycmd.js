// import { homepage } from '../tests/example.spec';
// const { homepage } = require('../tests/test');
const {logInuserArtillery} = require('../tests/logIn');

async function logInArtilleryScript(page)
{
    await logInuserArtillery(page);
}


module.exports = 
{
    logInArtilleryScript
}
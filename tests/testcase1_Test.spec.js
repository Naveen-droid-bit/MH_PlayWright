// import {test} from '@playwright/test';
// import { homepage  } from './test';

const {test} = require('@playwright/test');
const {homepage} = require('../tests/testcase1_test');

test('laodTest', async({page})=>{

  await homepage(page);

});
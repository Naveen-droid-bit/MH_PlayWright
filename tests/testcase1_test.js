// const {expect} = require('@playwright/test');

async function homepage(page)
{
    // page.goto('https://machinehack.com/');
    page.goto('https://development.machinehack.com/');
    await page.waitForLoadState('load');
    await page.waitForTimeout(3000);
    const signinBtn = page.getByRole('button', {name: 'Sign in'});
    const signinBtnisVisible = await signinBtn.isVisible();
    console.log('Sign In button is visible: ', signinBtnisVisible);
    if(signinBtnisVisible){
        console.log('User Succefully landed on Home Page');
    }else{
        console.log('Something went wrong please check');
    }
}


module.exports = {
    homepage,
}
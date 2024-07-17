async function aiPractice(page) {


    // Function to generate Timestamp
    function getISO8601Timestamp() {

        return new Date().toISOString();
    }
    // console.log('Timestamp: ', getISO8601Timestamp()); // e.g., 2024-07-16T07:42:53.123Z

    // await page.goto('https://development.machinehack.com/');
    // await page.goto('https://machinehack.com/');
    await page.goto('http://192.168.0.232:3000/');

    

    // Adding load state for the website to get stabled
    await page.waitForLoadState('load');
    // await page.waitForTimeout(60000);
    const timestamp = getISO8601Timestamp();
    await page.screenshot({ path: `./tests/screenshots/screenshot.${timestamp}.png` });
    const signinBtn = page.getByRole('button', { name: 'Sign in' });
    
    const signinBtnisVisible = await signinBtn.isVisible();
    console.log('Sign In button is visible: ', signinBtnisVisible);
    if (signinBtnisVisible) {
        console.log('User Succefully landed on Home Page');
    } else {
        console.log('Something went wrong please check');
    }
    await signinBtn.click();
    const loginModalValidate = page.getByRole('heading', { name: 'Login to your account' }).locator('b');
    const loginModalValidateisVisbile = await loginModalValidate.isVisible();
    if (loginModalValidateisVisbile) {
        console.log('Login Modal Is Visible');
    } else {
        console.log('Ooops, Something Went Wrong');
    }


    // User click on mail and login 
    const mail = page.getByRole('button', { name: 'mail svg' });
    const mail_isVisible = await mail.isVisible();
    if (mail_isVisible) {
        console.log('mail_isVisible', mail_isVisible);
    } else {
        console.error('Something went wrong');
    }
    await mail.click();


    // User Enters valid credentials and login
    await page.getByPlaceholder('Email', { exact: true }).click();
    await page.getByPlaceholder('Email', { exact: true }).fill('rigabob238@calunia.com');
    await page.getByPlaceholder('Password', { exact: true }).click();
    await page.getByPlaceholder('Password', { exact: true }).fill('Test@123');
    await page.waitForTimeout(3000);
    const wrongCreds = page.getByText('Wrong credentials entered!');
    const wrongCreds_isVisible = await wrongCreds.isVisible();
    const Unauthorized = page.getByText('This email is not associated with any MH accounts');
    const Unauthorized_isVisible = await Unauthorized.isVisible();
    await page.getByRole('button', { name: 'Login', exact: true }).click();



    // Validation to check if user is Authorized or Unauthorized
    if (wrongCreds_isVisible || Unauthorized_isVisible) {
        console.log('Unauthorized User Please/Wrong credentials entered!, Please Try again');
    } else {
        console.log('User LogedIn-Pass');
    }
    await page.reload({ waitUntil: 'load' });
    await page.waitForLoadState('domcontentloaded'); // Wait for the page to reach 'domcontentloaded' state
    await page.waitForLoadState('networkidle'); // Wait for the page to reach 'networkidle' state
    const MH_validateMsg = page.getByText('Where AI Developers Become Industry Innovators', { exact: true });
    const MH_validateMsg_isVisible = await MH_validateMsg.isVisible();

    // validating of user have landed on homepage post logIn using valid creds
    if (MH_validateMsg_isVisible) {
        console.log('User loggedIn successfully and landed on home page');
    } else {
        console.log('Something went wrong during logIn, Please check');
    }
}


module.exports = {
    aiPractice
}
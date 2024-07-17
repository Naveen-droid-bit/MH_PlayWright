const { test } = require('@playwright/test');
import { aiPractice } from './aiPractice';




test('AI_Practice', async ({ page }) => {
    function getISO8601Timestamp() {

        return new Date().toISOString();
    }

    await aiPractice(page);


    // const streakmsg = awa
    await page.getByRole('heading', { name: 'AI Hackathon', exact: true }).click();
    const hackathonURL = page.url();
    const exhacathonURL = '/hackathons';
    if (hackathonURL.includes(exhacathonURL)) {
        console.log('User landed on Hackathon listing page');
    } else {
        console.log('Something went wrong while loading hackathon listing page');
        const timestamp = getISO8601Timestamp();
        await page.screenshot({ path: `./tests/screenshots/screenshot.mh_hack.${timestamp}.png`});
    }
});
const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

// test('Browser Context Playwright test',async ({browser})=>
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.google.com/");
// });


// test.only('First Playwright test',async ({page})=>
//     {
//         // const context = await browser.newContext();
//         // const page = await context.newPage();
//         await page.goto("https://www.google.com/");
//         console.log(await page.title());
//         await expect(page).toHaveTitle("Google");


//     })

test.only('chatapp login', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahalshettyacademy");
    await page.locator('[type="password"]').fill("PAssword@123");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/passwords");


})




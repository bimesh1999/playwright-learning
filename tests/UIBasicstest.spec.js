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

test('chatapp login', async ({page})=>{
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const getList = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshettyacademy");
    await page.locator('[type="password"]').fill("learning");
    await signIn.click();
    // console.log(await page.locator("[style*='block']").textContent());
    // await expect(await page.locator("[style*='block']")).toContainText("Incorrect username/password");
    //file
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await getList.nth(1).textContent());
    console.log(await getList.first().textContent());
    const allList =await getList.allTextContents();
    console.log(allList);
})


test("UI controls", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*= 'documents']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".customradio").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".customradio").last().isChecked());
    expect(await page.locator(".customradio").last().isChecked()).toBe(true); //toBEFalsy() can also be used
    await page.locator("#terms").check(); //uncheck can be used to uncheck the checkbox
    await expect(documentLink).toHaveAttribute("class", "blinkingsText");
    // await page.pause();
})



 test("child tab", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(" https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*= 'documents']");
const [newPage] = await Promise.all([     //page can return multiple window
    context.waitForEvent('page'),  //listen for new page
    documentLink.click(),    
    
]);
   const text = await newPage.locator(".red").textContent();
   const arrayText = text.split("@");
   const mid = arrayText[1].split(" ")[0];
   const domain = mid.split(".com")[0];


    console.log(domain);

    console.log(text);
    await page.locator("#username").fill(domain);
    await page.pause()
})

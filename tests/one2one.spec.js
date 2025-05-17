const {test, expect} = require('@playwright/test');

test.only('end to end test', async ({page})=>{
    const productName = "zara coat 3";
    const products = await page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle'); 
   const count = await products.count();
//    console.log(count);
   for(let i=0; i<count; i++)
   {
   if (await products.nth(i).locator("b").textContent() === productName){
    await product.nth(i).locator("text=Add To Cart").click();
    break;
   }
   }
       

    
})
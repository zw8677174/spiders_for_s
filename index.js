const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: './chrome-linux/chrome'
  });
  const page = await browser.newPage();
  await page.goto('https://www.nike.com/cn/launch/t/daybreak-lavender-mist/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

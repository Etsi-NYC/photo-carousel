const puppeteer = require('puppeteer');

test('First Test', async() => {
	let browser = await puppeteer.launch({
		headless: false,
	});
	let page = await browser.newPage();

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.jsEzHv');

	const html = await page.$eval('.jsEzHv', e => e.innerHTML);
	expect(html).toBe('Description');

	browser.close();
}, 16000)
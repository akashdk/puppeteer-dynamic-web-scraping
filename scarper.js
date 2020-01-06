const puppeteer = require("puppeteer");


let scraper = async () => {
    try {
        var browser = await puppeteer.launch({ headless: false });
        var page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 926 });
        await page.goto(`https://havenly.com/interior-design-ideas/bedroom`);
        await page.waitForSelector("body > div:nth-child(10) > div > div > div._3AsRrnyf_HlPxNbe3LOo9v > div._2MsFuPyNXFAJrD7Kig2Gr2 > ul > li");
        await page.$eval('body > div:nth-child(25) > div > span > div > div > div > div > div > button', elem => elem.click());
        var image_collections = await page.evaluate(() => {
            // document.querySelector('body > div:nth-child(25) > div > span > div > div > div > div > div > button').click()
            let images = [];
            let images_dom = document.querySelectorAll('body > div:nth-child(10) > div > div > div._3AsRrnyf_HlPxNbe3LOo9v > div._2MsFuPyNXFAJrD7Kig2Gr2 > ul > li');
            images_dom.forEach((dom_element) => {
                images.push(dom_element.querySelector("div > a > div").outerHTML);
            })
            return images;
        });
        console.log(image_collections);
        await browser.close();
    }
    catch (err) {
        console.log(err)
    }
}

scraper();

import { test, expect, Page } from '@playwright/test';

class CommonActions {


    public async scrollToElement(page: Page, locator: string) {
        await page.locator(locator).scrollIntoViewIfNeeded();
    }

    public async isThisVisible(page: Page, locator: string): Promise<boolean> {
        await page.waitForLoadState();
        await page.locator(locator).scrollIntoViewIfNeeded();
        return await page.isVisible(locator);
        
    }


    public async checked(page: Page, locator: string) {
        await page.waitForLoadState();
        await page.isVisible(locator);
        await page.locator(locator).scrollIntoViewIfNeeded();
        await page.locator(locator).check();
    }


    public async clickElement(page: Page, locator: string) {
        await page.waitForLoadState();
        await page.isVisible(locator);
        await page.locator(locator).scrollIntoViewIfNeeded();
        await page.locator(locator).click({ force: true });
    }

    public async enterText(page: Page, locator: string, writetext: string) {

        await page.isVisible(locator);
        await page.locator(locator).fill(writetext);
    }

    
    public async hoverOver(page: Page, locator: string) {
        await page.isVisible(locator);
        await page.locator(locator).hover();
    }

    public async selectDropdown(page: Page, locator: string, value: any) {
        await page.waitForLoadState();
        await page.isVisible(locator);
        await page.locator(locator).selectOption(value);
    }


}

export { CommonActions }
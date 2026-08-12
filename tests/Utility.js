/**
 * 
 * 
 * @param {import("@playwright/test").Locator } searchLocator 
 * @param {String} searchValue 
 */

export async function selectByValue(searchLocator, searchValue) {
    await searchLocator.selectOption(searchValue);
}

/**
 * 
 * @param {import("@playwright/test").Locator} searchLocator 
 * @param {number} searchIndex 
 */
export async function selectByIndex(searchLocator, searchIndex) {
    await searchLocator.selectOption({index:searchIndex});   
}

/**
 * 
 * @param {import("@playwright/test").Locator} element 
 */
export async function scrollThePage(element){
    await element.scrollIntoViewIfNeeded();
}
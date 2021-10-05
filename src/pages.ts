import { Page } from './page';

class Pages {
    constructor(public pages: Page[]) {}

    public getPagesQuantity(): number {
        return this.pages.length;
    }

    public getPage(index: number): Page {
        return this.pages[index - 1];
    }
}

export {
    Pages
};
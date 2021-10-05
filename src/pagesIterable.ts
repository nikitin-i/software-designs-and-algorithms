import { Pages } from './pages';

class PagesIterable {
    constructor(public pages: Pages) {}

    [Symbol.iterator]() {
        let index = 1;
        let quantity = this.pages.getPagesQuantity();

        return {
            next: function() {
                if (index <= quantity) {
                    const page = this.pages.getPage(index);
                    page.toString = () => `${this.toString()}, ${page.toString()}`;
                    index++;

                    return { done: false, value: page };
                } else {
                    return { done: true };
                }
            }.bind(this)
        };
    }
}

export {
    PagesIterable
}
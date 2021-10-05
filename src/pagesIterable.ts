import { Pages } from './pages';

class PagesIterable {
    constructor(public pages: Pages) {}

    [Symbol.iterator]() {
        let index = 1;
        let quantity = this.pages.getPagesQuantity();

        const next = () => {
            if (index <= quantity) {
                const page = this.pages.getPage(index);
                const parentString = this.toString();
                const pageString = page.toString();

                page.toString = function () {
                    return `${parentString}, ${pageString}`;
                };
                index++;

                return { done: false, value: page };
            } else {
                return { done: true };
            }
        };

        return {
            next
        };
    }
}

export {
    PagesIterable
}
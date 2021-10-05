import { Item } from './item';
import { Pages } from './pages';

class Magazine extends Item {
    public title: string;

    constructor(title: string, pages: Pages) {
        super(pages);

        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getPagesQuantity()}`;
    }
}

export {
    Magazine
}

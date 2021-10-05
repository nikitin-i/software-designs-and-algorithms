import { Item } from './item';
import { Pages } from './pages';

class Book extends Item {
    public title: string;
    public author: string;

    constructor(title: string, author: string, pages: Pages) {
        super(pages);

        this.title = title;
        this.author = author;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getPagesQuantity()}`;
    }
}

export {
    Book
}

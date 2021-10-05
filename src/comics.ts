import { Item } from './item';
import { Pages } from './pages';

class Comics extends Item {
    public title: string;
    public author: string;
    public artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super(pages);

        this.title = title;
        this.author = author;
        this.artist = artist;
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

    public getArtist(): string {
        return this.author;
    }

    public setArtist(author: string): void {
        this.author = author;
    }

    public toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.getPagesQuantity()}`;
    }
}
export {
    Comics
}

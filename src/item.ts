import { PagesIterable } from './pagesIterable';

abstract class Item extends PagesIterable {
    abstract toString(): string
}

export {
    Item
}
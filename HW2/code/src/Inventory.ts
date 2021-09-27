import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
    public items: Array<Item> = [];

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        if (!comparator) {
            this.items = this.items.sort((first, second) => first.value - second.value);
        } else {
            this.items = this.items.sort(comparator.compare);
        }
    }

    public toString(): string {
        return this.items.map(item => item.toString()).join(', ');
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }
}
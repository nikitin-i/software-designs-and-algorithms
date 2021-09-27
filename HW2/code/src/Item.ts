import { Comparable } from './Comparable';

let counter = 0;

export abstract class Item implements Comparable<Item> {
    public readonly id: number;

    public name: string;
    public value: number;
    public weight: number;

    public static get numberOfItems(): number {
        return counter++;
    };

    protected constructor(name: string, value: number, weight: number) {
        this.id = Item.numberOfItems;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    abstract use(): void;

    public compareTo(other: Item): number {
        const {name, value} = other;

        if (this.value !== value) {
            return this.value > value ? 1 : -1;
        }

        return this.name.localeCompare(name);
    }

    public toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    static reset(): void {
        counter = 0;
    }
}

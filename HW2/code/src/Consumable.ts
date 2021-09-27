import { Item } from './Item';

export abstract class Consumable extends Item {
    public consumed: boolean = false;
    public spoiled: boolean;

    protected constructor(name: string, value: number = 0, weight: number = 0, spoiled: boolean) {
        super(name, value, weight);

        this.spoiled = spoiled;
    }

    public use(): string {
        let message;

        if (!this.spoiled && !this.consumed) {
            return this.eat();
        }

        if (this.consumed) {
            message = `There is nothing left of the ${this.name} to consume.`;
        }

        if (this.spoiled) {
            message = `${message}\nYou feel sick.`;
        }

        return message;
    }

    abstract eat(): string;
}
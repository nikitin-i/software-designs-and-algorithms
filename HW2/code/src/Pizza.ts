import { Consumable } from './Consumable';

export class Pizza extends Consumable {
    public numberOfSlices: number;
    public slicesEaten: number = 0;

    constructor(numberOfSlices: number, spoiled: boolean, value?: number, weight?: number) {
        super('pizza', value, weight, spoiled);

        this.numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            return 'You eat a slice of the pizza.';
        }
    }
}
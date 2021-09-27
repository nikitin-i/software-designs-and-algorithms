import { Item } from './Item';

export abstract class Weapon extends Item {
    public baseDamage: number;
    public damageModifier: number = 0;
    public baseDurability: number;
    public durabilityModifier: number = 0;

    public static MODIFIER_CHANGE_RATE: number = 0.05;

    protected constructor(name: string, value: number, weight: number, baseDamage: number, baseDurability: number) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    abstract polish(): void;

    public toString(): string {
        return `${super.toString()}, Damage : ${this.getDamage()} , Durability : ${this.getDurability() * 100}%`;
    }

    public use(): string {
        if(this.getDurability() <= 0) {
            return `You can't use the ${this.name}, it is broken.`;
        }

        this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;

        return `You use the ${this.name}, dealing ${this.getDamage()} points of damage. ${this.getDurability() <= 0 ? 'The hammer breaks.' : ''}`;
    }

    public getDamage(): number {
        return Number((this.baseDamage + this.damageModifier).toFixed(2));
    }

    public getDurability(): number {
        return Number((this.baseDurability + this.durabilityModifier).toFixed(2));
    }
}
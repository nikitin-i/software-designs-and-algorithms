import { Weapon } from './Weapon';

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', value, weight, baseDamage, baseDurability);
    }

    public polish(): void {
        if (this.baseDamage * 0.25 > this.damageModifier) {
            this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}
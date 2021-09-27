import { Weapon } from './Weapon';

export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', value, weight, baseDamage, baseDurability);
    }

    public polish(): void {
        if ((this.getDurability() + Weapon.MODIFIER_CHANGE_RATE) <= 1) {
            this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
        }
    }
}
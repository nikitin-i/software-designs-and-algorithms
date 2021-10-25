import { IShipper } from '../interfaces/IShipper';
import { ShipmentTypes } from '../types/shipmentTypes';

class AirEastShipper implements IShipper {
    private price: number = 0;
    private extraCharge: boolean = false;

    private static letter: number = 0.39;
    private static package: number = 0.25;
    private static oversized: number = 10;

    constructor(type: ShipmentTypes) {
        switch (type) {
            case ShipmentTypes.LETTER: {
                this.price = AirEastShipper.letter;
                break;
            }
            case ShipmentTypes.PACKAGE: {
                this.price = AirEastShipper.package;
                break;
            }
            case ShipmentTypes.OVERSIZED: {
                this.price = AirEastShipper.package;
                this.extraCharge = true;
                break;
            }
        }
    }

    public getCost(weight: number): string {
        return (weight * this.price + (this.extraCharge ? AirEastShipper.oversized : 0)).toFixed(2);
    }
}

export {
    AirEastShipper
};

import { IShipper } from '../interfaces/IShipper';
import { ShipmentTypes } from '../types/shipmentTypes';

class PacificParcelShipper implements IShipper {
    private price: number = 0;

    private static letter: number = 0.51;
    private static package: number = 0.19;
    private static oversized: number = 0.02;

    constructor(type: ShipmentTypes) {
        switch (type) {
            case ShipmentTypes.LETTER: {
                this.price = PacificParcelShipper.letter;
                break;
            }
            case ShipmentTypes.PACKAGE: {
                this.price = PacificParcelShipper.package;
                break;
            }
            case ShipmentTypes.OVERSIZED: {
                this.price = PacificParcelShipper.package + PacificParcelShipper.oversized;
                break;
            }
        }
    }

    public getCost(weight: number): string {
        return (weight * this.price).toFixed(2);
    }
}

export {
    PacificParcelShipper
};

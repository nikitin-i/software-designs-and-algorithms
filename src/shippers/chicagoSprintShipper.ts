import { IShipper } from '../interfaces/IShipper';
import { ShipmentTypes } from '../types/shipmentTypes';

class ChicagoSprintShipper implements IShipper {
    private price: number = 0;

    private static letter: number = 0.42;
    private static package: number = 0.20;

    constructor(type: ShipmentTypes) {
        switch (type) {
            case ShipmentTypes.LETTER: {
                this.price = ChicagoSprintShipper.letter;
                break;
            }
            case ShipmentTypes.PACKAGE: {
                this.price = ChicagoSprintShipper.package;
                break;
            }
            case ShipmentTypes.OVERSIZED: {
                this.price = ChicagoSprintShipper.package;
                break;
            }
        }
    }

    public getCost(weight: number): string {
        return (weight * this.price).toFixed(2);
    }
}

export {
    ChicagoSprintShipper
};

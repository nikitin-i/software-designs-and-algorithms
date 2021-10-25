import { Shipment } from '../shipments/shipment';
import { IState } from '../interfaces/IState';
import { ShipmentTypes } from '../types/shipmentTypes';

class Letter extends Shipment {
    private shipperType: ShipmentTypes = ShipmentTypes.LETTER;

    constructor(state: IState) {
        super(state);

        this.getCost(this.shipperType);
    }
}

export {
    Letter
};
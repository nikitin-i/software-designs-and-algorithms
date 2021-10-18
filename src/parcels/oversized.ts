import { Shipment } from '../shipments/shipment';
import { IState } from '../interfaces/IState';
import { ShipmentTypes } from '../types/shipmentTypes';

class Oversized extends Shipment {
    private shipperType: ShipmentTypes = ShipmentTypes.OVERSIZED;

    constructor(state: IState) {
        super(state);

        this.getCost(this.shipperType);
    }
}

export {
    Oversized
};
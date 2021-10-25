import { Shipment } from '../shipments/shipment';
import { IState } from '../interfaces/IState';
import { ShipmentTypes } from '../types/shipmentTypes';

class Package extends Shipment {
    private shipperType: ShipmentTypes = ShipmentTypes.PACKAGE;

    constructor(state: IState) {
        super(state);

        this.getCost(this.shipperType);
    }
}

export {
    Package
};
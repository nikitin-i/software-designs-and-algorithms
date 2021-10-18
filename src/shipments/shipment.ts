import { IShipment } from '../interfaces/IShipment';
import { IState } from '../interfaces/IState';

import { ShipmentTypes } from '../types/shipmentTypes';

import { AirEastShipper } from '../shippers/airEastShipper';
import { ChicagoSprintShipper } from '../shippers/chicagoSprintShipper';
import { PacificParcelShipper } from '../shippers/pacificParcelShipper';

class Shipment implements IShipment {
    private static shipmentID: number = 1;
    private state: IState;
    private shipper: any;

    constructor(state: IState) {
        this.state = {
            ...state,
            shipmentId: this.getShipmentId()
        };
    }

    getShipmentId(): number {
        return Shipment.shipmentID++;
    }

    getCost(type: ShipmentTypes): void {
        const { fromZipCode: zip } = this.state;

        switch (Number(zip[0])) {
            case 1:
            case 2:
            case 3:
                this.shipper = new AirEastShipper(type);

                break;

            case 4:
            case 5:
            case 6:
                this.shipper = new ChicagoSprintShipper(type);

                break;

            case 7:
            case 8:
            case 9:
                this.shipper = new PacificParcelShipper(type);

                break;
        }
    }

    public ship(): string {
        const { shipmentId, fromAddress, toAddress, marks, weight } = this.state;
        const cost = this.shipper.getCost(weight);

        return `Shipment with ID ${shipmentId} will be picked up from ${fromAddress} and shipped to ${toAddress}\nCost = ${cost} dollars\n${marks ? marks.map(mark => `** MARK ${mark.toUpperCase()} **`).join('\n') : ''}`;
    }
}

export {
    Shipment
};

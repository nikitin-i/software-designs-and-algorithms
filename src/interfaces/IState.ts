import { ShipmentMarks } from '../types/shipmentMarks';

interface IState {
    shipmentId?: number;
    toAddress: string;
    fromAddress: string;
    toZipCode: string;
    fromZipCode: string;
    weight: number;
    marks?: Array<ShipmentMarks>;
}

export {
    IState
};

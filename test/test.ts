import { Gui } from '../src/gui';
import { Client } from '../src/client';

import { ShipmentMarks } from '../src/types/shipmentMarks';

const parcel = {
    toAddress: 'New York, 5th avenue, 123-12',
    fromAddress: 'Dnipro, Barykadnaya street, 16',
    toZipCode: '10130',
    fromZipCode: '49000',
    weight: 260,
    marks: [ShipmentMarks.FRAGILE, ShipmentMarks.DO_NOT_LEAVE]
};

const gui = new Gui();
Client.getInstance(gui);

gui.formParcel(parcel);
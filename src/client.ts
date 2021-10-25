import { Gui } from './gui';
import { Shipment } from './shipments/shipment';

class Client {
    private static client: Client;
    private gui: Gui;

    constructor(gui: Gui) {
        this.gui = gui;

        this.gui.on('ship', this.onShip.bind(this));
    }

    public static getInstance(gui: Gui): Client {
        if (!Client.client) {
            Client.client = new Client(gui);
        }

        return Client.client;
    }

    public onShip(shipment: Shipment): void {
        console.log(shipment.ship());
    }
}

export {
    Client
};

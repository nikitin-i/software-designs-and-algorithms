import { Letter } from './parcels/letter';
import { Package } from './parcels/package';
import { Oversized } from './parcels/oversized';

import { IState } from './interfaces/IState';

type callback = (state: any) => void;
type events = {[key: string]: Array<callback>};

class Gui {
    private static maxLetterWeight: number = 15;
    private static maxPackageWeight: number = 160;

    private events: events = {};
    private parcel = {};

    constructor() {}

    public formParcel(state: IState) {
        if (state.weight > Gui.maxPackageWeight) {
            this.parcel = new Oversized(state);
        } else if (state.weight <= Gui.maxLetterWeight) {
            this.parcel = new Letter(state);
        } else {
            this.parcel = new Package(state);
        }

        this.trigger('ship');
    }

    public on(event: string, callback: callback): void {
        if (this.events[event]) {
            this.events[event].push(callback)
        } else {
            this.events[event] = [callback]
        }
    }

    public trigger(event: string): void {
        this.events[event].forEach((callback: callback) => callback(this.parcel))
    }
}

export {
    Gui
};

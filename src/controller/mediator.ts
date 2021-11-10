import { IMediator } from '../interfaces/IMediator';

class Mediator implements IMediator {
    public _events: any = {};

    constructor() {}

    subscribe(event: string, fn: any) {
        if (!this._events[event]) {
            this._events[event] = [];
        }

        this._events[event].push({ context: this, callback: fn });

        return this;
    }

    publish(event: string, data: any) {
        if (!this._events[event]) {
            return false;
        }

        for (let i = 0; i < this._events[event].length; i++) {
            const subscription = this._events[event][i];
            subscription.callback.apply(subscription.context, [data]);
        }

        return this;
    }
}

export {
    Mediator
};

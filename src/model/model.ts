import { IModel } from '../interfaces/IModel';
import { IMediator } from '../interfaces/IMediator';

class Model implements IModel {
    readonly defaults: any = {
        constants: {
            GET_CURRENCY_SERVICE: './rates.json'
        }
    };

    private _rates: any = {};

    constructor(public mediator: IMediator) {}

    init(): void {
        this.getCurrencyRates().then(this.getCurrencyRatesSuccess.bind(this), this.getCurrencyRatesError.bind(this));
    }

    async getCurrencyRates() {
        const response = await fetch(this.defaults.constants.GET_CURRENCY_SERVICE);

        return await response.json();
    }

    getCurrencyRatesSuccess(data: any): void {
        this._rates = data;

        this.mediator.publish('GET_CURRENCY_RATE', this._rates);
    }

    getCurrencyRatesError(data: any): void {
        console.error('Bad request!');

        this.mediator.publish('GET_CURRENCY_RATE', {error: 'trololo!'});
    }
}

export {
    Model
};
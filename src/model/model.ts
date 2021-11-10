import { IModel } from '../interfaces/IModel';
import { IMediator } from '../interfaces/IMediator';
import { IRates, IRate } from '../interfaces/IRates';

import { getCurrencyRates } from '../utils/mockServise';
import { EVENTS } from '../utils/vars';

class Model implements IModel {
    private _rates: IRates;

    constructor(public mediator: IMediator) {}

    init(): void {
        getCurrencyRates().then(this.getCurrencyRatesSuccess.bind(this));
    }

    getCurrencyRatesSuccess(data: IRates): void {
        this._rates = data;
        const expandedRates = this.expandRatesByCalculation();

        this.mediator.publish(EVENTS.GET_CURRENCY_RATES, expandedRates);
    }

    expandRatesByCalculation(): IRates {
        this._rates!.rates.forEach((item: IRate) => item.calculation = (item.rate * item.amount).toFixed(2));

        return this._rates;
    }

    updateRatesData(data: any): void {
        this._rates!.rates.forEach((item: IRate) => item.code === data.currency && (item.amount = Number(data.amount)));

        this.getCurrencyRatesSuccess(this._rates);
    }
}

export {
    Model
};
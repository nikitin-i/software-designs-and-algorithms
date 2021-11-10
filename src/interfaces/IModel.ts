import { IMediator } from './IMediator';
import { IRates } from './IRates';

interface IModel {
    mediator: IMediator;
    init(): void;
    getCurrencyRatesSuccess(data: IRates): void;
    expandRatesByCalculation(): IRates;
    updateRatesData(data: any): void;
}

export {
    IModel
};

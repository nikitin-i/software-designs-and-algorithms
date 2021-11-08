import { IMediator } from './IMediator';

interface IModel {
    mediator: IMediator;
    init(): void;
    getCurrencyRatesSuccess(data: any): void;
}

export {
    IModel
};

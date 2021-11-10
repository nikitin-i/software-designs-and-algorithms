import { IMediator } from './IMediator';
import { IRates } from './IRates';

interface IView {
    mediator: IMediator;
    activeTab: string;
    rates: IRates;
    container: HTMLElement;
    init(): void;
    bindEvents(): void;
    getCurrencyRatesHandler(data: IRates): void;
    defineActiveTemplate(tab: string): any;
    tabsClickHandler(e: Event): void;
    inputChangeHandler(e: Event): void;
}

interface ITemplate {
    renderBaseTemplate(): void;
    renderRatesTemplate(tab: string): void;
}

export {
    IView,
    ITemplate
};

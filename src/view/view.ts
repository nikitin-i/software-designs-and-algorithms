var Mustache = require('mustache');

import { IView, ITemplate } from '../interfaces/IView';
import { IMediator } from '../interfaces/IMediator';
import { IRates } from '../interfaces/IRates';
import { EVENTS } from '../utils/vars';

import { baseTemplate } from './templates/base';
import { inputsTemplate } from './templates/inputs';
import { rangesTemplate } from './templates/ranges';

class View implements IView, ITemplate {
    readonly defaults: any = {
        constants: {
            APP_TITLE: 'Currency Convertor',
            APP_PRODUCTION: 'Produced by Google Inc.',
            APP_TABS: [{
                label: 'Inputs',
                value: 'inputs',
                state: 'Checked'
            }, {
                label: 'Ranges',
                value: 'ranges',
                state: ''
            }]
        },
        selectors: {
            CONTAINER: '#container',
            RATES: '.currency-convertor__rates',
            TABS: '.currency-convertor__tabs'
        }
    };

    public mediator: IMediator;
    public activeTab: string = 'inputs';
    public rates: IRates;
    public container: HTMLElement = document!.querySelector(this.defaults.selectors.CONTAINER);

    constructor(mediator: IMediator) {
        this.mediator = mediator;
    }

    init(): void {
        this.bindEvents();
        this.renderBaseTemplate();
    }

    bindEvents(): void {
        this.mediator.subscribe(EVENTS.GET_CURRENCY_RATES, this.getCurrencyRatesHandler.bind(this));

        this.container.addEventListener('change', this.inputChangeHandler.bind(this));
    }

    getCurrencyRatesHandler(rates: IRates): void {
        this.rates = rates;

        this.renderRatesTemplate(this.activeTab);
    }

    defineActiveTemplate(tab: string): any {
        return tab === 'inputs' ? inputsTemplate : rangesTemplate
    }

    renderBaseTemplate(): void {
        const rendered: any = Mustache.render(baseTemplate, {
            title: this.defaults.constants.APP_TITLE,
            production: this.defaults.constants.APP_PRODUCTION,
            tabs: this.defaults.constants.APP_TABS
        });

        this.container!.innerHTML = rendered;

        this.afterBaseRender();
    }

    afterBaseRender(): void {
        this.container!.querySelector(this.defaults.selectors.TABS)!.addEventListener('click', this.tabsClickHandler.bind(this));
    }

    renderRatesTemplate(tab: string): void {
        const activeTemplate = this.defineActiveTemplate(tab);
        const { baseCurrencyCode, baseCurrencyValue, rates } = this.rates;

        const ratesRendered: any = Mustache.render(activeTemplate, {
            baseCurrencyCode,
            baseCurrencyValue,
            rates
        });

        this.container.querySelector(this.defaults.selectors.RATES)!.innerHTML = ratesRendered;
    }

    tabsClickHandler(e: Event): void {
        const id = (e.target as HTMLInputElement).id;

        if (id && this.activeTab !== id) {
            this.activeTab = id;

            this.renderRatesTemplate(this.activeTab);
        }
    }

    inputChangeHandler(e: Event): void {
        const target = e.target as HTMLInputElement;

        if (target.name === 'base') {
            const {id, value} = target;

            this.mediator.publish(EVENTS.CHANGE_BASE_INPUT_VALUE, {
                currency: id,
                amount: value
            });
        }
    }
}

export {
    View
};
var Mustache = require('mustache');

import { baseTemplate } from './templates/base';
import { IView } from '../interfaces/IView';
import { IMediator } from '../interfaces/IMediator';

abstract class View implements IView {
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
            CONTAINER: 'container'
        }
    };

    renderBaseTemplate(): void {
        const rendered: any = Mustache.render(baseTemplate, {
            title: this.defaults.constants.APP_TITLE,
            production: this.defaults.constants.APP_PRODUCTION,
            tabs: this.defaults.constants.APP_TABS
        });

        document!.getElementById(this.defaults.selectors.CONTAINER)!.innerHTML = rendered;
    }

    abstract init(): void;
    abstract renderTemplate(): void;
    abstract mediator: IMediator;
}

export {
    View
};
import { View } from './view';
import { IMediator } from '../interfaces/IMediator';

class InputView extends View {
    readonly type: string = 'input';

    constructor(public mediator: IMediator) {
        super();

        this.init();
    }

    init(): void {
        this.mediator.subscribe('GET_CURRENCY_RATE', function(data: any) {console.log('handler', data)} );
        console.log(this.mediator);
    }

    renderTemplate() {}
}

export {
    InputView
};
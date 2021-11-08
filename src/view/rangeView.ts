import { View } from './view';
import { IMediator } from '../interfaces/IMediator';

class RangeView extends View {
    readonly type: string = 'range';

    constructor(public mediator: IMediator) {
        super();

        this.init();
    }

    init(): void {
        console.log('RangeView has been initialized!');
    }

    renderTemplate() {}
}

export {
    RangeView
};
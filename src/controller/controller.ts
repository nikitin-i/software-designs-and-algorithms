import { IMediator } from '../interfaces/IMediator';
import { IModel } from '../interfaces/IModel';
import { IView } from '../interfaces/IView';
import { IController } from '../interfaces/IController';

import { EVENTS } from '../utils/vars';

class Controller implements IController{
    public mediator: IMediator;
    readonly _view: IView;
    readonly _model: IModel;

    constructor(model: IModel, view: IView, mediator: IMediator) {
        this.mediator = mediator;
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.init();
        this._view.init();

        this.bindEvents();
    }

    bindEvents(): void {
        this.mediator.subscribe(EVENTS.CHANGE_BASE_INPUT_VALUE, this.changeInputHandler.bind(this));
    }

    changeInputHandler(data: any): void {
        this._model.updateRatesData(data);
    }
}

export {
    Controller
};

import { IMediator } from './IMediator';
import { IView } from './IView';
import { IModel } from './IModel';

interface IController {
    mediator: IMediator;
    readonly _view: IView;
    readonly _model: IModel;
    init(): void;
    bindEvents(): void;
    changeInputHandler(data: any): void;
}

export {
    IController
};

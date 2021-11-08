import { IMediator } from '../interfaces/IMediator';
import { IModel } from '../interfaces/IModel';
import { View } from '../view/view';

class Controller {
    public mediator: IMediator;
    private _views: View[];
    private _model: IModel;
    private _activeView: View;

    constructor(model: IModel, views: View[], mediator: IMediator) {
        this.mediator = mediator;
        this._model = model;
        this._views = views;
        this._activeView = views[0];
    }

    public init() {
        this.expandAccessToMediator();
        this._model.init();
        this._activeView.renderBaseTemplate();
    }

    expandAccessToMediator(): void {
        this._views.forEach(view => view.mediator = this.mediator);
        this._model.mediator = this.mediator;
    }
}

export {
    Controller
};

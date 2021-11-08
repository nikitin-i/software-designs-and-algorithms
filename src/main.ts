import { Controller } from './controller/controller';
import { Model } from './model/model';
import { InputView } from './view/inputView';
import { RangeView } from './view/rangeView';
import { Mediator } from './controller/mediator';

const mediator = new Mediator();
const model = new Model(mediator);
const inputView = new InputView(mediator);
const rangeView = new RangeView(mediator);

const controller = new Controller(model, [inputView, rangeView], mediator);
controller.init();
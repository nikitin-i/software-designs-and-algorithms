import { Controller } from './controller/controller';
import { Model } from './model/model';
import { View } from './view/view';
import { Mediator } from './controller/mediator';

const mediator = new Mediator();
const model = new Model(mediator);
const view = new View(mediator);

const controller = new Controller(model, view, mediator);
controller.init();
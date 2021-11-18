import { ITaskRunner } from './interfaces/ITaskRunner';
import { ITask } from './interfaces/ITask';
import { IPriorityQueue } from './interfaces/IPriorityQueue';

class TaskRunner implements ITaskRunner {
    constructor(public queue: IPriorityQueue) {}

    addTask(task: ITask) {
        this.queue.push(task);
    }

    run() {
        this.queue?.store?.forEach((task: ITask) => task.doAction());
    }
}

export {
    TaskRunner
};

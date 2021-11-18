import { ITask } from './ITask';

interface IPriorityQueue {
    store: Array<ITask>;
    push(task: ITask): void;
    findInsertIndex(task: ITask): number;
}

export {
    IPriorityQueue
};

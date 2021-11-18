import { IPriorityQueue } from './interfaces/IPriorityQueue';
import { ITask } from './interfaces/ITask';

class PriorityQueue implements IPriorityQueue {
    public store: Array<ITask> = [];

    push(task: ITask) {
        if (!this.store.length) {
            this.store.push(task);
        } else {
            const insertIndex = this.findInsertIndex(task);

            this.store.splice(insertIndex, 0, task);
        }
    }

    findInsertIndex(task: ITask): number {
        let start = 0;
        let end = this.store.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (this.store[mid]?.priority === task.priority) {
                return mid;
            } else if (this.store[mid].priority < task.priority) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return end + 1;
    }
}

export {
    PriorityQueue
};

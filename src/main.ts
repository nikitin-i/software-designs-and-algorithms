import { Task } from './Task';
import { TaskRunner } from './TaskRunner';
import { PriorityQueue } from './PriorityQueue';

const PRIORITY_QUEUE_QUANTITY = 10000;

const queue = new PriorityQueue();
const taskRunner = new TaskRunner(queue);

for (let i = 0; i < PRIORITY_QUEUE_QUANTITY; i++) {
    taskRunner.addTask(new Task('do something important', () => console.log('Do it after task execution...')));
}

console.time('Total time');

taskRunner.run();

console.timeEnd('Total time');
import { ITask } from './ITask';

interface ITaskRunner {
    addTask(task: ITask): void;
    run(): void;
}

export {
    ITaskRunner
};

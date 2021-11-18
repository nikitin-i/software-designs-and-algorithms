import { ITask } from './interfaces/ITask';

class Task implements ITask {
    public priority: number;

    constructor(public description: string, public callback: Function) {
        this.definePriority();
    }

    definePriority(): void {
        this.priority = Math.floor(Math.random() * 1000);
    }

    doAction(): void {
        console.log(`Task with priority ${this.priority} and description - ${this.description} - has been successfully done!`)
        this.callback();
    }
}

export {
    Task
};

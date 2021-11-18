interface ITask {
    priority: number;
    description: string;
    definePriority(): void;
    doAction(): void;
}

export {
    ITask
};

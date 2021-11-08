interface IMediator {
    _events: any;
    subscribe(event: string, fn: any): any;
    publish(event: string, data: any): any;
}

export {
    IMediator
};

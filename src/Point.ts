export class Point {
    readonly initX: number = 0;
    readonly initY: number = 0;
    private _x: number;
    private _y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this._x = x || 0;
        this._y = y || 0;
    }

    toString(): string {
        return `(${this._x}, ${this._y})`;
    }

    distance();
    distance(newX: number, newY: number);
    distance(other: Point);
    distance(newX?: any, newY?: any): number {
        if (typeof newX === 'undefined' ) {
            return Math.sqrt((this._x - this.initX) ** 2 + (this._y - this.initY) ** 2);
        } else if (typeof newX === 'number' && typeof newY === 'number') {
            return Math.sqrt((newX - this._x) ** 2 + (newY - this._y) ** 2);
        } else if (typeof newX === 'object') {
            return Math.sqrt((newX['_x'] - this._x) ** 2 + (newX['_y'] - this._y) ** 2);
        }
    }
}

import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    points: Point[];

    constructor(userPoints: Point[]);
    constructor(userPoints: Point[], userColor: string, userFilled: boolean);
    constructor(userPoints: Point[], userColor?: string, userFilled?: boolean) {
        this.points = userPoints;
        this.color = userColor || 'green';
        this.filled = typeof userFilled !== 'undefined' ? userFilled : true;

        if (userPoints.length < 3) {
            throw new Error('You have to pass three points!');
        }
    }

    toString(): string {
        const points: string = this.points.map(point => [`(${point['_x']}, ${point['_y']})`]).join(', ');

        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${points}.`;
    };

    getPerimeter(): number {
        const sideFirst: number = Math.round(this.points[0].distance(this.points[1]['_x'], this.points[1]['_y']) * 10) / 10;
        const sideSecond: number = Math.round(this.points[1].distance(this.points[2]['_x'], this.points[2]['_y']) * 10) / 10;
        const sideThird: number = Math.round(this.points[2].distance(this.points[0]['_x'], this.points[0]['_y']) * 10) / 10;

        return sideFirst + sideSecond + sideThird;
    };

    abstract getType(): string;
}



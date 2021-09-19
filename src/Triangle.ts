import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {
    constructor(pointA: Point, pointB: Point, pointC: Point);
    constructor(pointA: Point, pointB: Point, pointC: Point, userColor: string, userFilled: boolean);
    constructor(pointA: Point, pointB: Point, pointC: Point, userColor?: string, userFilled?: boolean) {
        super([pointA, pointB, pointC]);

        if (userColor) {
            this.color = userColor || 'green';
        }

        if (userFilled) {
            this.filled = typeof userFilled !== 'undefined' ? userFilled : true;
        }
    }

    toString(): string {
        const points: string = this.points.map((point, index) => [`v${index + 1}=(${point['_x']}, ${point['_y']})`]).join(',');

        return `Triangle[${points}]`;
    }

    getType(): string {
        const sideFirst: number = Math.round(this.points[0].distance(this.points[1]['_x'], this.points[1]['_y']) * 10) / 10;
        const sideSecond: number = Math.round(this.points[1].distance(this.points[2]['_x'], this.points[2]['_y']) * 10) / 10;
        const sideThird: number = Math.round(this.points[2].distance(this.points[0]['_x'], this.points[0]['_y']) * 10) / 10;

        const isEquilateral: string = (sideFirst === sideSecond && sideFirst === sideThird && sideSecond === sideThird) && 'equilateral triangle';
        const isIsosceles: string = (sideFirst === sideSecond || sideFirst === sideThird || sideSecond === sideThird) && 'isosceles triangle';
        const isScalene: string = (sideFirst !== sideSecond && sideFirst !== sideThird && sideSecond !== sideThird) && 'scalene triangle';

        return isEquilateral || isIsosceles || isScalene;
    }
}

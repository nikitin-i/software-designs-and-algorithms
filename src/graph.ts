import { IGraph } from './interfaces/IGraph';
import { Dijkstras } from './algorithms/Dijkstras';

class Graph extends Dijkstras implements IGraph {
    constructor(public vertices: number = 1) {
        super();

        this.init();
    }

    init(): void {
        for (let i = 0; i < this.vertices; i++) {
            this.adjacency_matrix.push(new Array(this.vertices).fill(0))
        }
    }

    addVertex(value: number): void {
        this.vertices += 1;

        this.adjacency_matrix.forEach((row) => row.push(0))
        this.adjacency_matrix.push(new Array(this.vertices).fill(0))
    }

    addEdge(vertex1: number, vertex2: number, distance: number = 0): void {
        if (vertex1 > this.vertices - 1 || vertex2 > this.vertices - 1) {
            throw new Error('Passed wrong vertices!');
        } else if (vertex1 === vertex2) {
            throw new Error('Passed the same vertices!');
        } else {
            this.adjacency_matrix[vertex1][vertex2] = distance;
            this.adjacency_matrix[vertex2][vertex1] = distance;
        }
    }

    printAdjacencyMatrix() {
        console.log('Adjacency matrix:');

        for (let i = 0; i < this.vertices; i++) {
            let matrix = '';

            for (let j = 0; j < this.vertices; j++) {
                matrix += ` ${this.adjacency_matrix[i][j]} `;
            }

            console.log(matrix);
        }
    }
}

export {
    Graph
};

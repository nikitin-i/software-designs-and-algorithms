import { IAlgorithm } from '../interfaces/IAlgorithm';

class Dijkstras implements IAlgorithm {
    public adjacency_matrix: number[][] = [];

    findShortestWay(start: number, end: number): number {
        if (start > end) {
            throw new Error('End number has to be bigger than start one!');
        }

        const vertices: number = this.adjacency_matrix[0].length;
        const shortestDistances: number[] = new Array(vertices).fill(Number.MAX_VALUE);
        const visited: boolean[] = new Array(vertices).fill(false);
        const parents: number[] = new Array(vertices).fill(-1);

        shortestDistances[start] = 0;

        for (let i = 1; i < vertices; i++) {
            let nearestVertex = -1;
            let shortestDistance = Number.MAX_VALUE;

            for (let j = 0; j < vertices; j++) {
                if (!visited[j] && shortestDistances[j] < shortestDistance) {
                    nearestVertex = j;
                    shortestDistance = shortestDistances[j];
                }
            }

            for (let j = 0; j < vertices; j++) {
                let edgeDistance = this.adjacency_matrix[nearestVertex][j];

                if (edgeDistance > 0 && ((shortestDistance + edgeDistance) < shortestDistances[j]))
                {
                    parents[j] = nearestVertex;
                    shortestDistances[j] = shortestDistance + edgeDistance;
                }
            }

            visited[nearestVertex] = true;
        }

        this.printResult(start, end, shortestDistances, parents);

        return shortestDistances[end];
    }

    printResult(start: number, end: number, distances: number[], parents: number[]) {
        const distance = `The shortest path: ${start} -> ${end} takes at least - ${distances[end]} units`;

        console.log(distance);
        console.log('Vertices are: ');

        this.printVertices(end, parents);
    }

    printVertices(currentVertex: number, parents: number[]) {
        if (currentVertex === -1) {
            return;
        }

        this.printVertices(parents[currentVertex], parents);

        console.log(currentVertex);
    }
}

export {
    Dijkstras
};

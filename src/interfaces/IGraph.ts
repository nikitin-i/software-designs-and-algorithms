interface IGraph {
    addVertex(value: number): void;
    addEdge(vertex1: number, vertex2: number): void;
    printAdjacencyMatrix(): void;
}

export {
    IGraph
};

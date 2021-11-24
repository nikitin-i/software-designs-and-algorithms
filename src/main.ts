import { Graph } from './graph';

const graph = new Graph(5);

graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);

graph.addEdge(0, 1, 4);
graph.addEdge(0, 4, 15);
graph.addEdge(0, 5, 18);
graph.addEdge(0, 7, 16);
graph.addEdge(1, 2, 6);
graph.addEdge(2, 3, 1);
graph.addEdge(2, 5, 6);
graph.addEdge(3, 4, 1);
graph.addEdge(4, 5, 1);
graph.addEdge(4, 6, 4);
graph.addEdge(4, 7, 3);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);

graph.printAdjacencyMatrix();
graph.findShortestWay(2, 7);

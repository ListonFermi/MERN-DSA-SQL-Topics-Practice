class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
  }

  addEdges(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  depthFirstRecursive(start) {
    const visited = {};
    const result = [];
    const graph = this.adjacencyList;

    (function dfs(vertex) {
      result.push(vertex);
      visited[vertex] = true;

      graph[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    })(start);

    return console.log(result);
  }

  breadthFirstSearch(start) {
    const visited = {};
    const queue = [start];

    while (queue.length) {
      const curr = queue.shift();
      if (!visited[curr]) {
        console.log(curr);

          for (let neighbor of this.adjacencyList[curr]) {
            queue.push(neighbor);
          }

        visited[curr] = true;
      }
    }
  }
}

const graph = new Graph();
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "A");
console.log(graph.adjacencyList);
graph.depthFirstRecursive("A");
graph.breadthFirstSearch("A");

// Create the adjacency list for the graph
const graph = {};

// Function to add edges to the graph
function addEdge(from, to) {
    if (!graph[from]) {
        graph[from] = [];
    }
    graph[from].push(to);
}

// Add edges
addEdge('Paris', 'Skopje');
addEdge('Zurich', 'Amsterdam');
addEdge('Prague', 'Zurich');
addEdge('Barcelona', 'Berlin');
addEdge('Kiev', 'Prague');
addEdge('Skopje', 'Paris');
addEdge('Amsterdam', 'Barcelona');
addEdge('Berlin', 'Kiev');
addEdge('Berlin', 'Amsterdam');

// Define the cities visited and starting point
const cities = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Berlin', 'Barcelona'];
const startingCity = 'Kiev';

// Function to find the route
function findRoute(start, citiesCount) {
    const path = [start];
    const visited = new Set([start]);

    function dfs(currentCity) {
        if (path.length === citiesCount) {
            return true;
        }

        if (!graph[currentCity]) {
            return false;
        }

        for (let nextCity of graph[currentCity]) {
            if (!visited.has(nextCity)) {
                visited.add(nextCity);
                path.push(nextCity);

                if (dfs(nextCity)) {
                    return true;
                }

                // Backtrack
                visited.delete(nextCity);
                path.pop();
            }
        }
        return false;
    }

    if (dfs(start)) {
        return path;
    } else {
        return "No route found";
    }
}

// Find the route
const route = findRoute(startingCity, cities.length);

console.log(route);

// Time: O(nlogn)
// Space: O(n)
const { MaxPriorityQueue, } = require('@datastructures-js/priority-queue');

var kClosest = function (points, k) {
    let maxPQ = new MaxPriorityQueue();
    for (let point of points) {
        let dist = squaredDistance(point);
        console.log(dist)
        if (maxPQ.size() < k) {
            // Fill the max PQ up to k points
            maxPQ.enqueue(point, dist);
        } else if (dist < maxPQ.front().priority) {
            // If the max PQ is full and a closer point is found,
            // discard the farthest point and add this one
            maxPQ.dequeue();
            maxPQ.enqueue(point, dist);
        }
    }

    // Return all points stored in the max PQ
    maxPQ.toArray().map((elem) => console.log(...elem))
    return maxPQ.toArray().map((el) => el.element);
};

// Calculate and return the squared Euclidean distance
const squaredDistance = ([x, y]) => x ** 2 + y ** 2;

const points = [[3, 3], [5, -1], [-2, 4]];
const result = kClosest(points, 2)
console.log([...result]);

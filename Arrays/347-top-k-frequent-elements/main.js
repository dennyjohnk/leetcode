const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var topKFrequent = function (nums, k) {
    const map = new Map();
    const maxPQ = new MaxPriorityQueue((elem) => elem.value);

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    console.log(map);

    for (const [key, value] of map) {
        if (maxPQ.size() < k)
            maxPQ.enqueue({ key, value })
        else if (value > maxPQ.front().value) {
            maxPQ.dequeue();
            maxPQ.enqueue({ key, value })
        }
    }
    console.log(maxPQ.toArray().map((elem) => elem.key))
    return (maxPQ.toArray().map((elem) => elem.key));
};

const nums = [3, 0, 1, 0];
const result = topKFrequent(nums, 1);
console.log(result);
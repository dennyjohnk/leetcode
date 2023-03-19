const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue');

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();
        for (const num of nums) {
            this.add(num)
        }
    }

    add(val, { minHeap } = this) {
        const isUnderCapacity = minHeap.size() < this.k;
        if (isUnderCapacity) {
            minHeap.enqueue(val);
            return this.top();
        }

        const isLarger = this.top() < val;
        if (isLarger) {
            minHeap.dequeue()
            minHeap.enqueue(val);
        }
        return this.top();
    }

    top({ minHeap } = this) {
        return minHeap.front();
    }
}

const data = [4, 5, 8, 2]
const largest = new KthLargest(3, [6, 7]);
console.log(largest.add(4));
console.log(largest.add(5));
console.log(largest.add(8));
console.log(largest.add(2));
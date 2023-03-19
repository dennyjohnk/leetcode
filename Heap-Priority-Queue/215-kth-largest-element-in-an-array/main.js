const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

var findKthLargest = function (nums, k) {
    const minHeap = new MinPriorityQueue();

    for (const num of nums) {
        minHeap.enqueue(num);

        if (minHeap.size() > k)
            minHeap.dequeue()
    }

    return minHeap.front();
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];

const result = findKthLargest(nums, 4);
console.log(result);
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const threeSum = a + nums[l] + nums[r];

            if (threeSum < 0) l++;
            else if (threeSum > 0) r--;
            else {
                result.push([a, nums[l], nums[r]]);
                l++; r--;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }

    return result;
};

const nums = [-2, 0, 0, 2, 2];
const result = threeSum(nums);
console.log(...result);
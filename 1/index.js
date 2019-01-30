/* eslint-disable */
/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * 
 */

/* eslint-enable */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = (nums, target) => {
    const sorted = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i += 1) {
        let run = true;
        let sum;
        let j = i + 1;
        while (run && j < nums.length) {
            sum = sorted[i] + sorted[j];
            if (sum >= target) {
                run = false;
                break;
            }
            j += 1;
        }
        if (sum === target) {
            const firstIndex = nums.indexOf(sorted[i]);
            const secondIndex = nums.lastIndexOf(sorted[j]);
            return [firstIndex, secondIndex];
        }
    }
};

/**
 * TODO: Do it one more time with better solution
 * Runtime: 96 ms, faster than 56.94% of JavaScript online submissions for Two Sum.
 */

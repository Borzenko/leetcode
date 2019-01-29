/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sorted = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        let run = true;
        let sum;
        let j = i + 1;
        while (run && j < nums.length) {
            sum = sorted[i] + sorted[j];
            if (sum >= target) {
                run = false;
                break;
            }
            j++;
        }
        if (sum === target) {
            const firstIndex = nums.indexOf(sorted[i]);
            let secondIndex = nums.lastIndexOf(sorted[j]);
            return [firstIndex, secondIndex];
        }
    }
};


console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([2, 3, 8, 7, 11, 15], 9));

/**
 * TODO: Do it one more time with better solution
 * Runtime: 96 ms, faster than 56.94% of JavaScript online submissions for Two Sum.
 */
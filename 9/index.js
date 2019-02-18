/* eslint-disable */
/**
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
 */
/* eslint-enable */
module.exports = (x) => {
    if (x < 0) return false;
    if (x < 10) return true;
    let length = 1;
    let cycle = x;
    let res = 0;
    let isContinue = true;
    while (isContinue) {
        const number = parseInt(x / (Math.pow(10, length)), 10);
        if (number < 10) isContinue = false;
        length += 1;
    }
    for (let i = 1; i <= length; i++) {
        const number = cycle % (Math.pow(10, 1));
        cycle = parseInt(cycle / 10, 10);
        res = res + number * Math.pow(10, length - i);
    }
    return res === x;
};

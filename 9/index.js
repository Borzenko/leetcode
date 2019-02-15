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
    let string = x.toString();
    if (x < 0) return false;
    if (string.length === 1) return true;
    string = string.length % 2 === 1
        ? string.slice((string.length + 1) / 2) + string.slice(0, (string.length - 1) / 2)
        : string;
    for (let i = 0; i < string.length / 2; i += 1) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
};

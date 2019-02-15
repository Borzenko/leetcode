/* eslint-disable */
/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */
/* eslint-enable */

module.exports = (s) => {
    if (!s.length) return s;
    const single = {};
    const double = {};
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === s[i + 1]) {
            double[i] = 'double';
        }
        if (s[i - 1] === s[i + 1] && s[i - 1]) {
            single[i] = 'single';
        }
    }
    if (!Object.keys(single).length && !Object.keys(double).length) return s[0];
    const results = [];
    Object.keys(double).forEach((strKey) => {
        const key = parseInt(strKey, 10);
        let res = '';
        for (let i = 0; i < s.length - key; i += 1) {
            if (i === 0) {
                res = s[key] + s[key + 1];
            }
            if (s[key - i] === s[key + 1 + i] && i !== 0 && s[key - 1] && s[key + i + 1]) {
                res = s[key - i] + res + s[key + 1 + i];
            }
        }
        results.push(res);
    });
    Object.keys(single).forEach((strKey) => {
        const key = parseInt(strKey, 10);
        let res = '';
        for (let i = 0; i < s.length - key; i += 1) {
            if (i === 0) {
                res = s[key - 1] + s[key] + s[key + 1];
            }
            if (s[key - i - 1] === s[key + 1 + i] && i !== 0 && s[key - i - 1] && s[key + i + 1]) {
                res = s[key - i] + res + s[key + 1 + i];
            }
        }
        results.push(res);
    });
    return results.sort((a, b) => { return b.length - a.length; })[0];
};

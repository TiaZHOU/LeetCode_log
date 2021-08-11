/**
 * link:https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const mapping = new Map();
    const stack = [];
    mapping.set('(', ')')
    mapping.set('[', ']')
    mapping.set('{', '}')
    for (let i = 0; i < s.length; i++) {
        if (mapping.has(s[i])) {
            stack.push(mapping.get(s[i]))
        } else if (stack.pop() !== s[i]) {
            return false;
        }
    }

    if (stack.length != 0) {
        return false;
    }

    return true;
};
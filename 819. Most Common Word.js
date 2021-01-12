/**
 * link :https://leetcode-cn.com/problems/most-common-word/
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.trim().toLocaleLowerCase()
    paragraph = paragraph.replace(/[.|,|!|?|;|']/g, " ");
    paragraph = paragraph.split(/\s+/g);
    let wordList = new Map();
    paragraph.map((item) => {
        if (banned.indexOf(item) == -1) {
            let count = wordList.get(item);
            wordList.set(item, count == undefined ? 1 : ++count);
        }
    })
    let values = [];
    let keys = [];
    wordList.forEach(function (value, key) {
        values.push(value);
        keys.push(key);
    })
    let max = Math.max(...values);
    let index = values.indexOf(max);
    return keys[index];
};


var mostCommonWord2 = function (paragraph, banned) {
    return [...paragraph
        .toLowerCase()
        .match(/[a-z]+/g)
        .reduce((map, item) => {
            map.set(item, (map.get(item) || 0) + 1);
            return map
        }, new Map())]// 1.将字符串分解构造成单词和数量组成的二维数组
        .filter(wordCount => !banned.includes(wordCount[0])) // 2.根据banned过滤
        .sort((x, y) => x[1] - y[1])  // 3.根据count数排序
        .pop()[0]
};
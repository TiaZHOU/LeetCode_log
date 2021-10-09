//Given an array of meeting time intervals where intervals[i] = [starti, endi], 
//determine if a person could attend all meetings. 
//
// 
// Example 1: 
// Input: intervals = [[0,30],[5,10],[15,20]]
//Output: false
// Example 2: 
// Input: intervals = [[7,10],[2,4]]
//Output: true
// 
// 
// Constraints: 
//
// 
// 0 <= intervals.length <= 10⁴ 
// intervals[i].length == 2 
// 0 <= starti < endi <= 10⁶ 
// 
// Related Topics 数组 排序 👍 83 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length === 1) return  true;
    intervals = intervals.sort(function(a,b) {
        return a[0] - b[0];
    });
    //console.log(intervals);
    for(let i=1; i<intervals.length; i++)
    {
    if(intervals[i][0] < intervals[i-1][1])
        {
            return false;
        }
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(canAttendMeetings([[16,22],[28,45],[3,9],[46,50],[13,14]]));
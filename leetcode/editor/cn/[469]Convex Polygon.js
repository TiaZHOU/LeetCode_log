//You are given an array of points on the X-Y plane points where points[i] = [
//xi, yi]. The points form a polygon when joined sequentially. 
//
// Return true if this polygon is convex and false otherwise. 
//
// You may assume the polygon formed by given points is always a simple polygon.
// In other words, we ensure that exactly two edges intersect at each vertex and 
//that edges otherwise don't intersect each other. 
//
// 
// Example 1: 
//
// 
//Input: points = [[0,0],[0,5],[5,5],[5,0]]
//Output: true
// 
//
// Example 2: 
//
// 
//Input: points = [[0,0],[0,10],[10,10],[10,0],[5,5]]
//Output: false
// 
//
// 
// Constraints: 
//
// 
// 3 <= points.length <= 10⁴ 
// points[i].length == 2 
// -10⁴ <= xi, yi <= 10⁴ 
// All the given points are unique. 
// 
// Related Topics 几何 数学 👍 26 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isConvex = function(points) {
    let cos = [];
    let ang =[];
    for(let i=1; i< points.length-1; i++)
    {
        cos[i] = getcos(points[i-1],points[i],points[i+1]);
    }
    cos[0] = getcos(points[points.length-1],points[0],points[1]);
    cos[points.length-1] = getcos(points[points.length-2],points[points.length-1],points[0]);
    let ans = 0;

    for(let j=0; j<cos.length; j++)
    {
        ang[j] = Math.acos(cos[j])*180/3.1415926;
        if(ang[j] === 0)
        {
            return false;
        }
        ans += ang[j];
    }
  return Math.floor(ans) === 180 * (points.length-2);
};
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @return {number}
 */
var getcos = function (p1,p2,p3) {
    let x1 = p1[0] - p2[0];
    let x2 = p3[0] - p2[0];
    let y1 = p1[1] - p2[1];
    let y2 = p3[1] - p2[1];
    return (x1*x2 + y1*y2)/( Math.sqrt(x1*x1+y1*y1) * Math.sqrt(x2*x2+y2*y2) );

}

//leetcode submit region end(Prohibit modification and deletion)
console.log(isConvex([[3,-5],[5,-4],[5,4],[4,5],[-4,5],[-5,4],[-5,-4],[-4,-5]]));
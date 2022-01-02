//You are given an array coordinates, coordinates[i] = [x, y], where [x, y] 
//represents the coordinate of a point. Check if these points make a straight line in 
//the XY plane. 
//
// 
//
// 
// Example 1: 
//
// 
//
// 
//Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
//Output: true
// 
//
// Example 2: 
//
// 
//
// 
//Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
//Output: false
// 
//
// 
// Constraints: 
//
// 
// 2 <= coordinates.length <= 1000 
// coordinates[i].length == 2 
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4 
// coordinates contains no duplicate point. 
// Related Topics 几何 数组 数学 👍 95 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates[1][1] === coordinates[0][1] )
    {
        for(let i=2; i<coordinates.length; i++)
        {
            if(coordinates[i][1] !== coordinates[0][1])
            {
                return false;
            }
        }
        return true;
    }
    if(coordinates[1][0] === coordinates[0][0])
    {
        for(let i=2; i<coordinates.length; i++)
        {
            if(coordinates[i][0] !== coordinates[0][0])
            {
                return false;
            }
        }
        return true;
    }

    let k = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);
    //console.log("k is " + k);
    for(let i=2; i<coordinates.length; i++)
    {
        if(k !== (coordinates[i][1] - coordinates[0][1])/(coordinates[i][0] - coordinates[0][0]))
        {
            return false;
        }
        //console.log("i is "+ i + " and k is  "+k);
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(checkStraightLine([[0,1],[2,3],[3,4]]));
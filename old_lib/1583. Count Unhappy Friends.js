/**
 * link:https://leetcode-cn.com/problems/count-unhappy-friends/
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    //建立二维数组t
    let t = Array.from(Array(n),item=>new Array(n).fill(0))
    for(let i=0;i<n;i++){
        preferences[i].forEach((item,index)=>{
            t[i][item] = index
        })
    }

    let res = new Set()
    //遍历pairs
    for(let i=0;i<=(n/2)-2;i++){
        for(let j=i+1;j<=(n/2)-1;j++){
            const [x,y] = pairs[i]
            const [u,v] = pairs[j]
            if(t[x][u]<t[x][y]&&t[u][x]<t[u][v]) res.add(x).add(u)
            if(t[x][v]<t[x][y]&&t[v][x]<t[v][u]) res.add(x).add(v)
            if(t[y][u]<t[y][x]&&t[u][y]<t[u][v]) res.add(y).add(u)
            if(t[y][v]<t[y][x]&&t[v][y]<t[v][u]) res.add(y).add(v)
        }
    }

    return res.size
};
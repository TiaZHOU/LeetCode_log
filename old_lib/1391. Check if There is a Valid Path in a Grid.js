/**
 * link: https://leetcode-cn.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    // mlastx and mlasty : position of last move
    //mposx and mposy: position of current move
    //test : second change for street 4 start
    let mlastx=0,mlasty=0,mposx,mposy,test;
    //temp used to storage next move position
    let temp = [0,0];
    //record path history by 'x-y' format
    let path = new Set();
    //signle one
    if(grid.length == 1 && grid[0].length ==1) return true;
    //single line
    if(grid.length == 1)
    {
        if(grid[0][0] == 2 || grid[0][0] == 3 || grid[0][0] == 5 || grid[0][grid[0].length-1] == 2 || grid[0][grid[0].length-1] == 4 || grid[0][grid[0].length-1] == 6)
        {
            return false;
        }
    }
    // street 5 cant be a head
    if(grid[0][0] == 5) return false;
    // street 1 and 6 can only move to right
    if(grid[0][0] == 1 || grid[0][0] == 6)
    {
        mposx = 1;
        mposy = 0;
    }
    //street 2 and 3 can only move to down
    if(grid[0][0] == 2 || grid[0][0]== 3)
    {
        mposx = 0;
        mposy = 1;
    }
    //street 4 has 2 kind of directions, test 0 means first chance
    if(grid[0][0] == 4)
    {
        test = 0;
        mposx = 0;
        mposy = 1;
    }
    //make first move to get the next position
    temp = nextmvoe(grid,mlastx,mlasty,mposx,mposy);
    //return false if next possible move is out of range
    if(temp[0]< 0 || temp[0] > grid[0].length-1||temp[1] <0 || temp[1]> grid.length-1)
    {
        return false;
    }
    // if move is acceptable, add the position into set
    else
    {
        path.add(mposx + '-'+ mposy);
    }
    // loop for moves
    while(temp[0] != -1 && temp[1] != -1)
    {
        //if hit the low right return true
        if(temp[0] == grid[0].length -1 && temp[1] == grid.length-1)
        {
            return true;
        }
        // parameters pass
        mlastx = mposx;
        mlasty = mposy;
        mposx = temp[0];
        mposy= temp[1];
        //detect if the move is done before
        if(path.has(mposx + '-'+ mposy))
        {
            return false;
        }
        //get the next move pos
        temp = nextmvoe(grid,mlastx,mlasty,mposx,mposy);
        if(temp[0]< 0 || temp[0] > grid[0].length-1||temp[1] <0 || temp[1]> grid.length-1)
        {
            //set second chance for street 4
            if(grid[0][0] == 4 && test == 0 )
            {
                mposx = 0;
                mposy = 0;
                temp[0] = 1;
                temp[1] = 0;
                test = 1;
            }
            else
            {
                return false;
            }
        }
        else
        {
            path.add(mposx + '-'+ mposy);
        }


    }

};
/**
 * @param {number[][]} grid
 * @param {number} lasty
 * @param {number} lastx
 * @param {number} posx
 * @param {number} posy
 * @return {number[][]}
 */
// funciton for next acceptable move, return next pos in [X,Y] format, X is horizontal and Y is vertical. 0,0 start from high left.
var nextmvoe = function(grid,lastx,lasty,posx,posy)
{
    let street = grid[posy][posx];
    if(street ==1)
    {
        if(posx ==lastx +1 && posy == lasty)return [posx+1,posy];
        if(posx == lastx - 1 && posy == lasty)return [posx-1,posy];
    }
    if(street ==2)
    {
        if(posx ==lastx && posy == lasty + 1)return [posx,posy+1];
        if(posx == lastx && posy == lasty - 1)return [posx,posy-1];
    }
    if(street ==3)
    {
        if(posx ==lastx + 1 && posy == lasty)return [posx,posy+1];
        if(posx == lastx && posy == lasty-1)return [posx-1,posy];
    }
    if(street ==4)
    {
        if(posx ==lastx && posy == lasty - 1)return [posx+1,posy];
        if(posx == lastx-1 && posy == lasty)return [posx,posy+1];
    }
    if(street ==5)
    {
        if(posx ==lastx+1 && posy == lasty)return [posx,posy-1];
        if(posx == lastx && posy == lasty + 1)return [posx-1,posy];
    }
    if(street ==6)
    {
        if(posx ==lastx && posy == lasty + 1)return [posx+1,posy];
        if(posx == lastx -1 && posy == lasty)return [posx,posy-1];
    }
    return [-1,-1];
};
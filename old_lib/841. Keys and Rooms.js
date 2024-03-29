/**
 * link: https://leetcode-cn.com/problems/keys-and-rooms/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set();
    const queue = [];
    queue.push(0);
    visited.add(0);
    while (queue.length) {
        const nextRooms = rooms[queue.shift()];
        for (let i = 0; i < nextRooms.length; i++) {
            const next = nextRooms[i];
            if (!visited.has(next)) {
                queue.push(next);
                visited.add(next);
            }
        }
    }
    if (visited.size == rooms.length) {
        return true;
    } else {
        return false;
    }
};
// 给你一个由 '1'（陆地）和 '0'（水）组成的二维网格，请你计算网格中岛屿的数量。岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

/**

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

*/


/**
考察点：
网格/矩阵的遍历

DFS/BFS算法的实现

图论中的连通分量概念

原地修改数组的技巧

方向数组的使用
*/

function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    // DFS辅助函数
    function dfs(r, c) {
        // 边界检查
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }
        
        // 标记为已访问
        grid[r][c] = '0';
        
        // 向四个方向DFS
        dfs(r - 1, c); // 上
        dfs(r + 1, c); // 下
        dfs(r, c - 1); // 左
        dfs(r, c + 1); // 右
    }
    
    // 遍历整个网格
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c); // 将相连的陆地都标记为已访问
            }
        }
    }
    
    return count;
}

// BFS解法
function numIslandsBFS(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 上下左右
    
    function bfs(r, c) {
        const queue = [[r, c]];
        grid[r][c] = '0'; // 标记为已访问
        
        while (queue.length > 0) {
            const [row, col] = queue.shift();
            
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                if (newRow >= 0 && newRow < rows && 
                    newCol >= 0 && newCol < cols && 
                    grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = '0'; // 标记为已访问
                }
            }
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                bfs(r, c);
            }
        }
    }
    
    return count;
}

// 测试用例
const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(numIslands(grid1)); // 1
console.log(numIslands(grid2)); // 3

// 重置网格测试BFS
const grid3 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];
console.log(numIslandsBFS(grid3)); // 3

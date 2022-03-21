/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function (grid) {
    var dfs = function (grid, r, c) {
        var nr = grid.length;
        var nc = grid[0].length;

        if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') {
            return;
        }

        grid[r][c] = '0';
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
    }


    if (grid == null || grid.length == 0) {
        return 0;
    }

    var nr = grid.length;
    var nc = grid[0].length;
    var num_islands = 0;
    for (var r = 0; r < nr; ++r) {
        for (var c = 0; c < nc; ++c) {
            if (grid[r][c] == '1') {
                ++num_islands;
                dfs(grid, r, c);
            }
        }
    }
    return num_islands;
};
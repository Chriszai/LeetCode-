class Solution {
    List<Integer>[] edges;
    boolean[] used;

    public int makeConnected(int n, int[][] connections) {
        if (connections.length < n - 1) {
            return -1;
        }

        edges = new List[n];
        for (int i = 0; i < n; ++i) {
            edges[i] = new ArrayList<Integer>();
        }
        for (int[] conn : connections) {
            edges[conn[0]].add(conn[1]);
            edges[conn[1]].add(conn[0]);
        }
        
        used = new boolean[n];
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            if (!used[i]) {
                dfs(i);
                ++ans;
            }
        }
        
        return ans - 1;
    }

    public void dfs(int u) {
        used[u] = true;
        for (int v : edges[u]) {
            if (!used[v]) {
                dfs(v);
            }
        }
    }
}
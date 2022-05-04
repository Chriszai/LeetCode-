
var convertBST = function (root) {
   var sum = 0;
   var dfs = function (root) {
       if (root != null) {
           dfs(root.right);
           sum += root.val;
           root.val = sum;
           dfs(root.left);
       }
       return root;
   }
   return dfs(root)
};
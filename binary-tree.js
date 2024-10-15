/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root)
      return 0;

    const queue = [[this.root, 1]];

    while (queue.length > 0) {
      const [node, depth] = queue.shift();

      if (!node.left &&
        !node.right)
        return depth;

      if (node.left)
        queue.push([node.left, depth + 1]);

      if (node.right)
        queue.push([node.right, depth + 1]);

    }

    return 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root)
      return 0;

    const stack = [[this.root, 1]];

    let maxDepth = 0;
    while (stack.length > 0) {
      const [node, depth] = stack.pop();
      maxDepth = Math.max(maxDepth, depth);

      if (node.left)
        stack.push([node.left, depth + 1]);

      if (node.right)
        stack.push([node.right, depth + 1]);
    }

    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root)
      return 0;

    let maxSum = -Infinity;

    function dfs(node) {
      if (!node)
        return 0;

      const leftSum = Math.max(dfs(node.left), 0);
      const rightSum = Math.max(dfs(node.right), 0);

      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

      return node.val + Math.max(leftSum, rightSum);
    }

    dfs(this.root);

    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root)
      return null;

    let result = Infinity;

    function dfs(node) {
      if (!node)
        return;
      
      if (node.val > lowerBound &&
        node.val < result)
        result = node.val;

      dfs(node.left);
      dfs(node.right);
    }

    dfs(this.root);

    return result === Infinity ?
      null : result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(data) {
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

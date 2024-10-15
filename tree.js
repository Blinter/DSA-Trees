/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = Array.isArray(children) ?
      children : [];
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sumValues = () => this.sumHelper(this.root);

  sumHelper(node) {
    if (!node ||
      !(node instanceof TreeNode))
      return 0;

    let sum = node.val;
    for (const child of node.children)
      sum += this.sumHelper(child);

    return sum;
  }

  countEvens = () =>
    this.countEvensHelper(this.root);

  countEvensHelper(node) {
    if (!node)
      return 0;

    let count = node.val % 2 === 0 ?
      1 : 0;

    for (const child of node.children)
      count += this.countEvensHelper(child);

    return count;
  }

  numGreater = (lowerBound) =>
    this.numGreaterHelper(this.root, lowerBound);

  numGreaterHelper(node, lowerBound) {
    if (!node)
      return 0;

    let count = node.val > lowerBound ?
      1 : 0;

    for (const child of node.children)
      count += this.numGreaterHelper(child, lowerBound);
    
    return count;
  }
}

module.exports = { Tree, TreeNode };

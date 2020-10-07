/*
*   Node Depths 
*
*   Write a function that calculates the sum of the depth of each node of a binary tree
*   Sample Input:        Sample Output: 16
*           1
*         /   \
*        2     3
*       / \   / \
*      4   5  6  7
*     / \
*    8   9
*
*/

function nodeDepths(root) {
	return calculateNodeDepth(root, 0);
}

function calculateNodeDepth(node, depth) {
	if (!node) return 0;
	
	return depth + calculateNodeDepth(node.left, depth + 1) + calculateNodeDepth(node.right, depth + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(nodeDepths(root));
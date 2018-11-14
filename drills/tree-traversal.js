const BinarySearchTree = require('./bst');

/**
 *     15
 *   10   50
 *
 * in-order
 * function takes tree as parameter
 *
 * array =[]
 *
 * read left first
 * if tree.left exists
 *   (function(tree.left))
 *
 * then read value
 *  add value to array
 *
 *
 * then read right
 * if tree.right exits
 *    function(tree.right)
 *
 */

function inOrder(tree, array = []) {
  if (tree.left) {
    inOrder(tree.left, array);
  }

  array.push(tree.key);

  if (tree.right) {
    inOrder(tree.right, array);
  }

  return array;
}

function main() {
  const data = [25, 15, 50];
  const bst = new BinarySearchTree();

  data.forEach(value => bst.insert(value));

  console.log(inOrder(bst));
  // console.log(bst);
}
main();

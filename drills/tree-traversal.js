const BinarySearchTree = require('./bst');

/**
 *      25
 *   15   50
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

function preOrder(tree, array = []) {
  array.push(tree.key);

  if (tree.left) {
    preOrder(tree.left, array);
  }

  if (tree.right) {
    preOrder(tree.right, array);
  }

  return array;
}

function postOrder(tree, array = []) {
  if (tree.left) {
    postOrder(tree.left, array);
  }

  if (tree.right) {
    postOrder(tree.right, array);
  }

  array.push(tree.key);

  return array;
}

function main() {
  const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  const bst = new BinarySearchTree();

  data.forEach(value => bst.insert(value));

  console.log('In Order', inOrder(bst));
  console.log('Pre Order', preOrder(bst));
  console.log('Post Order', postOrder(bst));
  // console.log(bst);
}
main();

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    let curr = this.root;

    if (!this.root) return (this.root = node);

    while (curr) {
      if (val > curr.val) {
        if (curr.right) curr = curr.right;
        else return (curr.right = node);
      } else {
        if (curr.left) curr = curr.left;
        else return (curr.left = node);
      }
    }
  }

  //DFS
  preorder(curr = this.root) {
    if (curr) {
      console.log(curr.val);
      this.preorder(curr.left);
      this.preorder(curr.right);
    }
  }

  //BFS
  breadthFirstSearch() {
    if (!this.root) return;
    const queue = [this.root];
    let curr;

    while (queue.length) {
      curr = queue.shift();
      console.log(curr.val);
      if (curr.right) queue.unshift(curr.right);
      if (curr.left) queue.unshift(curr.left);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(2);
// tree.preorder();
tree.breadthFirstSearch();
console.log(tree.root);

// check if two binary tree forms a mirror image.

function areMirror(r1, r2) {
  if (!r1 && !r2) return true;

  if (!r1 || !r2) return false;

  return (
    r1.val === r2.val &&
    areMirror(r1.left, r2.right) &&
    areMirror(r2.left, r1.right)
  );
}

const tree2 = new BinarySearchTree();
tree2.insert(1);
tree2.insert(2);
tree2.insert(3);
tree2.insert(4);
tree2.insert(5);
tree2.breadthFirstSearch();

const tree3 = new BinarySearchTree();
tree3.insert(1);
tree3.insert(3);
tree3.insert(2);
tree3.insert(5);
tree3.insert(4);
tree3.breadthFirstSearch();

console.log(areMirror(tree2.root, tree3.root));

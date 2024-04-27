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
        else return curr.right = node
      } else{
        if(curr.left) curr= curr.left
        else return curr.left = node
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
  breadthFirstSearch(){
    if(!this.root) return
    const queue=[this.root]
    let curr

    while(queue.length){
        curr= queue.shift()
        console.log(curr)
        

    }

  }


}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(2);
tree.preorder();
console.log(tree.root);

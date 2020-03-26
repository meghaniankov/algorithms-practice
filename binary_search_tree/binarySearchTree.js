// Node class
class Node { 
  constructor(data) { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
  } 
} 

class BinarySearchTree { 
  constructor() { 
    this.root = null; 
  }
  
  insert(data) { 
    var newNode = new Node(data); 

    if(this.root === null) {
      this.root = newNode; 
    } else {
      this.insertNode(this.root, newNode);
    }
  }
 
  insertNode(node, newNode) { 
    // if the data is less than the node 
    // data move left of the tree  
    if(newNode.data < node.data) { 
      if(node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null recurr until  
        // null is found 
        this.insertNode(node.left, newNode);  
      }
    } else { 
        if(node.right === null){
          node.right = newNode; 
        } else {
          this.insertNode(node.right,newNode);
        }
    } 
  } 

  remove(data) { 
    this.root = this.removeNode(this.root, data); 
  } 

  removeNode(node, key) { 
    if(node === null) {
      return null; 
    } else if(key < node.data) { 
      // if data to be delete is less than  
      // roots data then move to left subtree 
        node.left = this.removeNode(node.left, key); 
        return node; 
    } else if(key > node.data) { 
        node.right = this.removeNode(node.right, key); 
        return node; 
    } else { 
      // deleting node with no children 
      if(node.left === null && node.right === null) { 
        node = null; 
        return node; 
      } 

      // deleting node with one children 
      if(node.left === null) { 
        node = node.right; 
        return node; 
      } else if(node.right === null) { 
        node = node.left; 
        return node; 
      } 
  
      // Deleting node with two children 
      // minumum node of the rigt subtree 
      // is stored in aux 
      var aux = this.findMinNode(node.right); 
      node.data = aux.data; 

      node.right = this.removeNode(node.right, aux.data); 
      return node; 
    } 
    
  } 

  // Traversal
  inorder(node) { 
    if(node !== null) { 
      this.inorder(node.left); 
      console.log(node.data); 
      this.inorder(node.right); 
    } 
  } 

  preorder(node) { 
    if(node != null) { 
      console.log(node.data); 
      this.preorder(node.left); 
      this.preorder(node.right); 
    } 
  } 

  postorder(node) { 
    if(node != null) { 
      this.postorder(node.left); 
      this.postorder(node.right); 
      console.log(node.data); 
    } 
  } 

  //  finds the minimum node in tree 
  findMinNode(node) { 
    // if left of a node is null 
    // then it must be minimum node 
    if(node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left); 
    }
  } 

  // returns root of the tree 
  getRootNode() { 
    return this.root; 
  } 
  
  // search for a node with given data 
  search(node, data) { 
    if(node === null) {
      return null; 
    } else if(data < node.data) {
      // if data is less than node's data 
      // move left 
      return this.search(node.left, data); 
    } else if(data > node.data) {
      return this.search(node.right, data); 
    } else {
      return node; 
    }
  } 
} 
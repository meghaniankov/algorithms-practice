# Binary Search Tree

Binary Search Tree is a node-based binary tree data structure which has the following properties:

1. The left subtree of a node contains only nodes with keys lesser than the node’s key.
2. The right subtree of a node contains only nodes with keys greater than the node’s key.
3. The left and right subtree each must also be a binary search tree.

![BST Image](../images/BST.png)


### Traversal

#### Inorder 
Left, Root, Right
Inorder traversal gives nodes in non-decreasing order.
1. Traverse the left subtree i.e perform inorder on left subtree
2. Visit the root
2. Traverse the right subtree i.e perform inorder on right subtree

#### Preorder 
Root, Left, Right 
Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on of an expression tree. 
1. Visit the root.
2. Traverse the left subtree, i.e., call Preorder(left-subtree)
3. Traverse the right subtree, i.e., call Preorder(right-subtree) 

#### Postorder 
Left, Right, Root 
Postorder traversal is used to delete the tree.
1. Traverse the left subtree, i.e., call Postorder(left-subtree)
2. Traverse the right subtree, i.e., call Postorder(right-subtree)
3. Visit the root.
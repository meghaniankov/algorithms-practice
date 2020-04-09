# Linked List

Stores multiple values in a linear fashion. Each value in a linked list contains its own node, an object that contains data along with a link to the next node.

![single linked list](../images/singly-linked-list.svg)

Each node contains a pointer to the next node. In doubly linked lists, nodes contain two pointers (previous and next)

### Linked List vs Array

Array = items are indexed
Linked List = not indexed

Advantage:
- Insertions and deletions can be quick
  - Prepend O(1)
  - Append O(n) (have to walk all the way to the end of the list)

Disadvatage:
- Slow to get to the nth element
  - O(n) (aka linear)

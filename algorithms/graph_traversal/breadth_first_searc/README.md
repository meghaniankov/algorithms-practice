# Breadth First Search

A search algorithm for graphs (aka graph traversal algo). Uses Queue data structure for finding the shortest path.

It helps answer two types of questions:
1. Is there a path from node A to node B?
2. What is the shortest path from node A to node B?

## Steps
1. Create a queue containing all first-level nieghbor nodes
2. Dequeue (pop) a node off the queue
3. Check if that node is your destination
4. If 'yes', all done. If 'no', add all of their neighbors to the queue.
5. Loop
6. If the queue is empty, there is no path to your destination.
# Big O Notation

[Cheatsheet](https://www.bigocheatsheet.com/)
[Big-O Notation Explained with Examples](https://developerinsider.co/big-o-notation-explained-with-examples/amp/)

Big O notation defines how long it takes an algorithm to run, also called time complexity. It represents how long the runtime for a given algorithm can be as the data grows larger.

Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

Big O notation lets you compare the number of operations. It tells you how fast the algorithm grows.

O(n) => n = number of oberations

### O(1)
Constant Time
O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.

### O(n)
Linear Time
O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

### O(n^2)
Quadratic Time
Here we're nesting two loops. If our array has n items, our outer loop runs n times and our inner loop runs n times for each iteration of the outer loop.

![BigONotation Image](../../images/BigOComplexity.png)


## Common Big O runtimes

Fastest to slowest:
* O(log n), also known as log time. Example: Binary search
* O(n), also known as linear time. Example: Simple search
* O(n * log n). Example: A fast sorting algorithm (quicksort)
* O(n2). Example: A slow sorting algorithm (selection sort)
* O(n!). Example: A really slow algorithm (traveling salesperson)
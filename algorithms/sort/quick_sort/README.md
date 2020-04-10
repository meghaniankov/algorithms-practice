# Quick Sort

Uses dived and conquer (D&C).

1. Figure out the base case. This should be the simplest possible case.

> Base Case = array with 0 or 1 elements (doesn't need to be sorted)

2. Divide or decrease your problem until it becomes the base case.

> 1. Pick a pivot element from the array. (i.e. first item)
> 2. Find elements smaller and larger than the pivot (partitioning)... now you have:
    a. sub-array of all numbers less than pivot
    b. pivot
    c. sub-array of all numbers greater than the pivot
> 3. Call quick_sort recursively on the two sub-arrays


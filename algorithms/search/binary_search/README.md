# Binary Search

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

## Runtime

Binary search runs in logarithmic time (log time)

Simple Search: If a list is 100 items long, it takes up to 100 guesses. 4 billion items long? 4 billion guesses

Binary Search: 100 items long = 7 guesses, 4 billion items = 32 guesses (log^2 4,000,000,000 = 31.89)

## Big O Notation

O(log n)
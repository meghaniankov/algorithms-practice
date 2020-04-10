# Recursion

## Base Case vs Recursive Case

When you write a recursive function, you have to tell it when to stop recursing. hat’s why every recursive function has two parts: the base case, and the recursive case. he recursive case is when the function calls itself. he base case is when the function doesn’t call itself again ... so it doesn’t go into an ininite loop.

Example:
```
def countdown(i)
  puts i
  if i <= 0 #BASE CASE
    return
  else #RECURSIVE CASE
    countdown(i - 1)
  end
end
```

## The Stack

Add new items to the top of a list & remove items from the top of the list

The stack has two operations: push & pop

The stack can get very large, which takes up a lot of memory.

Using the stack is convenient, but there’s a cost: saving all that info can take up a lot of memory. Each of those function calls takes up some memory, and when your stack is too tall, that means your computer is saving information for many function calls. At that point, you have two options:
• You can rewrite your code to use a loop instead.
• You can use something called tail recursion. hat’s an advanced recursion topic that is out of the scope of this book. It’s also only supported by some languages, not all.
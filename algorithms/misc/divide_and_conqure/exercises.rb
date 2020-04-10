# EXERCISES

# 4.1
# Write out the code for the earlier sum function.

def sum(array) 
  if array == []
    0
  else
    array[0] + sum(array[1..-1])
  end
end

p sum([1,2,3]) # => 6

# 4.2 
# Write a recursive function to count the number of items in a list.

def count(array)
  if array == []
    0
  else
    1 + count(array[1..-1])
  end
end

p count([1,2,3]) # => 3

# 4.3 
# Find the maximum number in a list.

def max(array)
  if array.length == 2
    array[0] > array[1] ? array[0] : array[1]
  else
    sub_max = max(array[1..-1])
    array[0] > sub_max ? array[0] : sub_max
  end
end

p max([1,2,3]) # => 3

# 4.4 
# Remember binary search from chapter 1? It’s a divide-and-conquer algorithm, too. 
# Can you come up with the base case and recursive case for binary search?

# Ans: base case = array w/ 1 item; recursive case = split array in half, run binary search again on remaining half
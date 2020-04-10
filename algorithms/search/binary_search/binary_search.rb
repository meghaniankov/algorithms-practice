# returns position in array for item
def binary_search(array, item)
  low = 0
  high = array.length - 1
  p array
  p item

  while low <= high
    mid = (low + high) / 2 # check for middle element
    guess = array[mid]
    if guess == item
      return mid
    elsif guess > item
      high = mid - 1 # update high
    else
      low = mid + 1 # update low
    end
  end
end

list = [1,3,5,7,9]

p binary_search(list, 3) # => 1
p binary_search(list, -1) # => nil
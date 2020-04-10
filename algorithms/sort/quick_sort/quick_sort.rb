def quick_sort(array)
  return array if array.length < 2 # base case -> array w/ 1 or 0 items
  
  pivot = array.pop
  left = []
  right = []

  array.each do |item|
    item < pivot ? left << item : right << item
  end

  #recursive case
  quick_sort(left) + [pivot] + quick_sort(right)

end

p quick_sort([10,5,2,3])
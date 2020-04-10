function findSmallest(arr) {
  var smallest = arr[0]
  var smallest_index = 0

  for (var i=1; i<arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i]
      smallest_index = i
    }
  }

  return smallest_index
}

function selectionSort(arr) {
  var newArr = []
  for(var i=0; i<arr.length; i++) {
    var smallest = findSmallest(arr)
    newArr.push(arr.pop(smallest))
  }
  return newArr
} 

console.log(selectionSort([5, 3, 6, 2, 10]))
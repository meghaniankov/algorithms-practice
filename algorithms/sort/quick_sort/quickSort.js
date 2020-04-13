function quickSort(array) {

  if (array.length < 2) {
    return array
  }

  var pivot = array.pop
  var left = []
  var right = []

  for(var i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right))

}

quickSort([10,5,2,3])
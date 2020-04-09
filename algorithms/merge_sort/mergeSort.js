function sort(items) {
  var length = items.length
  var halfOfLength = Math.floor(length / 2)

  if (length <= 1) {
    return items
  }

  leftArray = items.slice(0, halfOfLength)
  rightArray = items.slice(halfOfLength)

}

function merge (leftArray, rightArray) {
  var resultArray = []
  var leftIndex = 0 
  var rightIndex = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    console.log(leftIndex)
  }
}

var left = [0,8]
var right = [10,7]
merge(left, right)
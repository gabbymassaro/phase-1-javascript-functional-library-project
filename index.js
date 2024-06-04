/*
myReduce(collection, callback, acc)

Parameter(s):

    a collection (either an object or an array)
    a callback function
    a starting value for the accumulator (optional)

Return value:

    A single value

Behavior:

Reduce iterates through a collection of values and boils it down into a single value. acc (short for accumulator) starts at the value that's passed in as an argument, and with each successive step is updated to the return value of callback. If a start value is not passed to myReduce, the first value in the collection should be used as the start value.

The callback is passed three arguments: the current value of acc, the current element/value in our iteration, and a reference to the entire collection.

Hint: For the case when a start value for the accumulator is not passed in as an argument, think about how you'll need to adjust your function to account for the fact that the first element of the collection has already been accounted for.
*/

function myEach (collection, callback) {

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i])
    }
  } else {
    let newArr = Object.values(collection)
    for (let i = 0; i < newArr.length; i++) {
      callback(newArr[i])
    }
  }
  return collection
}


function myMap (collection, callback) {
  if (Array.isArray(collection)) {
    let modArray = []
    for (let i = 0; i < collection.length; i++) {
      modArray.push(callback(collection[i]))
    }
    return modArray
  } else {
    let newArr = Object.values(collection)
    let modArray = []
    for (let i = 0; i < newArr.length; i++) {
      modArray.push(callback(newArr[i]))
    }
    return modArray
  }
}

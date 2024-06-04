/*
myEach(collection, callback)

Parameter(s):
  a collection (either an object or an array)
  a callback function

Return value:
  The original collection

Behavior:
  Iterates over the collection of elements, passing each element in turn to
  the callback function. Returns the original, unmodified, collection.

Example function calls:
  myEach([1, 2, 3], alert);
  => alerts each number in turn and returns the original collection

  myEach({one: 1, two: 2, three: 3}, alert);
  => alerts each number value in turn and returns the original collection
*/


// function myEach (collection, callback) {

//   if (typeof collection === 'object') {
//     for (let key in collection) {
//       if(collection.hasOwnProperty(key)) {
//         value = collection[key]
//         callback(value)
//       }
//     }
//   } else if (Array.isArray(collection)) {
//     for (let i = 0; i < collection.length; i++) {
//       callback(collection[i])
//     }
//   }
// }



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

const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
const unmodifiedTestArr = [1, 2, 3, 4]
myEach(unmodifiedTestObj, callback)
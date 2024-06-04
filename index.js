/*

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
  } else if (!Array.isArray(collection)) {
    let newArr = Object.values(collection)
    let modArray = []
    for (let i = 0; i < newArr.length; i++) {
      modArray.push(callback(newArr[i]))
    }
    return modArray
  }
}

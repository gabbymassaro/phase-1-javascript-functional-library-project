/*
myFind(collection, predicate)

Parameter(s):
  a collection (either an object or an array)
  a predicate (a callback function that returns true or false)

Return value:
  A single value

Behavior:
  Looks through each value in the collection, returning the first one that passes
  a truth test (predicate) or undefined if no value passes the test. The function
  should return as soon as it finds an acceptable element, without traversing the
  rest of the collection.
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

function myReduce (collection, callback, acc) {
  if (Array.isArray(collection)) {
    if (acc === undefined) {
      acc = collection[0]
      for (let i = 1; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    } else {
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    }
  } else {
    let newArr = Object.values(collection)
    if (acc === undefined) {
      acc = newArr[0]
    }
    for (let i = 1; i < newArr.length; i++) {
      acc = callback(acc, newArr[i], newArr)
    }
    return acc
  }
}

function myFind(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i]) === true) {
        return collection[i]
        break
      }
    }
  }
}
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
      }
    }
  }
}

function myFilter(collection, callback) {
  if (Array.isArray(collection)) {
    let newArr = []
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i]) === true) {
        newArr.push((collection[i]))
      }
    }
    return newArr
  } else {
    let emptyArr = []
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i]) === false) {
        emptyArr.push((collection[i]))
      }
    }
    return emptyArr
  }
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else {
    let newArr = Object.values(collection)
    return newArr.length
  }
}

function myFirst (array, n) {
  if (array, n) {
    return array.slice(0, n)
  } else if (array) {
    return array[0]
  }
}

function myLast (array, n) {
  if (array, n) {
    return array.slice(array.length - n)
  } else if (array) {
    return array[array.length - 1]
  }
}

function myKeys (object) {
  let newArr = []
  for (const element in object) {
    newArr.push(element)
  }
  return newArr
}

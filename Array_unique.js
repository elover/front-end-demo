//传统方式
var indexOf = [].indexOf ?
    function(arr, item) {
      return arr.indexOf(item)
    } :
    function indexOf(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i
        }
      }
      return -1
    }

function unique(arr) {
  var ret = []

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (indexOf(ret, item) === -1) {
      ret.push(item)
    }
  }

  return ret
}

//创建对象的方式
function unique(arr) {
  var ret = []
  var hash = {}

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    var key = typeof(item) + item
    if (hash[key] !== 1) {
      ret.push(item)
      hash[key] = 1
    }
  }

  return ret
}

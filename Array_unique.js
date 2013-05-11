//数组去重
//第一种方式（这种方式优势在于根据是否支持indexOf方法，来区别对待，惰性载入）
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

//创建对象的方式（利用同名属性覆盖）
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

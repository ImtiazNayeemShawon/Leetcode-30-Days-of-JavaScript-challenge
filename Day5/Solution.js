
var map = function (arr, fn) {
    const returndeArray = []
    for (let i = 0; i < arr.length; i++) {
        returndeArray[i] = fn(arr[i], i)
    }
    return returndeArray
};
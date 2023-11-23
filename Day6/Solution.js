
var filter = function(arr, fn) {
    let filteredArr = []
    for (let i = 0; i<arr.length; i++){
        var element = arr[i]
        const result = fn(element,i)
        if(result){
            filteredArr.push(element)
        }
    }
return filteredArr;
};
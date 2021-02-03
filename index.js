const arr = [1, 0, 10, '0', '1', '', NaN, false, null, undefined, 'false', 'true'];

//1 option:
function truthy(arr) {
    var falsyValues;
    var truthyArr = [];

    for (let i = 0; i < arr.length; i++) {
        falsyValues =  Boolean(arr[i]);
        if (falsyValues === true) {
          truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}

console.log(truthy(arr));


//2 option:
console.log(arr.filter(Boolean));
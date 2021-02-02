const arr = [1, 0, 10, '0', '1', '', NaN, false, null, undefined, 'false', 'true'];

//1st option
// console.log(arr.filter(Boolean));

//2nd option
/*function bouncer(arr) {
  return arr.filter(function(v) { return !!v; });
}

console.log(bouncer(arr));*/

//3rd option 

/*function bouncer(arr) {

    var falsy;
    var trueArr = [];

    for (i = 0; i < arr.length; i++) {

        falsy =  Boolean(arr[i]);

        if (falsy === true) {

        trueArr.push(arr[i]);

        }

    }

    return trueArr;
} */


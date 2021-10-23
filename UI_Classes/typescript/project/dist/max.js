var arr = [4, 2, 6, 8, 9, 10];
function max(arr) {
    var temp = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return arr;
}
var maxNumber = max(arr);
console.log("Max Number:", maxNumber[maxNumber.length - 1]);

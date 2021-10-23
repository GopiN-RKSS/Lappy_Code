let arr: number[] = [4, 2, 6, 8, 9, 10];

function max(arr: number[]) {
    let temp = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    
    }
    return arr;
}
let maxNumber = max(arr);
console.log("Max Number:",maxNumber[maxNumber.length-1]);
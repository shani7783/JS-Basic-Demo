const arr = [[1, 2, 3], [10, 20, 30], [100, 200, 300]];
const sumArr = [];

for (let i = 0; i < arr.length; i++) {
    const sum = sumNumArr(arr[i]);
    sumArr.push(sum);
}
console.log(sumArr);

function sumNumArr(numArr) {
    var sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum;
}
let count = 0;
const arr = [1, 24, 11, -2, 3, -2, 66, 23, 54, 1, 6, 12, 5, -8, 2, 24, 2, 43, 1, 23, 4, 23, 6, 23, 11, -2, 2, -6];

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    };

    const middleEl = arr[Math.floor(arr.length / 2)];
    const leftArr = [];
    const rigthArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (middleEl === arr[i]) {
            continue;
        }

        if (middleEl > arr[i]) {
            leftArr.push(arr[i])
        }

        if (middleEl < arr[i]) {
            rigthArr.push(arr[i])
        }

        count++

    }

    return [...quickSort(leftArr), middleEl, ...quickSort(rigthArr)]

}

console.log(quickSort(arr));
console.log('count: ', count);

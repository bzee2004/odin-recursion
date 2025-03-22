// Fibonacci Sequence, iteratively, and recursively
function fibsIter(n) {
    const fibsArr = [0, 1];
    let len = fibsArr.length;
    while (len < n) {
        len = fibsArr.length;
        fibsArr.push(fibsArr[len-2] + fibsArr[len-1]);
    }
    return fibsArr;
}

function fibsRecur(n) {
    if (n <= 1) { return [0, 1]; }

    const fibsArr = fibsRecur(n-1);
    fibsArr.push(fibsArr[fibsArr.length-1] + fibsArr[fibsArr.length-2]);
    return fibsArr;
}

// console.log(fibsIter(3));   // [0, 1, 1, 2]
// console.log(fibsIter(8));   // [0, 1, 1, 2, 3, 5, 8, 13, 21]

// console.log(fibsRecur(3));  // [0, 1, 1, 2]
// console.log(fibsRecur(8));  // [0, 1, 1, 2, 3, 5, 8, 13, 21]



// Merge sort
function merge(arr) {

    if (arr.length === 1) {
        return arr;
    }
    else if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
    }

    const mid = arr.length/2;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftMerged = merge(left);
    const rightMerged = merge(right);

    if (leftMerged === undefined || rightMerged === undefined) { return; }

    const mergedArr = [];
    let i = 0, j = 0;
    while (i < leftMerged.length || j < rightMerged.length) {

        if (i > leftMerged.length-1) {
            mergedArr.push(rightMerged[j]);
            j++;
        }
        else if (j > rightMerged.length-1) {
            mergedArr.push(leftMerged[i]);
            i++;
        }
        else {
            if (leftMerged[i] > rightMerged[j]) {
                mergedArr.push(rightMerged[j]);
                j++;
            }
            else {
                mergedArr.push(leftMerged[i]);
                i++;
            }
        }
    }
    return mergedArr;
}

// console.log(merge([105, 79, 100, 110]));            // [79, 100, 105, 110]
// console.log(merge([5, 2, 1, 3, 6, 4]));          // [1, 2, 3, 4, 5, 6]
// console.log(merge([3, 2, 1, 13, 8, 5, 0, 1]));      // [0, 1, 1, 2, 3, 5, 8, 13]
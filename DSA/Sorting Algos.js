function quickSort(a) {
  if (a.length < 2) return a;

  const pivot = a[a.length - 1],
    left = [],
    right = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) left.push(a[i]);
    else right.push(a[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(a) {
  if (a.length < 2) return a;

  const m = Math.floor(a.length / 2);
  const leftArr = a.slice(0, m);
  const rightArr = a.slice(m);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    let NTI = a[i],
      j = i - 1;
    while (j >= 0 && a[j] > NTI) {
      a[i] = a[j];
      a[j] = NTI;
      j--
    }
  }
  return a
}

const a = [10, -8, -2, 6, 12, 20];
console.log(quickSort(a));
console.log(mergeSort(a));
console.log(insertionSort(a));

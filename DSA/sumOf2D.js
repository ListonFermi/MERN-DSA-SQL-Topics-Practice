let a = [
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
];

//count all zeros

function countZero(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 0) count++;
    }
  }
  return count;
}

console.log(countZero(a));
// console.log(dfs(a));

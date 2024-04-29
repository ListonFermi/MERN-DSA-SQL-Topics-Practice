function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function fibanocci(num) {
  //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

  if (num === 1) return 0;
  if (num === 2) return 1;

  return fibanocci(num - 1) + fibanocci(num - 2);
}

function reverseString(str, revStr = "", i = str.length - 1) {
  if (i === 0) return revStr+str[0];
  return reverseString(str, revStr+str[i], --i);
}

console.log(factorial(5));
console.log(fibanocci(8));
console.log(reverseString('cricket'))
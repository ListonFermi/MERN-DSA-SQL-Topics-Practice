function multiply(a) {
    return function (b){
        return a*b
    }
}

console.log(multiply(2)(5))

// const multiplyByTwo = multiply(2)

// console.log(multiplyByTwo(5))
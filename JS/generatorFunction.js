/*
function* count(){
    yield 1
    yield 2
    yield 3
}

console.log(count().next())
*/


//generator functoion to generate even numbers endlessly

function* evenNumbers(){
    let i=0
    while(true){
        i+=2
        yield i
    }
}

const gen= evenNumbers()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
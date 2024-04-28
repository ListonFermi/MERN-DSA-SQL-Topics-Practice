class MaxHeap {
  constructor() {
    this.array = [];
  }

  insert(val) {
    let A = this.array;
    A.push(val);

    //bubble up process
    let i = A.length - 1;
    while (A.length > 1 && A[this.parent(i)] < A[i]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMax() {
    const A = this.array;
    const max = A[0];
    //shift the last value to top
    A[0] = A[A.length - 1];

    //bubbling down
    let i = 0;
    while (i < A.length) {
      const C =
        A[this.child1(i)] > A[this.child2(i)] ? this.child1(i) : this.child2(i);

      if (A[C] > A[i]) {
        [A[C], A[i]] = [A[i], A[C]];
        i= C
      }else{
        break
      }
    }
    A.pop()
    return max;
  }

  heapSort(){
    const sortedArr=[]
   while(this.array.length){
        sortedArr.push(this.extractMax())
    }
    return console.log(sortedArr)
  }

  child1(index) {
    return 2 * index + 1;
  }

  child2(index) {
    return 2 * index + 2;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(100);
heap.insert(50);
heap.insert(101);
heap.insert(51);
heap.insert(53);
// heap.extractMax();
console.log(heap.array);
heap.heapSort()

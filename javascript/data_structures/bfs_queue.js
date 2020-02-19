function hamming (n) {
  // Breadth-first calculation with queue
  let values = new Set([1]);
  let currentValue;
  let PQ = [1];
  
  // Need to calculate some extra values (if not giving artificial weighting to left side of tree)
  while(values.size < n + 5000) {
    currentValue = PQ.shift();
    let m2 = currentValue * 2;
    let m3 = currentValue * 3;
    let m5 = currentValue * 5;
    if(!values.has(m2)) {
      PQ.push(m2);
      values.add(m2);
    }
    if(!values.has(m3)) {
      PQ.push(m3);
      values.add(m3);
    }
    if(!values.has(m5)) {
      PQ.push(m5);
      values.add(m5);
    }
  }
  let result = Array.from(values).sort((a,b) => a - b);
  return result[n-1];
}

// Better; i2, i3, i5 point to smallest number they haven't used yet.
function hamming(n) {
  var nums = [1];
  var i2 = 0, i3 = 0, i5 = 0;
  var x2 = 2, x3 = 3, x5 = 5;
  while (nums.length < n) {
    var next = Math.min(x2, x3, x5);
    nums.push(next);
    if (x2 == next) { x2 = 2*nums[++i2]; }
    if (x3 == next) { x3 = 3*nums[++i3]; }
    if (x5 == next) { x5 = 5*nums[++i5]; }
  }
  return nums[n-1];
}


/*

// Linked list implementation; way faster

// queue is initially empty
var Queue = {front: null, back: null};

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
function Node(data, next) {
  this.data = data;
  this.next = next;
} 

// add elements to queue in O(1) time
function Enqueue(element) {
  var N = new Node(element, null);
  if (Queue.back === null) {
    Queue.front = N;
    Queue.back = N; 
  } else { 
    Queue.back.next = N; 
    Queue.back = Queue.back.next;
  } 
}

// remove first element from queue in O(1) time
function Dequeue() {
  if (Queue.front !== null) { 
    var first = Queue.front;
    Queue.front = Queue.front.next; 
    return first.data;
  } else {
    if (Queue.back !== null) { Queue.back = null; }
    return 'Cannot dequeue because queue is empty';
  }
}

Enqueue('a'); 
Enqueue('b'); 
Enqueue('c'); 
Dequeue();

*/
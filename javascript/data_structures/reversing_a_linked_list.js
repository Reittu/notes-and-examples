// Reversing a linked list:

let current = linkedList.getFirst(),
  previous = current,
  next = current.next;

// First element (now last) should not have a next element
current.next = undefined;

current = next;
while(current !== undefined) {
  next = current.next;
  current.next = previous; 
  previous = current;
  current = next;
} 
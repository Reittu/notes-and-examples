let visited = 0;

// Assign visitor flags with 2^n

// visitorOne = 0b0001;
// visitorTwo = 0b0010;
// visitorThree = 0b0100;
// ...

function visit(visit_index) {
  visited = visited | visit_index;
}

function hasVisited(visit_index) {
  if((visited & visit_index) === visit_index) return true;
  return false;
}

// Example with loop
// Can have up to 31 safe visitors with JavaScript (last 2^30).
// If need for more, can use BigInt
// visited = 0n -- and -- visited = visited | BigInt(visit_index)

for(let i = 0; i < 31; i++)
  visit(2 ** i)

// <-- visited = 2147483647 = 0b0111 1111 1111 1111 1111 1111 1111 1111


https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Doubly-Linked-Lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

/**
 * Doubly linked list that keeps track of
 * the last and first element
 */
class LinkedList {
  constructor() {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list
  }

  get length() {
    return this.size;
  }

  addFirst(value) {
    const newNode = new Node(value);

    newNode.next = this.first;

    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode;
    }

    this.first = newNode; // update head
    this.size += 1;

    return newNode;
  }


  addLast(value) {
    const newNode = new Node(value);

    if (this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }

  add(value, position = 0) {
    if (position === 0) { // <1>
      return this.addFirst(value);
    }

    if (position === this.size) { // <2>
      return this.addLast(value);
    }
    // Adding element in the middle
    const current = this.get(position);
    if (current) {
      const newNode = new Node(value); // <3>
      newNode.previous = current.previous; // <4>
      newNode.next = current; // <5>

      current.previous.next = newNode; // <6>
      current.previous = newNode; // <7>
      this.size += 1;
      return newNode;
    }

    return undefined; // out of bound index
  }

  indexOf(value) {
    return this.find((current, position) => {
      if (current.value === value) {
        return position;
      }
      return undefined;
    });
  }

  get(index = 0) {
    return this.find((current, position) => {
      if (position === index) {
        return current;
      }
      return undefined;
    });
  }

  find(callback) {
    for (let current = this.first, position = 0; // <1>
      current; // <2>
      position += 1, current = current.next) { // <3>
      const result = callback(current, position); // <4>

      if (result !== undefined) {
        return result; // <5>
      }
    }
    return undefined; // not found
  }


  removeFirst() {
    const head = this.first;

    if (head) {
      this.first = head.next;
      if (this.first) {
        this.first.previous = null;
      } else {
        this.last = null;
      }
      this.size -= 1;
    }
    return head && head.value;
  }

  removeLast() {
    const tail = this.last;

    if (tail) {
      this.last = tail.previous;
      if (this.last) {
        this.last.next = null;
      } else {
        this.first = null;
      }
      this.size -= 1;
    }
    return tail && tail.value;
  }

  removeByPosition(position = 0) {
    const current = this.get(position);

    if (position === 0) {
      this.removeFirst();
    } else if (position === this.size - 1) {
      this.removeLast();
    } else if (current) {
      current.previous.next = current.next;
      current.next.previous = current.previous;
      this.size -= 1;
    }

    return current && current.value;
  }

  remove(callbackOrIndex) {
    if (typeof callbackOrIndex !== 'function') {
      return this.removeByPosition(parseInt(callbackOrIndex, 10) || 0);
    }

    // find desired position to remove using #find
    const position = this.find((node, index) => {
      if (callbackOrIndex(node, index)) {
        return index;
      }
      return undefined;
    });

    if (position !== undefined) { // zero-based position.
      return this.removeByPosition(position);
    }

    return false;
  }

  /**
   * Iterate through the list yield on each node
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#User-defined_iterables
   */
  * [Symbol.iterator]() {
    for (let node = this.first, position = 0;
      node;
      position += 1, node = node.next) {
      yield { node, position };
    }
  }

  toString() {
    const parts = [...this]; // see [Symbol.iterator]()
    return parts;
    //return parts.map(n => util.inspect(n.node.value)).join(' -> ');
  }
}

// Aliases
LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.search = LinkedList.prototype.contains;
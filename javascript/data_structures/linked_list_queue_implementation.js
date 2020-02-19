// https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial

const LinkedList = require('../linked-lists/linked-list');

class Queue {
  constructor() {
    this.input = new LinkedList();
  }

  add(element) {
    this.input.addFirst(element);
  }

  remove() {
    return this.input.removeLast();
  }

  get size() {
    return this.input.size;
  }
}
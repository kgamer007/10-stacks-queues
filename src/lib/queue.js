'use strict';

// First in, first out
const LinkedList = require('./linked-list');
// Implement a <data structure> using another <data structure>
module.exports = class Queue {
  constructor() {
    // in this example implementation, I'm using an array
    // in your implementation, this will be a Linked List
    this.queue = new LinkedList();
    this.length = 0;
  }

  enqueue(value) {
    this.storage.unshift(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return !this.storage.length;
  }
};

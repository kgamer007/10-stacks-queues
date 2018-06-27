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
    this.length += 1;
    this.queue.insertAtEnd(value);
    this.head = this.queue.head.value;

    return this.length;
  }

  dequeue() {
    if (!this.queue.head) {
      return null;
    }
    this.length -= 1;
    const subtractQueue = this.queue.shift().value;
    return subtractQueue;
  }

  peek() {
    if (!this.queue.head) {
      return null;
    }
    return this.queue.head.value;
  }

  // isEmpty() {
  //   return !this.storage.length;
  // }
  // this method is optional
};

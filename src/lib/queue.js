'use strict';

// First in, first out
const LinkedList = require('./linked-list');

module.exports = class Queue {
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(value) {
    this.storage.insertAtEnd(value);
    return this.storage;
  }

  dequeue() {
    return this.storage.shift();
  }

  peek() {
    return this.storage.findLast();
  }

  // isEmpty() {
  //   return !this.storage.length;
  // }
  // this method is optional
};

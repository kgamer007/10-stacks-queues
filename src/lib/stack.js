'use strict';

const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this.storage = new LinkedList();
  }

  push(value) {
    this.storage.insertAtEnd(value);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage.findLast();
  }
};

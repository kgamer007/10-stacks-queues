'use strict';

const Stack = require('../lib/stack');

describe('stack.js', () => {
  test('#constructor', () => {
    const testList = new Stack();
    expect(testList.storage.head).toBeNull();
  });

  test('#pop should kill top node of stack', () => {
    const testList = new Stack();

    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.pop();
    expect(testList.storage.head.next.next).toBeNull();
  });

  test('#peek should look just at node on top', () => {
    const testList = new Stack();

    testList.push(1);
    testList.push(2);
    testList.push(3);
    testList.peek();
    expect(testList.peek()).toEqual(3);
  });

  test('#push should insert value at head of linkedlist', () => {
    const testList = new Stack();

    testList.push(1);
    testList.push(2);
    testList.push(3);
    expect(testList.storage.head.next.next.value).toEqual(3);
  });
});

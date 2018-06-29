'use strict';

const Queue = require('../lib/queue');

let myQ;

beforeEach(() => {
  myQ = new Queue();
});

afterEach(() => {
  myQ = null;
});

describe('#constructor: does it work?', () => {
  test('#constructor', () => {
    expect(myQ.storage.head).toBeNull();
    expect(myQ.storage.tail).toBeNull();
  });
});

describe('#Queue TESTS', () => {
  describe('#enQueue TESTS', () => {
    beforeEach(() => {
      myQ.enqueue('kevin');
      myQ.enqueue('Devin');
      myQ.enqueue('Tracy');
      myQ.enqueue('Noah');
    });

    test('#enqueue gets 1 more added', () => {
      expect(myQ.storage.head.value).toEqual('kevin');
      expect(myQ.storage.head.next.value).toEqual('Devin');
      expect(myQ.storage.head.next.next.value).toEqual('Tracy');
      expect(myQ.storage.head.next.next.next.value).toEqual('Noah');
    });
  });

  describe('#deQueue TESTS', () => {
    test('#dequeue takes a node away', () => {
      expect(myQ.storage.head).toBeNull();
      myQ.enqueue(1);
      myQ.enqueue(5);
      myQ.enqueue(9);
      expect(myQ.storage.head.value).toBe(1);
      myQ.dequeue();
      expect(myQ.storage.head.value).toBe(5);
    });
  });

  describe('#peek TESTS', () => {
    test('#peek looks front of the list', () => {
      myQ.enqueue(1);
      expect(myQ.storage.head.value).toEqual(1);
    });

    test('#peek is empty', () => {
      expect(myQ.peek()).toBeNull();
    });
  });
});

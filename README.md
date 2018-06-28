[![Build Status](https://travis-ci.org/kgamer007/10-stacks-queues.svg?branch=master)](https://travis-ci.org/kgamer007/10-stacks-queues)

![cf](http://i.imgur.com/7v5ASc8.png) Lab 10 - Stacks and Queues Data Structures
====

## OVERVIEW
This lab uses a Stack class and a Queue class from using an internal linked-list (linked-list comes from my lab 5)

####STACKS
##  stack.push(value)
Time - O(1) Space - O(n)
push function adds one node to top of the stack
##  stack.pop()
Time - O(n) Space - O(n)
pop function removes last one in the stack (the top one)
##  stack.peek()
Time - O(n) Space - O(n)
peek function just looks at top, that's it

####QUEUES  
##  enqueue(value)  
Time - O(1) Space - O(1)
enqueue looks for the last node to join the line 
##  dequeue()  
Time - O(1) Space - O(1)
dequeue looks for the first node to pop off
##  peek()  
Time -O(1) Space - O(1)
peek looks at just the FIFO 

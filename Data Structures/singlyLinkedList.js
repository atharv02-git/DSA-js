class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // defining push method
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      //method for traversing until next is null
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      //special case
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head; //where currentHead is nothing but old head
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return list;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val){
    var foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // insert function
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val); //!! returns boolean value
    if(index === 0) return !!this.unShift(val);
    else{
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let temp = prev.next; //creating a connection between prevNode --> NodeToBeInsterted --> NextOfPrevNode 
      prev.next = newNode;
      newNode.next = temp;
    }
    this.length ++;
    return true;
  }
  // Remove functionality
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length) return !!this.pop();
    if(index === 0) return !!this.shift();
    else{
     let prevNode = this.get(index-1); //retrieving the node 1 before trying to remove
     //setting a connection: prevNode --> removedNode --> prevNode.next
     let removed = prevNode.next;
     prevNode.next = removed.next;
     this.length--;
     return removed;
    }
  }
}

const list = new singlyLinkedList();
console.log(list.push("Ab"));
console.log(list.push("vk"));
console.log(list.push("glenn"));
console.log(list.remove(2))
console.log(list)
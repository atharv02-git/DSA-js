class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // defining push method
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this; 
    }
}

const list = new singlyLinkedList()
console.log(list.push('Ab'))
console.log(list.push('vk'))
console.log(list.head, list.tail)
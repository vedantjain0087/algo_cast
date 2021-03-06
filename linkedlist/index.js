// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
    }

    size(){
        let node = this.head;
        let counter = 0;
        while(node){
            counter++;
            node = node.next;
        }
        return counter
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(this.head){
           let node = this.head;
            while(node.next){
                node = node.next;
            }
            return node;
        }else{
            return null
        }
    }
    clear(){
        this.head = null
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head){
            return;
        }
        else if(!this.head.next){
            this.head = null;
        }
        else{
           let previous = this.head;
           let node = this.head.next;
            while(node.next){
                previous = node;
                node = node.next;
            }
            previous.next = null;
        }
    }
    insertLast(data){
        let last = this.getLast();
        if(last){
            last.next = new Node(data);
        }else{
            this.head = new Node(data);
        }
    }
    getAt(index){
        if(!this.head){
            return null;
        }
        let node = this.head;
        let counter = 0;
        while(node){
            if(counter == index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(i){
        if(!this.head){
            return
        }
        if(i == 0){
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(i-1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;

    }
    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
        }
        if(index == 0){
            this.head = new Node(data,this.head);
            return;
        }

       let previous = this.getAt(index-1) || this.getLast();
       let  node = new Node(data,previous.next);
        previous.next = node;
    }
}

module.exports = { Node, LinkedList };

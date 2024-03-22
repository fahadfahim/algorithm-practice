/**
 * What is a linked list...??
 * it's a data structure that stores whatever data we want it could be strings numbers and it's ordered list of data like an array but there's a relly big distinction in an array each item is mapped it's indexed with a number so we can get the item at index we add something in it gets an index that map to its position but in linked lists just consists of bunch of elements with no inices who are just pointing to the next element .
 * 
 * Formal definition 
 * A data structure that contains a head , tail and length property
 * Linked list consists of nodes and each node has a value and a pointer to another node or null
 * 
 * Comparisons with arrays
 * ===== Lists =====
 * 1 ) do not have indexes 
 * 2 ) connected via nodes with a next pointer 
 * 3 ) Random access is not allowed
 * 
 * ==== Arrays ====
 * 1 ) indexed in order !
 * 2 ) insertion and deletion can be expensive
 * 3 ) can quickly be accessed at a specific index 
 * 
 * What is Node..?
 * ans ) it jsut stores a piece of data and it stores a reference to next node which is called next
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push means insertion at the end 
    /**
 * Pushing 
 * Adding a new node to the end of the linked list
 * === Pushing pseudocode===
 * 1 ) This funciton should accept a value 
 * 2 ) Create a new node using the value passed to the function .
 * 3 ) If there is no head property, on the list set the head and tail to be the newly created node
 * 4 ) Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
 * 5 ) Increment the length by one 
 * 6 ) return the linked list
 */
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        //how do we return the whole list just return this
        return this;
    }

    /**
     * ===== Popping =====
     * Removing a node from the end of the linked list 
     * informally say that when we call pop it removes from the end of linked list it takes last item on the tail and returns it to us
     * === Popping pseudocode ====
     * 1 ) if there are no nodes in the list return undefined
     * 2 ) loop through the list you reach the tail
     * 3 ) set the next property of the 2nd to last node to be null
     * 4 ) set the tail to be the 2nd to last node
     * 5 ) decrement the length of the list by 1
     * 6 ) return the value of the node removed 
     */
    pop() {
        // 1 )
        if (!this.head) return undefined;
        // 2 )
        var current = this.head;
        var newTail = this.tail;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        // 3 )

        this.tail.next = null;
        this.length--;
        //if there is no node in the list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
        // console.log('currnet', current.val);
        // console.log('newTail', newTail.val);
    }

    /**
     * ====== Shifting =====
     * Removing a new node from the beginning of the linked list 
     * Informal 
     * taking the head and deleting it and then moving the head over to whatever the second item was 
     * ==== Shifting pseudocode ====
     * 1 ) if there are no nodes return undefined 
     * 2 ) store the current head property in a variable
     * 3 ) set the head property to be the current head next property
     * 4 ) decrenment the length by 1
     * 5 ) return the value of the node removed 
     */
    shift() {
        // 1 )
        if (!this.head) return undefined;
        // 2 )
        var currentHead = this.head;
        // 3 )
        this.head = currentHead.next;
        // 4 )
        this.length--;
        // 5 )
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }

    /**
     * ==== Unshifting ===
     * Adding a new node to the beginning of the linked list
     * ==== Unshifting pseudocode ====
     * 1 ) this function should accept a value 
     * 2 )create a new node using the value passed to the function
     * 3 ) if there is no head property on the list set the head and tail to be the newly created node
     * 4 )otherwise set the newly created node's next property to be the current head property on the list
     * 5 ) set the head property on the list to be that newly created node 
     * 6 ) increment the length of the list by 1
     * 7 ) return the linked list
     */
    unsift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * ===== Get =====
     * Retriving a node by it's position in the linked list
     * ==== Informal ====
     * so get is a method that takes a number an index ora a position and it returns the item in that position 
     * ==== Get Pseudocode ====
     * 1 ) this function should accept an index
     * 2 ) if th index is less than zero or greater than or equal to the length of the list return null
     * 3 ) loop through the list until you reach the index and return the node at the specific index 
     */
    get(index) {
        //2
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        //3
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * ==== Set ====
     * changing the value of a node based on it's position in the linked list 
     * Informal 
     * so set is a method that will accept two things a position or an index and a value to update the item  at that index too.
     * ==== Set Pseudocode ====
     * 1 ) This function should accept a value and an index 
     * 2 ) Use your get function to find the specific node .
     * 3 ) If the node is not found return false
     * 4 ) if the node is found set the value of that to be the value passed to the function and return true 
     */
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
     *==== Insert ==== 
     Adding a node to the linked list at a specific position 
     ==== Informal ====
     insert is sort of like set in that it takes two pieces of data it takes an index and a value however instead of updating an existing node insert is going to insert a new node at whatever position 

     == Insert Pseudocode ====
     * 1 ) if the index is less than zero or greater than the lenght return false 
     2 ) if the index is the same as the lenght push a new node to the end of the list 
     3 ) if the index is 0 unshift a new node to the start of the list 
     3 ) otherwise using the get method access the node at the index -1
     4 ) set the next property on that node to be the new node
     5 ) increment the length
     6 ) return true
     */
    insert(index, val) {
        //1 
        if (index < 0 || index > this.length) return false;
        //2
        if (index === this.length) return !!this.push(val)
        //3 
        if (index === 0) return !!this.unsift(val)
        //4
        //now we need to connect the newNode to the previous node
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        //5
        this.length++;
        //6
        return true

    }


}

var list = new SinglyLinkedList()
list.push('hello')
list.push('world')
list.push('how')
// list.pop()
list.unsift('first')
console.log('list', list);



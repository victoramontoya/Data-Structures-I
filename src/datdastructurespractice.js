/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
      // Do not modify anything inside of the constructor
  }
    // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  
// Create a new node using the value passed
  addToTail(value) {
    const newNode = {
        value,
        next: null,
    };
   

// If the tail is null, that means there are no nodes in the list, set both the head and the tail to the new node
 if (this.tail === null) {
     this.tail = newNode;
     this.head - newNode;
     return;
 }
// Otherwise, grab reference to the old tail
    const holder = this.tail;
// set the next of the old tail to the new node
  holder.next = this.tail;
// set tail pointer to new node
   this.tail = newNode;
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
   // Check to see if there is a head to remove
    if (this.head === null) return null;
// If so, grab reference to the old head
  const oldHead = this.head;
// move the head pointer to the next node in the list
    this.head = oldHead.next;
// If you removed the only node in the list, set tail to null
    if (this.tail === null) {
        this.tail = null;
    }
// Return the value of the old head
  return oldHead.value;
  }

  contains(value) {
// Start from the head
  
// Iterate through entire list, until you either find the value, or reach the end of the list.

// If you didn't find the node, return false

}


//STACK//
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack */
  
  class Stack {

}


//Hash Table

class HashTable {
    constructor(limit = 8) {
      this.limit = limit;
      this.storage = new LimitedArray(this.limit);
      // Do not modify anything inside of the constructor
    }
// Adds the given key, value pair to the hash table
// Fetch the bucket associated with the given key using the getIndexBelowMax function
// If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
// If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
    insert(key, value) {
//Do not include the next line if you have not completed the resize Stretch Goal
      this.resize();
//Get the index from the hashing function, make sure to pass your key as a string
        let hashIndex = getIndexBelowMax(key.toString(), this.limit);
//The next step gets our bucket from the storage array
//This is a ternary operator, it is essentially a condensed if statement
//if the bucket is already an array, keep that, if not create a new array for the bucket.
        let bucket = this.storage.get(hashIndex) !== undefined ? this.storage.get(hashIndex) : [];
//A tuple is how we are going to store our key value pair
        let tuple = [key, value];
  
//map over the bucket and find the key (if it exists) if it does, set the new value
        let replaced = false;
        bucket = bucket.map((item) => {
            if (item[0] === key) {
                replaced = true;
                return tuple;
            }
            return item;
        });


  
//If we didnt find the key in the bucket, add the key value pair to the bucket
    if (!replaced) {
        bucket.push(tuple);
    }
//Place the bucket back in the hash table
    this.storage.set(hashIndex, bucket);
    }
     

    remove(key) {
//If the Hash Table is empty, there is nothing to return.
        if (this.storage.length === 0) return;
  
//get hashIndex from the hashing function, and grab the bucket
        let hashIndex = getIndexBelowMax(key.toString(), this.limit);
        let bucket = this.storage.get(hashIndex);
      
  
//If the bucket is empty, nothing to remove
        if (bucket === undefined || bucket.length === 0) return;
  
//Otherwise, search the bucket for the tuple containing the key. If found, remove
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                bucket.splice(i, 1)
            }
        }
//Place bucket back in hash table
      
    }
  
    retrieve(key) {
//If the Hash Table is empty, there is nothing to return.
      
  
//get hashIndex from the hashing function, and grab the bucket
      
  
//search the bucket for the tuple containing the key. If found, return value
      
  
//If not found return undefined;
    
    }
  
  
    //extra credit: 
    resize(){
      //The threshold to resize is 75% find that number
      const resizeLimit = this.limit * 0.75 
      //If the current size is less than the number, return.
      if(this.storage.length < resizeLimit) return;
  
      //Otherwise, resize.
      //Grab a reference to the current HashTable storage
      let oldHT = this.storage;
      //update the limit
      this.limit = this.limit * 2;
      //Create a new LimitedArray and set the storage to it
      this.storage = new LimitedArray(this.limit);
  
      //getting each tuple out of the old storage, insert it into the new Hash Table
      oldHT.each( (bucket, index) => {
        if(Array.isArray(bucket)){
          for(let i = 0; i < bucket.length; i++){
            this.insert(...bucket[i])
          }
        }
      })
    }
  }
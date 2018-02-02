/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

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
    this.resize();
    let hashIndex = getIndexBelowMax(key.toString(), this.limit); // hash table location
    let bucket = this.storage.get(hashIndex) !== undefined ? this.storage.get(hashIndex) : [];
    let newTuple = [key, value];
    let replaced = false;
    bucket = bucket.map((item) => {
      if(item[0] === key){
        replaced = true;
        return tuple;
      }
      return items;
    })
    if(!repalced){
      bucket.push(tuple);
    }

    this.storage.set(hashIndex, bucket);
//tuple is how we store a key, value pair
    
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    if(this.storage.length === 0) return undefined;
    let hashIndex = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(hashIndex);
    if(bucket === undefined || bucket.length === 0) return;
    
    for(let i = 0; i < bucket.length; i++){
      let tuple = bucket[i];
      if(tuple[0] === key) {
        bucket.splice(i, 1);
      }
    }
    this.storage.set(hashIndex, bucket);
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (this.storage.length === 0) return undefined;
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(hashIndex);

    for (let i = 0; i < bucket.length; i++){
      if (tuple[i][0] === key){
        return tuple[i][1];
      }
  }
  return undefined;
  }

  resize(){
    const resizeLimit = this.limit *.075
    if(this.storage.length < resizeLimit) return;
    let olfHT = this.storage;
    this.limit = this.limit * 2;
    this.storage = new LimitedArray(this.limit);
    olfHT.each((bucket, index) => {
      if(Array.isArray(bucket)) {
        for(let i = 0; i < bucket.length; i++){
        this.insert(...bucket[i])
        }
      }
    })
  }
}

module.exports = HashTable;

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);        // remove
    this.cache.set(key, value);    // re-insert (most recently used)

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value; // least recently used
      this.cache.delete(firstKey);
    }
  }
}

const lru = new LRUCache(2);

lru.put(1, 10);
lru.put(2, 20);
lru.get(1);       // 10 (now 1 is most recently used)
lru.put(3, 30);   // removes key 2

console.log(lru.get(2)); // -1
console.log(lru.get(3)); // 30
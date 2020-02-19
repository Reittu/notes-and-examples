// Hash table

const hash = (key, size) => {
	let hashedKey = 0;
	for(let i = 0; i < key.length; i++)
		hashedKey += key.charCodeAt(i);
	return hashedKey % size;
}

class HashTable {
	constructor() {
		this.size = 20;
		this.buckets = Array(this.size);
		for(let i = 0; i < this.buckets.length; i++)
			this.buckets[i] = new Map();
	}

	insert(key, value) {
		let idx = hash(key, this.size);
		this.buckets[idx].set(key, value);
	}

	remove(key) {
		let idx = hash(key, this.size);
		let deleted = this.buckets[idx].get(key);
		this.buckets[idx].delete(key);
		return deleted;
	}

	search(key) {
		let idx = hash(key, this.size);
		return this.buckets[idx].get(key);
	}
}

const hashTable = new HashTable();

hashTable.insert('firstName1', 'lastName1');
hashTable.insert('firstName2', 'lastName2');
hashTable.insert('firstName3', 'lastName3');
hashTable.insert('firstName4', 'lastName4');
hashTable.insert('firstName5', 'lastName5');
hashTable.insert('firstName6', 'lastName6');


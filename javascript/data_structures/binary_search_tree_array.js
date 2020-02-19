// Only works for numbers, not self-balancing

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insertNumberNode(data, left = null, right = null) {
		// To support also single number inputs
		if(typeof(data) === "number") {
			data = [data];
		}
		for(let i = 0; i < data.length; i++) {
				
			let Node = {
			  data: data[i],
			  left,
			  right
			};
			let currentNumberNode;

			if (!this.root) {
			  this.root = Node;
			} 
			else {
				// Start from root
				currentNumberNode = this.root;
				while (currentNumberNode) {
					// Less than current node
					if (data[i] < currentNumberNode.data) {
						// Branch reached: found the position for this number.
						if (!currentNumberNode.left) {
							currentNumberNode.left = Node;
							break;
						} 
						// We have to go deeper to reach the branch.
						else {
							currentNumberNode = currentNumberNode.left;
						}
					} 
					// Greater than current node
					else if (data[i] > currentNumberNode.data) {
						if (!currentNumberNode.right) {
							currentNumberNode.right = Node;
							break;
						} 
						else {
							currentNumberNode = currentNumberNode.right;
						}
					} 
					// Equal to current node: no changes
					else {
						break;
					}
				}
			}
		}
	}
}

let BSTtest = new BinarySearchTree();
BSTtest.insertNumberNode([10,3,11,2,4,9,8,16,18,14]);
BSTtest;
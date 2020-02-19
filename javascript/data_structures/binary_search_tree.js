class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insertNumberNode(data, left = null, right = null) {
		let Node = {
		  data,
		  left,
		  right
		};
		let currentNumberNode;

		if (!this.root) {
		  this.root = Node;
		} 
		else {
			currentNumberNode = this.root;
			while (currentNumberNode) {
				// Less than current node
				if (data < currentNumberNode.data) {
					// Branch reached; found the position for this number.
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
				else if (data > currentNumberNode.data) {
					if (!currentNumberNode.right) {
						currentNumberNode.right = Node;
						break;
					} 
					else {
						currentNumberNode = currentNumberNode.right;
					}
				} 
				// Equal to current node
				else {
					break;
				}
			}
		}
	}
}

let BSTtest = new BinarySearchTree();
BSTtest.insertNumberNode(10);
BSTtest.insertNumberNode(7);
BSTtest.insertNumberNode(14);
BSTtest.insertNumberNode(5);
BSTtest.insertNumberNode(13);
BSTtest.insertNumberNode(8);
BSTtest.insertNumberNode(18);
BSTtest.insertNumberNode(15);
BSTtest.insertNumberNode(6);
BSTtest;
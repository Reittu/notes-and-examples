function matchingParentheses(input) {
	const parentheses = ['(', '[', '{'];
	const counterparts = [')', ']', '}'];
	let stack = [];
	for (let i = 0; i < input.length; i++) {
		// Push to stack if current char is a parenthesis
		if (parentheses.some(x => x === input[i])) stack.push(input[i]);
		// Check if char is any closing parenthesis
		else
			for (let j = 0; j < counterparts.length; j++) {
				if (input[i] === counterparts[j]) {
					// Unmatched closing parenthesis or first parenthesis in stack is not of equal type
					if (stack.length === 0 || stack[stack.length - 1] !== parentheses[j])
						return false;
					// Matched parentheses: pop opening parenthesis from stack
					else {
						stack.pop();
						break;
					}
				}
			}
	}
	if (stack.length === 0) return true;
	return false;
}
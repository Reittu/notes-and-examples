function justifyText(words, maxWidth) {
	let rows = [];
	let currentRow = 0;

	// Assign each word to a row which has space for it.
	rows[0] = words[0];
	for (let i = 1; i < words.length; i++) {
		if (rows[currentRow].length + words[i].length < maxWidth) // Current row has space for appending
			rows[currentRow] += ' ' + words[i];
		else { // No space for the word: finish current row (padding) and put the word into next row
			rows[currentRow] = padWordRow(rows[currentRow], maxWidth);
			currentRow++;
			rows[currentRow] = words[i];
		}
	}
	// Right padding for the last row.
	rows[rows.length - 1] = rows[rows.length - 1].padEnd(maxWidth, ' ');
	return rows;
}

function padWordRow(str, maxWidth) {
	let temp = str.split(' '), currentLength = str.length - (temp.length - 1);
	if (temp.length === 1) return temp.join('').padEnd(maxWidth, ' ');
	while (currentLength < maxWidth) {
		for (let i = 0; i < temp.length - 1; i++) {
			temp[i] += " ";
			currentLength++;
			if (currentLength === maxWidth)
				break;
		}
	}
	return temp.join('');
}



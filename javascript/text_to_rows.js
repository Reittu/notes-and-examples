// Takes an array of words (can be preprocessed with str.split(" ")) and amount of wanted rows.
function textToRows(words, rows) {
  if (rows >= words.length) return { rows: [...words], maxChars: words.reduce((a, v) => v.length > a ? v.length : a, 0) };
  let currentRows = [...words], currentMaxChars = Infinity, currentRowSum, currentMinIndex, newMaxChars;
  while (currentRows.length > rows) {
    // Finds two subsequent rows that can be combined with smallest total length
    for (let i = 0; i < currentRows.length - 1; i++) {
      currentRowSum = currentRows[i].length + currentRows[i + 1].length + 1;
      if (currentRowSum < currentMaxChars) {
        currentMaxChars = currentRowSum;
        currentMinIndex = i; // Save for combining rows at this index and index + 1.
      }
    }
    // Combines the two found rows
    currentRows[currentMinIndex] += ' ' + currentRows[currentMinIndex + 1];
    for (let i = currentMinIndex + 1; i < currentRows.length - 1; i++) {
      currentRows[i] = currentRows[i + 1];
    }
    currentRows.pop();
    newMaxChars = currentMaxChars;
    currentMaxChars = Infinity;
  }

  // Evens the variance if possible by taking first word from a lengthy row
  // and appending it to the previous row.
  let nextRowWord;
  for (let i = 0; i < currentRows.length - 1; i++) {
    nextRowWord = currentRows[i + 1].split(' ')[0];
    if (currentRows[i].length + nextRowWord.length < currentRows[i + 1].length) {
      currentRows[i] += ' ' + nextRowWord;
      currentRows[i + 1] = currentRows[i + 1].split(' ').slice(1).join(' ');
    }
  }
  return { rows: currentRows, maxChars: newMaxChars };
}
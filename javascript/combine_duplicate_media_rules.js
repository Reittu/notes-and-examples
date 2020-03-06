// Finds where code block ends.
// Requires an input string and the position where the wanted code block starts.
// The result can be used to slice the code block and use it for any purpose.

function findEndPosition(input, startPosition) {
  let curlyBracketsInStack = 1;
  for(let current = startPosition + 1; current < input.length; current++) {
    if(input[current] === "{") curlyBracketsInStack++;
    else if(input[current] === "}") {
      curlyBracketsInStack--;
      if(curlyBracketsInStack === 0) return current;
    }
  }
  return input.length;
}

// Returns the indices of all Regex matches
function multiMatch(myRegex, myString) {
  let matches = [];
  // Should only use with character consuming regexes.
  while(true) {
    let result = myRegex.exec(myString);
    if(result === null) break; 
    matches.push(result.index);
  }
  return matches;
}

function combineDuplicateRules(originalFile, rule) {
  let outputFile = originalFile; // copy
  let escapedRule = rule.replace(/([\(\)])/g, "\\$1");
  let regexRule = RegExp(`(?<=${escapedRule}){`, "g");
  let matchStartIndices = multiMatch(regexRule, outputFile);
  let mediaQueries = [];

  for(let index of matchStartIndices) {
    let endIndex = findEndPosition(originalFile, index);
    mediaQueries.push(originalFile.slice(index + 1, endIndex)); // Store the individual rules
    outputFile = outputFile.replace(originalFile.slice(index - rule.length, endIndex + 1), ""); // Remove the rules temporarily
  }

  // If not completely minified (has ";" at last declaration), join with an empty string ("") instead.
  let resultRule = rule + "{" + mediaQueries.join(";") + "}";
  outputFile += resultRule;

  return outputFile;
}

// EXAMPLE (run in console with .css file open)

const duplicateRules = [ 
"@media (min-width:768px)",
"@media (min-width:992px)",
"@media (min-width:1200px)",
"@media (max-width:767px)",
"@media (max-width:768px)",
"@media (max-width:991px)",
"@media (max-width:992px)",
"@media (min-width:768px) and (max-width:991px)",
"@media (min-width:992px) and (max-width:1199px)"
];

const input = document.body.innerText;
let currentOutput = input;
for(let rule of duplicateRules)
  currentOutput = combineDuplicateRules(currentOutput, rule);

console.log(input.length);
console.log(currentOutput.length);



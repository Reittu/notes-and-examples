// How to use:
// CMD: npm i clipboardy
// Copy something that needs to be transformed into clipboard
// Run the run.bat or simply CMD: node to_arrow.js
// The result should be on clipboard now.

const clipboardy = require('clipboardy');

let a = clipboardy.readSync();

a = processNamedSingle(a);
a = processNamedMultiple(a);
a = processAnonymousSingle(a);
a = processAnonymousMultiple(a);

clipboardy.writeSync(a);

function processNamedSingle(input) {
  const regex = /(?<!\()function (\w+)\s?\((.*?)\)\s?\{[\s\r]*?(?:return )?(\S[^{;]*?);?[\s\r]*\};?/g;
  return input.replace(regex, 'const $1 = ($2) => $3');
}

function processNamedMultiple(input) {
  const regex = /(?<!\()function (\w+)\s?\((.*?)\)\s?(?=\{)/g;
  return input.replace(regex, 'const $1 = ($2) => ');
}

function processAnonymousSingle(input) {
  const regex = /function\s?\((.*?)\)\s?\{[\r\s]*?(?:return )?(\S[^{;]*?);?[\s\r]*\};?/g;
  return input.replace(regex, '($1) => $2');
}

function processAnonymousMultiple(input) {
  const regex = /function\s?\((.*?)\)\s?(?=\{)/g;
  return input.replace(regex, '($1) => ');
}

//process.stdin.resume();
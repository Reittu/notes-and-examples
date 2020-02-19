let example = {hello: "world"};
let blob = new Blob([JSON.stringify(example, null, 2)], {type : 'application/json'});

function fetchStream(blob) {
  let result = "";
  const reader = blob.stream().getReader();
  let charsReceived = 0;

  // read() returns a promise that resolves when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete, value:", value);
      console.log("Result is: " + new TextDecoder("utf-8").decode(new Uint8Array(result.split(','))));
      return;
    }

    // value for fetch streams is a Uint8Array
    charsReceived += value.length;
    const chunk = value;
    console.log('Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}


// Test
fetchStream(blob);


// Download blob
let p = document.createElement('a');
p.download = "test.txt";
p.href=URL.createObjectURL(blob);
document.body.append(p);
p.click();
URL.revokeObjectURL(blob);


// Blob to JSON
fetch(URL.createObjectURL(blob)).then(objURL => objURL.json()).then( json => console.log(json));


// Uint8 encoding and decoding
const uint8array = new TextEncoder("utf-8").encode("¢");
const decoded = new TextDecoder("utf-8").decode(uint8array);
console.log(uint8array, decoded);



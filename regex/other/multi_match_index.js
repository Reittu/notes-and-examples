// Get index of each matches's first character

let myString = "alkloppoklrpaolkfaklo";
let myRegex = /kl/g;

while(true) {
 let result = myRegex.exec(myString);
 if(result === null)
  break; 
 console.log(result);
}

//

function multiMatch(myRegex, myString){
 while(true) {
  let result = myRegex.exec(myString);
  if(result === null)
   break; 
  console.log(result);
}
 // And if needed: let output = []; output.append(result); return output;
}
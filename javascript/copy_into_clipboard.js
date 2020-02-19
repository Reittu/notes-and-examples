let myInput = document.createElement('input');
myInput.style.position = "absolute";
myInput.style.opacity = 0;
document.body.append(myInput);

myInput.value = "<insert whatever from iterations or anything>";

myInput.select();
document.execCommand("copy");
var canvas = document.querySelector("canvas");
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var dAnchor = document.createElement("a");
dAnchor.href = image;
dAnchor.download = "output.png";
document.body.append(dAnchor);
dAnchor.click();
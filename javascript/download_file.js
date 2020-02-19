function download(data, fileName, dataType) {
    const a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = fileName;
    a.href = `data:${dataType},${encodeURIComponent(data)}`; 
    a.click();
    a.remove();
}

let htmlString = "";
const svgItems = Array.from(document.getElementsByClassName('item'))
svgItems.forEach( x => htmlString += x.innerHTML);

download(htmlString, 'output.html', 'text/html');
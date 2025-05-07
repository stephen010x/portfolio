

function process_images(prefix, classname, width, height) {
    let elements = document.getElementsByClassName(classname);

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        element.href = prefix + element.innerText;
        element.innerText = "";
        element.target = "_blank";
        //element.style.display = 'inline-block';
    
        let image = document.createElement("img");
        image.src = element.href;
        image.alt = element.href.substring(element.href.lastIndexOf("/") + 1);
        image.style.width = "0";
        image.style.height = "0";
        //image.style.paddingBottom = "10px";
        image.onload = function() {
	        image.style.width = width;
            image.style.height = height;
	    };

        element.appendChild(image);
        element.style.display = "inline-block";
    }
}

process_images("https://raw.githubusercontent.com/stephen010x", "a-to-image", "auto", "150px");

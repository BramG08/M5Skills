let url = "http://hers.hosts1.ma-cloud.nl/catabase/cats.php";

async function fetchURL() {
    let response = await fetch(url);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        makeChewy();
    }
}

fetchURL();

function makeChewy() {

    let catElement = document.createElement("article");
    catElement.className = "cat";

    let catName = document.createElement("h2");
    catName.innerText = "Chewy";
    catElement.appendChild(catName);


    let catImage = document.createElement("img");
    catImage.src = "./Img/chewy.jpg";
    catElement.appendChild(catImage);

    let catNameWoezel = document.createElement("h2");
    catNameWoezel.innerText = "Woezel";
    catElement.appendChild(catNameWoezel);

    let catImageWoezel = document.createElement("img");
    catImageWoezel.src = "./Img/woezel.jpg";
    catElement.appendChild(catImageWoezel);

    let body = document.querySelector("body");
    body.appendChild(catElement);

}



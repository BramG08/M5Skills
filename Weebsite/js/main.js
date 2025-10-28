function makeAnimeCard(name, img, score, synopsis) {
    let cardE1 = document.createElement('article');
    cardE1.className = 'anime-card';

    let imgE1 = document.createElement('img');
    imgE1.src = img;
    imgE1.alt = "Anime Image";
    cardE1.appendChild(imgE1);


    let containerE1 = document.createElement('div');
    containerE1.className = 'anime__info';

    let titleE1 = document.createElement('h2');
    titleE1.className = 'anime__title';
    titleE1.innerText = name
    containerE1.appendChild(titleE1);

    let synE1 = document.createElement('p');
    synE1.className = 'anime__synopsis';
    synE1.innerText = synopsis;
    containerE1.appendChild(synE1);

    let scoreE1 = document.createElement('p');
    scoreE1.className = 'anime__score';
    scoreE1.innerText = score;
    containerE1.appendChild(scoreE1);

    cardE1.appendChild(containerE1);

    let body = document.querySelector('body');
    body.appendChild(cardE1);

}

let url = "https://api.jikan.moe/v4/top/anime?tv";


async function fetchAnime() {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);


    for (let i = 0; i < 10; i++) {
        let animeData = json.data[i];
        makeAnimeCard(animeData.title, animeData.images.webp.large_image_url, animeData.score, animeData.synopsis);
    }
}


fetchAnime();   



/* 
Stap 1: Programmeren
Stap 2: Code online plaatsen
--> Repo aanmaken op Github


*/


let sectionListOfArtists, sectionArtists, ulSongs;

window.addEventListener('load', init);

function init(){
    loadDOM();
    createList();
    createListOfArtists();
}

function loadDOM() {
    sectionListOfArtists = document.querySelector('.list-of-artists');
    sectionArtists = document.querySelector('.artists');
    ulSongs = document.querySelector('.songs');
}

function createList() {
    for (const artist of musicArtists) {
        const articleNewArtist = document.createElement('article');
        articleNewArtist.textContent = artist;
        sectionListOfArtists.appendChild(articleNewArtist);
    }
}

function createListOfArtists(){
    for (const artist of musicArtistsObj) {
        const articleNewArtist = createArtist(artist.name, artist.image, artist.description);
        sectionArtists.appendChild(articleNewArtist);
    }
}

function createArtist(name, image, description) { 
    const hdgName = document.createElement('h1');
    hdgName.textContent = name;

    const imgArtist = document.createElement('img');
    imgArtist.src = image;

    const pDescription = document.createElement('p');
    pDescription.textContent = description;

    const articleNewArtist = document.createElement('article');
    articleNewArtist.appendChild(imgArtist);
    articleNewArtist.appendChild(hdgName);
    articleNewArtist.appendChild(pDescription);

    articleNewArtist.addEventListener('click', showSongsOfArtist);

    return articleNewArtist;
}

function showSongsOfArtist() { 
    // const artistName = this.children[1].textContent;
    const artistName = this.querySelector('h1').textContent; 
    console.log(artistName);

    const artistObj = findArtist(artistName);
    console.log(artistObj);

    clearSongs();
    artistObj.songs.forEach(song => {
        const liSongs = document.createElement('li');
        liSongs.textContent = song;
        ulSongs.appendChild(liSongs);
    });
}

function findArtist(name) {
    for (const artist of musicArtistsObj) {
        if (artist.name === name) {
            return artist;
        }
    }
    return null;
}


function clearSongs() {
    while (ulSongs.firstChild) {
        ulSongs.removeChild(ulSongs.firstChild);
    }
}
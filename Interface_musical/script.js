const waitAndBleed = {
    id: 0,
    songName: "Wait and Bleed",
    artist: "Slipknot",
    album: "Slipknot (1999)",
    coverFile: "Slipknot_capa.jpg",
};

const genghisKhan = {
    id: 1,
    songName: "Genghis Khan",
    artist: "Iron Maiden",
    album: "Killers",
    coverFile: "iron maiden killers cover.jpg",
};

const xoteDosCabeludos = {
    id: 2,
    songName: "Xote dos Cabeludos",
    artist: "Luiz Gonzaga",
    album: "Óia eu aqui de novo",
    coverFile: "mano-gonza-capa.jpg",
};

const cumOnFeelTheNoize = {
    id: 3,
    songName: "Cum On Feel The Noize",
    artist: "Quiet Riot",
    album: "Metal Health",
    coverFile: "metal-health-quiet-riot.jpg",
};

const dustToDust = {
    id: 4,
    songName: "Dust to Dust",
    artist: "Misfits",
    album: "Famous Monsters",
    coverFile: "misfits-album.jpg",
};

const dontStay = {
    id: 5,
    songName: "Don't Stay",
    artist: "Linkin Park",
    album: "Meteora",
    coverFile: "linkin-park-meteora.webp",
};

const musicLibrary = [
    waitAndBleed,
    genghisKhan,
    xoteDosCabeludos,
    cumOnFeelTheNoize,
    dustToDust,
    dontStay,
];

let songs = [...musicLibrary];

let playlist = [xoteDosCabeludos, dustToDust, dontStay]

const pageBody = document.getElementById('page-body');
const searchTerm = document.getElementById('search-term');
const searchBtn = document.getElementById('search-button');
const playlistElement = document.getElementById('playlist');

function loadLibrary () {
    pageBody.innerHTML = '';
    for(let index = 0; index < songs.length; index++) {
        pageBody.innerHTML += `
        <div class="card d-flex flex-column align-items-center" style="width: 18rem; height: 30rem;">
            <img src="images/covers/${songs[index].coverFile}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${songs[index].songName}</h5>
                <p class="card-text">${songs[index].album}</p>
                <p class="card-text">${songs[index].artist}</p>
                <button class="btn btn-outline-info" onclick='addToPlaylist(${songs[index].id})'><i class="bi bi-plus-circle"></i></button>
            </div>
        </div>
    `;
        }
}

function loadPlaylist () {
    playlistElement.innerHTML = '';
    for(let index = 0; index < playlist.length; index++) {
        playlistElement.innerHTML += `<p id=${playlist[index].id}
        class="d-flex justify-content-between border-top border-bottom align-items-center">

        ${playlist[index].songName} - ${playlist[index].artist}
        <button class="btn btn-danger" onclick="removeFromPlaylist(
            ${playlist[index].id}
        )">
            <i class="bi bi-trash3-fill"></i>
        </button>
    </p>`
    }
}

function searchClick () {
    if (searchTerm.value === '') return;
    songs = songs.filter(
    (song) => song.songName.includes(searchTerm.value) ||
    song.album.includes(searchTerm.value) ||
    song.artist.includes(searchTerm.value))
    loadLibrary()
}

function resetFilter () {
    if (searchTerm.value !== '') return
    songs = [...musicLibrary]
    loadLibrary ()
}

function removeFromPlaylist(songId) {
    playlist = playlist.filter((song) => song.id !== songId)
    document.getElementById(songId).remove()
}

function addToPlaylist(songId) {
    if(playlist.filter(song => song.id === songId)) return;
    const songToAdd = songs.find((x) => x.id === `${songId}`);
    playlist.push(songToAdd)

    playlistElement.innerHTML += `<p id=${songToAdd.id}
        class="d-flex justify-content-between border-top border-bottom align-items-center">

        ${songToAdd.songName} - ${songToAdd.artist}
        <button class="btn btn-danger" onclick="removeFromPlaylist(
            ${songToAdd.id}
        )">
            <i class="bi bi-trash3-fill"></i>
        </button>
    </p>`
    }

searchBtn.addEventListener('click', searchClick)
searchTerm.addEventListener('input', resetFilter)

loadLibrary ()
loadPlaylist ()

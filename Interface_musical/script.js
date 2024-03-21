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

const pageBody = document.getElementById('page-body');

function loadLibrary () {
    pageBody.innerHTML = '';
    for(let index = 0; index < musicLibrary.length; index++) {
        pageBody.innerHTML += `
        <div class="card d-flex flex-column align-items-center" style="width: 18rem; height: 30rem;">
            <img src="images/covers/Slipknot_capa.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">Nome da musica</h5>
                <p class="card-text">Nome do Álbum</p>
                <p class="card-text">Nome do Artista</p>
                <button class="btn btn-outline-info">Go somewhere</button>
            </div>
        </div>
    `;
        }
}

loadLibrary ()

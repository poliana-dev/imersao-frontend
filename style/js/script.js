const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlist");


function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResult(result))
}


function displayResult(result) {
    // filtro no frontend para garantir que apenas os artistas com a primeira letra no nome sejam exibidos
    const filteredResults = result.filter(artist => artist.name.toLowerCase().startsWith(searchInput.value));

    resultPlaylist.classList.add('hidden'); //esconde cards de play

    // limpa resultados anteriores
    resultArtist.innerHTML = "";  

    filteredResults.forEach(element => {
        const gridCard = document.createElement("div"); // criar um novo card para cada artista
        gridCard.classList.add("grid-container");

        // criar o conteúdo do card
        gridCard.innerHTML = `
            <div class='artist-card' id="">
                <div class="card-img">
                    <img src="${element.urlImg}" class="artist-img" />
                    <div class="play">
                        <span class="fa fa-solid fa-play"></span>
                    </div>
                </div>
                <div class="card-text">
                    <a title="${element.name}" class="vst" href="#"></a>
                    <span class="artist-name">${element.name}</span>
                    <span class="artist-categorie">Artista</span>
                </div>
            <div>
        `;

        // adicionar o card à seção de resultados
        resultArtist.appendChild(gridCard);
    });

    
}

document.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase()

    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});
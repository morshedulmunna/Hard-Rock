const formInput = document.getElementById('formInput');
const searchBtn = document.getElementById('searchBtn');
const albumShow = document.getElementById('albumShow');
const lyricFull = document.getElementById('lyricFull');


searchBtn.addEventListener('click',()=>{
    const searchValue = formInput.value;
    fetch(`https://api.lyrics.ovh/suggest/${searchValue}`)
    .then(res => res.json())
    .then(data => data.data.slice(0,10).map((lyric) => {
        let pCreate = document.createElement('p')
        pCreate.className = 'author lead'
        pCreate.innerHTML= `
        <strong>${lyric.title}</strong> Album by <span>${lyric.album.title}</span> <button onclick='getLyric("${lyric.artist.name}", "${lyric.title}")' class="btn btn-success">Get Lyrics</button>
        `
        albumShow.appendChild(pCreate);
    }))
})

function getLyric(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
         lyricFull.innerHTML = data.lyrics
    })
    
}
const url = 'http://localhost:3000/artist'

const container = document.querySelector('.container');
const create = document.querySelector('.create');
const update = document.querySelector('.update');
const del = document.querySelector('.delete');


const nameCreate = document.querySelector('.nameCreate');
const genreCreate = document.querySelector('.genreCreate');
const genderCreate = document.querySelector('.genderCreate');
const originCreate = document.querySelector('.originCreate');
const albumsCreate = document.querySelector('.albumsCreate');
const imgCreate = document.querySelector('.imgCreate');

const nameUpdate = document.querySelector('.nameUpdate');
const genreUpdate = document.querySelector('.genreUpdate');
const genderUpdate = document.querySelector('.genderUpdate');
const originUpdate = document.querySelector('.originUpdate');
const albumsUpdate = document.querySelector('.albumsUpdate');
const imgUpdate = document.querySelector('.imgUpdate');
const idUpdate = document.querySelector('.idUpdate');

const deleteId = document.querySelector('.deleteId')

create.addEventListener('click', addArtist);
update.addEventListener('click', updateArtist);
del.addEventListener('click', removeLast);

function addArtist() {
    event.preventDefault();
    let person = {
        name: nameCreate.value,
        genre: genreCreate.value,
        gender: genderCreate.value,
        origin: originCreate.value,
        albums: albumsCreate.value,
        img: imgCreate.value
    }
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
        .catch(e => console.log(e))

    updatePage();
}

function updateArtist() {
    event.preventDefault();
    let person = {
        name: nameUpdate.value,
        genre: genreUpdate.value,
        gender: genderUpdate.value,
        origin: originUpdate.value,
        albums: albumsUpdate.value,
        img: imgUpdate.value
    }
    fetch(`${url}/${idUpdate.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
        .catch(e => console.log(e))

    updatePage()
}


function removeLast() {
    console.log(deleteId.value)

    fetch(`${url}/${deleteId.value}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(e => console.log(e))
}

function updatePage() {
    fetch(url)
    .then(res => res.json())
    .then(res => {
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            console.log(element);
            
            let artist = document.createElement('h1');
            
            artist.innerHTML = `${element.name} ${element.genre} ${element.gender} ${element.origin} ${element.albums}`
            
         
                container.prepend(artist);

            }
        })
}
updatePage();


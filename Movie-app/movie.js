import { renderNavbar } from "./navbar.js";
const movieDetailsHead = document.querySelector('.movie-details-header')
const params = new URLSearchParams(window.location.search)
let movie = null;
const title = params.get('title')
document.body.insertAdjacentHTML(
    'afterbegin',
    renderNavbar()
)
const Home = document.querySelector('.home')

    Home.addEventListener('click',(e) => {
            window.location.href = 'home.html'
    })
fetch(`http://www.omdbapi.com/?t=${title}&apikey=daac4829`)
.then((res) => res.json())
.then((data) =>{
    console.log(data)
    movie = data  
    movieDetailsHead.innerHTML = `
    <div class="movie-left">
        <img src="${movie.Poster}" alt="${movie.Title}">
    </div>

    <div class="movie-right">
        <h1>${movie.Title}</h1>

        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Runtime:</strong> ${movie.Runtime}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
        <p><strong>Released:</strong> ${movie.Released}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
    </div>
`;
} )

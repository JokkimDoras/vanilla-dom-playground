import { renderNavbar } from "./navbar.js";

let movies = null;
let initialMoviesNames = [
    'Coolie',
        "Jailer",
        "Enthiran",
        "Sivaji",
        "Petta",
        "Kabali",
        "Kaala",
        "Annaatthe",
        "Darbar",
        "Baba",
        "Padaiyappa",
        "Arunachalam",
        "Muthu",
        "Baasha",
        "Thalapathi",     
        "Annamalai",
        "Lingaa",
        "Kochadaiiyaan",     
        "Chandramukhi"
    ]
async function fetchInitialMovie(){
    const movies = await Promise.all(
        initialMoviesNames.map(async(mov) => {
            const res = await fetch(`http://www.omdbapi.com/?t=${mov}&apikey=daac4829`)
            const data = await res.json();

            return data
        })
    )
    moviesHeader.innerHTML = movies.map((mov) => `
    <div class='each-movie' data-title=${mov.Title}>
           <img src=${mov.Poster}>
            <h1>${mov.Title}</h1>
            <p><${mov.Actor}/p>
    </div>
    `).join('')
        console.log(movies)
        
        
            const EachMovie = document.querySelectorAll('.each-movie')
            
            EachMovie.forEach((movie) => movie.addEventListener('click',() => window.location.href = `movie.html?title=${movie.dataset.title}`))
            
    }
    fetchInitialMovie()
    
    
    
    
    document.body.insertAdjacentHTML(
        'afterbegin',
        renderNavbar()
    )
    
    const searchMovieBtn = document.querySelector('.search-movie-btn')
    const input = document.querySelector('.search-input');
    const MovieDiv = document.querySelector('.searched-movie');
    const moviesHeader = document.querySelector('.movie-header');
    const searchForm = document.querySelector('.form-input');
    const Home = document.querySelector('.home')

    Home.addEventListener('click',(e) => {
        e.preventDefault()
        if (window.location.pathname.endsWith('home.html') || window.location.pathname === '/') {
            console.log("Already on home page!");
            return;
        }        window.location.href = 'home.html'
    })
        input.addEventListener('keyup', function () {
            console.log(input.value)
        })

        function renderMovie() {
            moviesHeader.innerHTML = ''
            MovieDiv.innerHTML = `
            <div class='each-movie'>
           <img src=${movies.Poster}>
            <h1>${movies.Title}</h1>
            <p><${movies.Actor}/p>
    </div>`
    MovieDiv.addEventListener('click',function(){
        window.location.href = `movie.html?title=${movies.Title}`
    })
        }
        async function serchMovie  () {
                const res = await fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=daac4829`)
                const data = await res.json();
                 movies = data;
                 console.log(data)
                 renderMovie()
    
        }
        searchMovieBtn.addEventListener('click', serchMovie)


        searchForm.addEventListener('submit',(e) => {
            e.preventDefault();
            if(input.value == '') return;
            serchMovie()

        })
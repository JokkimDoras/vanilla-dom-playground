import { Navbar } from "./navBar.js";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const packageName = urlParams.get('libname');
const navBarDiv = document.querySelector('.nav')
const packagediv = document.querySelector('.content')


const navbarHtml = Navbar();

navBarDiv.innerHTML = navbarHtml
const homeButton = document.querySelector('.backtohome')
function handleNavigate () {
    window.location.href = '/libapp-dom/home.html'
}
homeButton.addEventListener('click',handleNavigate)
console.log(homeButton)
fetch(`https://registry.npmjs.org/${packageName}`)
.then((res) => res.json())
.then((data) => {
    console.log(data)
    packagediv.innerHTML = `
   <div>
   <h1>${data.name}</h1>
   <p>Maintained by <strong>${data.maintainers[0].name || 'Not Found'}</strong></p>
   <a target="_blank" rel="noopener noreferrer" class='navigate' href=${data.bugs.url}>${data.bugs.url}</a>
   </div>
    `
    const getLink = document.querySelector('.navigate')

    getLink.addEventListener('click',function(e) {
        const url = this.getAttribute('href')
   e.preventDefault();
   window.open(url,'_blank')
    })
}


)


console.log(packageName);
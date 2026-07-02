import { Navbar } from "./navBar.js";

const nav = document.querySelector('.nav')
const parentDiv = document.querySelector('.search-header');
const maintainerDiv = document.querySelector('.maintainers')
console.log(parentDiv)


nav.innerHTML = Navbar();

const queryStirng = window.location.search;
// console.log(queryStirng)
const urlParams = new URLSearchParams(queryStirng);
// console.log(urlParams)
const packageName = urlParams.get('libname')
// console.log(packageName)
  
   fetch(`https://registry.npmjs.org/-/v1/search?text=${packageName}`)
   .then(res => res.json())
   .then(data => {
    data.objects.map((pac) => {
        pac.package.maintainers.map((main) => maintainerDiv.innerHTML += `<p>${main.username}</p>`)
        
    })
    return data.objects.map((pack) => {
          parentDiv.innerHTML +=`
          <div class='child-header'>
          <div>
          <h1>${pack.package.name}</h1>
          <p>${pack.package.description}</p>
          </div>
          
          </div>
          `
    })
   })



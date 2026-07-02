import { Navbar } from "./navBar.js";

const nav = document.querySelector(".nav");


const navbarHtml = Navbar();
nav.innerHTML = navbarHtml;
const input = document.querySelector('.inp')
let term ='';
input.addEventListener('keyup',(e) => term = e.target.value)

nav.addEventListener('submit',function(e) {
e.preventDefault();
window.location.href = `/search.html?libname=${term}`
// try{
//  const fetchPackage = async() => {
//       const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`)
//       const data = res.json();

//  }
 
// }catch(err){
//   console.error(err)
//  }
})
const FEATURED_PACKAGES = [
  "react",
  "typescript",
  "esbuild",
  "vite",
  "redux",
  "json",
  "faker",
  "classnames",
];
const libHeader = document.querySelector(".lib");

async function getInitialPackage() {
  try {
    const promise = FEATURED_PACKAGES.map((pkg) => {
      return fetch(`https://registry.npmjs.org/${pkg}`).then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch`);
        return res.json();
      });
    });

    const packagesData = await Promise.all(promise);
    packagesData.map((pack) => {
      return (libHeader.innerHTML += `
          <div data-key=${pack._id} class='lib-item'>
          <h2>${pack.name}</h2>
          <p>${pack.description}</p>
          </div>
          `);
    });
    const packItems = document.querySelectorAll('.lib-item')
    packItems.forEach(pak => pak.addEventListener('click',function() {
        const lib = this.dataset.key
        window.location.href = `/detail.html?libname=${lib}`
    }))
    return packagesData;
  } catch (err) {
    throw new Error(err);
  }
}

getInitialPackage();


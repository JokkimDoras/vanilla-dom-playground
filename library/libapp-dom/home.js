import { Navbar } from "./navBar.js";

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
    console.log(packagesData);
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
        window.location.href = `/libapp-dom/detail.html?libname=${lib}`
    }))
    return packagesData;
  } catch (err) {
    throw new Error(err);
  }
}

getInitialPackage();
const nav = document.querySelector(".nav");

const navbarHtml = Navbar();

nav.innerHTML = navbarHtml;


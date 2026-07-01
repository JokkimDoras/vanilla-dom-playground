import { Navbar } from "./navBar.js"

const FEATURED_PACKAGES = ['react', 'typescript', 'esbuild', 'vite','redux','json','faker','classnames'];


async function getInitialPackage () {
    try{
        const promise = FEATURED_PACKAGES.map(pkg => {
           return fetch(`https://registry.npmjs.org/${pkg}`)
            .then((res) => {
             if(!res.ok) throw new Error(`Failed to fetch`)
                return  res.json()
             } 
        )
        })

        const packagesData = await Promise.all(promise)
        console.log(packagesData)

        return packagesData
    }catch(err){
     throw new Error(err)
    }

}

const packagesData = getInitialPackage();

const nav = document.querySelector('.nav')

const navbarHtml = Navbar();
console.log(nav)

nav.innerHTML = navbarHtml

console.log(navbarHtml)
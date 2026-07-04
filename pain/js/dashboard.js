// import { renderSideBar } from '../js/sidebar.js'

import { navigate } from "./router.js";

// const sidebarDiv = document.getElementById('sidebar')
// sidebarDiv.innerHTML = renderSideBar();
// const appName = document.querySelector('.app-name')
// const loadingDiv = document.querySelector('#toggle-sidebar')
// appName.addEventListener('click',function(){
//     sidebarDiv.classList.toggle('toggle')
//     console.log(sidebarDiv)
// })

// loadingDiv.addEventListener('click',function(){
//     sidebarDiv.classList.toggle('toggle')

// })
// import { navigate } from "./router.js";
//  const dashboard = document.createElement('a')
//  const add = document.createElement('a')

// dashboard.textContent ='go to Dashbord page'
// add.textContent = 'go to addTransaction page'
//  content.appendChild(dashboard);
//  content.appendChild(add);

// dashboard.addEventListener('click',function(){
//     navigate('dashboard')
// })
// add.addEventListener('click',function(){
//     navigate('add')
// })
const content = document.querySelector("#content");
console.log(content);

export function dashboard() {
  content.innerHTML = `
    <h1>Dashboard</h1>
    <a data-path='add'>go to the addTransaction</a>
    <a data-path='profile'>go to the Profile</a> 
    <a data-path='setting'>go to setting page</a>  
    `;
}
dashboard();

content.addEventListener('click',function(e){
    const { path } = e.target.dataset
    console.log(path)

    if(path === 'add'){
        navigate(path)
    }
    if(path === 'setting'){
        navigate(path)
    }
    if(path === 'profile'){
        navigate(path)
    }
})

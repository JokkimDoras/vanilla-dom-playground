// import { renderSideBar } from '../js/sidebar.js'

import { navigate } from "./router.js";
import { renderSideBar } from "./sidebar.js";
import { nav } from "./nav.js";
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
const sidebarDiv = document.querySelector("#sidebar");
const navDiv = document.querySelector("#nav-header");
const realContent = document.querySelector('.content-real')

export function dashboard() {

    console.log('bro am i rendering again??')
  navDiv.innerHTML= nav()

  sidebarDiv.innerHTML = renderSideBar();

  const stuff = document.querySelector('.toggle-the-bar')
  console.log('stuff',stuff)
  stuff.addEventListener('click',function() {
      console.log(this)
      sidebarDiv.classList.toggle('sidebar-close')
  })
  return (realContent.innerHTML = `
    <h1>Dashboard</h1>
    <a data-path='add'>go to the addTransaction</a>
    <a data-path='profile'>go to the Profile</a> 
    <a data-path='setting'>go to setting page</a>  
    `);
}
dashboard();


content.addEventListener("click", function (e) {
  const { path } = e.target.dataset;

  // if(path === 'add'){
  //     navigate(path)
  // }
  // if(path === 'setting'){
  //     navigate(path)
  // }
  // if(path === 'profile'){
  //     navigate(path)
  // }
  if (path) navigate(path);
});



window.addEventListener("popstate", function () {
  var path = this.window.location.pathname.replace("/", "");
  navigate("dashboard.html");
  // console.log(path)
  // if(path === 'add'){
  //     navigate(path)
  // }
  // if(path === 'setting'){
  //     navigate(path)
  // }
  // if(path === 'profile'){
  //     navigate(path)
  // }
  // if(path == '#dashboard.html' || path === 'dashboard'){
  //     navigate('dashboard.html')
  // }
});

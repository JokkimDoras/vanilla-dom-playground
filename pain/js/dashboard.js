// import { renderSideBar } from '../js/sidebar.js'

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
import { navigate } from "./router.js"
// const content = document.querySelector('#content')
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

navigate('dashboard')
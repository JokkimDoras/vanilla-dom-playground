import { renderSideBar } from '../js/sidebar.js'

const sidebarDiv = document.getElementById('sidebar')
sidebarDiv.innerHTML = renderSideBar();
const appName = document.querySelector('.app-name')
const loadingDiv = document.querySelector('#toggle-sidebar')
appName.addEventListener('click',function(){
    sidebarDiv.classList.toggle('toggle')
    console.log(sidebarDiv)
})

loadingDiv.addEventListener('click',function(){
    sidebarDiv.classList.toggle('toggle')

})
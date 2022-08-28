import {navabar} from "../components/export.js"

window.addEventListener('load',home)

function home(){
    let x = document.querySelector('.navbar');
    x.innerHTML = navabar();
}
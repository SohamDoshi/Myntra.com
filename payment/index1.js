import { navabar } from "../components/export.js";

window.addEventListener('load',nav)

function nav(){
    let x = document.querySelector('.navbar');
    x.innerHTML = navabar()
}
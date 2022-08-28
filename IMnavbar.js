import navbar from "./components/navbar.js";

document.getElementById('navbar1').innerHTML = navbar();


import footer from "./components/footer.js";

document.getElementById('feeter').innerHTML = footer();



let bagLink = () => {
    let data = JSON.parse(localStorage.getItem("bag")) || [];
    if (data.length === 0) {
        window.location.href = "./bag/bag.html"
    } else {
        window.location.href = "./bag-2/index.html"
    }
    console.log('test')
}

document.getElementById('bag').addEventListener('click', bagLink)


let profilelink=()=>{
    window.location.href = "login.html"
    console.log('test')
}

document.getElementById('profile').addEventListener('click', profilelink)

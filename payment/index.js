function fun() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (btnText.innerText === 'Show More') {
        moreText.style.display = "inline";
        btnText.innerText = "Show Less"
    }
    else {
        moreText.style.display = "none";
        btnText.innerText = "Show More"
    }
    console.log(btnText)

}
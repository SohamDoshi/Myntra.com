let pin = () => {
    let age = prompt('How old are you?', 'deafault');
    console.log('age:', age)
}
let btn = () => {
    let coup = prompt('Enter the coupon');
    console.log('coup:', coup)

}
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
window.addEventListener('load', appen)

function appen() {
    let arr = JSON.parse(localStorage.getItem('data'))
    let main = document.querySelector('.fetch');
    arr.forEach((el, index) => {
        let div = document.createElement('div');
        div.setAttribute('id', 'image');
        let image = document.createElement('img');
        image.src = el.image;
        div.append(image);
        let di = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = el.name;
        let p1 = document.createElement('p')
        p1.innerText = el.desc;
        let p2 = document.createElement('p');
        p2.innerText = el.seller;
        let butdi = document.createElement('div');
        butdi.setAttribute('class', 'button');
        let but = document.createElement('button');
        but.innerText = `Size:${el.size}`
        let but1 = document.createElement('button');
        but1.innerText = `Qty:${1}`;
        butdi.append(but, but1);
        let off = document.createElement('div');
        let price = document.createElement('p');
        price.innerText = `₹${el.price}`;
        let drop = document.createElement('p');
        drop.innerText = el.MRP;
        let dis = document.createElement('p');
        dis.innerText = `${el.off}% OFF`;
        off.append(price, drop, dis);
        di.append(p, p1, p2, butdi, off);
        let news = document.createElement('div');
        let butn = document.createElement('button');
        butn.innerText = "X"
        butn.setAttribute('class', 'x');
        butn.addEventListener('click', () => {
            removes(index)
        })
        news.append(div, di, butn)
        main.append(news);
    })
    append();
}
let removes = (i) => {
    event.target.parentNode.remove();
    let data = JSON.parse(localStorage.getItem('data'));
   let x  = [];
  data.forEach(function(el,j){
    if(i!=j){
        x.push(el)
    }
  })
  localStorage.setItem("data",JSON.stringify(x));
 append()
}


let append = () => {
    let arr = JSON.parse(localStorage.getItem('data'));
    let main = document.querySelector('.price');
    let item = document.querySelector('.itmes');
    let p = document.createElement('p');
    p.innerText = `PRICE DETAILS(${arr.length} items)`
    let ttl = document.querySelector('.ttl');
    let mrp = document.querySelector('.mrp');
    let coupon = document.querySelector('.coupon');
    let total = document.querySelector('.total');
    item.append(p);
    let Totalprice = 0;
    let amount = 0;
    let disc;
    arr.forEach(({ price, MRP }) => {
        let x = Number(price);
        let y = Number(MRP);
        Totalprice += x;
        amount += y;
    })
    disc = Math.abs(Totalprice - amount);
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    p1.innerText = `₹${amount}`;
    ttl.append(p1);
    let p2 = document.createElement('p');
    p2.innerText = `-₹${disc}`;
    mrp.append(p2)
    let p3 = document.createElement('p');
    p3.innerText = "Apply Coupon";
    coupon.append(p3);
    let p4 = document.createElement('p');
    p4.innerText = `₹${Totalprice}`;
    total.append(p4)
}
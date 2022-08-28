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
    let arr = JSON.parse(localStorage.getItem('bag'))
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
        let s = document.createElement('select');
        let op = document.createElement('option');
        op.innerText = `Qty:${1}`;
        let op1 = document.createElement('option');
        op1.innerText = `Qty:${2}`;
        let op2 = document.createElement('option');
        op2.innerText = `Qty:${3}`;
        let op3 = document.createElement('option');
        op3.innerText = `Qty:${4}`;
        let op4 = document.createElement('option');
        op4.innerText = `Qty:${5}`;
        s.append(op, op1, op2, op3, op4);
        s.setAttribute('class', 'sele')
        s.addEventListener('change', function () {
            ch(el)
        })

        butdi.append(but, s);
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
    console.log(i);
    let data = JSON.parse(localStorage.getItem('bag'));
    data.splice(i, 1)
    localStorage.setItem('bag', JSON.stringify(data));
    append()
}


let append = () => {
    let arr = JSON.parse(localStorage.getItem('bag'));
    let main = document.querySelector('.price');
    let item = document.querySelector('.itmes');
    let p = document.createElement('p');
    p.innerText = `PRICE DETAILS(${arr.length} items)`
    let ttl = document.querySelector('.ttl');
    let mrp = document.querySelector('.mrp');
    let coupon = document.querySelector('.coupon');
    let total = document.querySelector('.total');
    item.innerHTML = null;
    ttl.innerHTML = null;
    mrp.innerHTML = null;
    coupon.innerHTML = null;
    total.innerHTML = null;
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
    let p11 = document.createElement('p');
    p11.innerText = "Total MRP"
    p1.innerText = `₹${amount}`;
    ttl.append(p11, p1);
    let p2 = document.createElement('p');
    p2.innerText = `-₹${disc}`;
    let p22 = document.createElement('p');
    p22.innerText = "Discount on MRP"
    mrp.append(p22, p2)
    let p3 = document.createElement('p');
    p3.innerText = "Apply Coupon";
    let p33 = document.createElement('p');
    p33.innerText = "Coupon Discount"
    coupon.append(p33, p3);
    let p4 = document.createElement('p');
    p4.innerText = `₹${Totalprice}`;
    let p44 = document.createElement('p');
    p44.innerText = "Total Amount";
    total.append(p44, p4)
}

function ch(el) {

    let arr = JSON.parse(localStorage.getItem('bag'));
    let sele = document.querySelector('.sele').value;
    sele = sele.split(":");
    sele = Number(sele[1]);
    for (let i = 0; i < sele; i++) {
        arr.push(el)
    }
    localStorage.setItem('bag', JSON.stringify(arr))
    append()

}

function next() {
    window.location.href = "../address/index.html"
}
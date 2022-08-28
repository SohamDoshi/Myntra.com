window.addEventListener('load', body)

function body() {
    let obj = JSON.parse(localStorage.getItem('add'))
    console.log('obj:', obj)
    let de = document.querySelector('.details');
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let div = document.createElement('div');
    div.setAttribute('class', 'home');
    let butn = document.createElement('button');
    butn.innerText = 'HOME';
    div.append(p, butn)
    p.innerText = obj.name;
    p1.innerText = obj.add;
    p2.innerText = `Mobile: ${obj.num}`;
    let rem = document.createElement('button');
    rem.innerText = 'REMOVE';
    rem.addEventListener('click', back);
    de.append(div, p1, p2, rem)
    home();
}
function home() {
    let price = document.getElementById('price');
    let ttl = document.getElementById('ttl');
    let con = document.getElementById('con');
    let amont = document.getElementById('amont');
    let arr = JSON.parse(localStorage.getItem('bag'));
    console.log('length:', arr.length, arr)
    let m = 0;
    arr.forEach(({ price }) => {
        let x = Number(price);
        m += x;
    });
    let p = document.createElement('p');
    p.innerText = `PRICE DETAILS (${arr.length} Item)`;
    price.append(p)
    let p1 = document.createElement('p');
    p1.innerText = "Total MRP";
    let p11 = document.createElement('p');
    p11.innerText = `₹${m}`;
    ttl.append(p1, p11);
    p2 = document.createElement('p');
    p2.innerText = "Convenience Fee";
    let p22 = document.createElement('p');
    p22.innerText = 'Know More';
    let p222 = document.createElement('p');
    p222.innerText = "FREE";
    con.append(p2, p22, p222);
    let p3 = document.createElement('p');
    p3.innerText = 'Total Amount';
    let p33 = document.createElement('p');
    p33.innerText = `₹${m}`;
    amont.append(p3, p33);
    let main = document.querySelector('.rightbody');
    let div = document.createElement('button');
    div.innerText = "CONTINUE";
    div.setAttribute('class', 'but')
    div.addEventListener('click', nex);
    main.append(div)
}
function back() {
    window.location.href = "../address/index.html"

}

function nex() {
    window.location.href = "../payment/index.html"
}
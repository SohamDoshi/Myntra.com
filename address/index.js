let address = () => {
    console.log("line-2");
}

window.addEventListener('load', home);

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
    amont.append(p3, p33)
}

function datas(na, n, p, a, l) {
    this.name = na;
    this.num = n;
    this.pin = p;
    this.add = a;
    this.loc = l;
}

let addresss = () => {
    let name = document.getElementById('name').value;
    let num = document.getElementById('num').value;
    let pin = document.getElementById('pin').value;
    let add = document.getElementById('add').value;
    let loc = document.getElementById('loc').value;
    let x = new datas(name, num, pin, add, loc);
    localStorage.setItem("add", JSON.stringify(x));
    window.location.href = "../addconform/index.html"
}
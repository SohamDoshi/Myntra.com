window.addEventListener('load', home)
function home() {
    let arr = JSON.parse(localStorage.getItem('data'));
    console.log('length:', arr.length, arr)
    let m = 0;
    arr.forEach(({ price }) => {
        let x = Number(price);
        m += x;
    });
    let cvv = JSON.parse(localStorage.getItem('cvv'));

    let p = document.querySelector('.rights');
    let td = document.createElement('td');
    td.innerText = cvv.num;
    p.append(td);
    let amont = document.querySelector('.rightamount');
    let td1 = document.createElement('td');
    td1.innerText = `INR${m}.00`;
    amont.append(td1)
    console.log('m:', m)
}


let last = () => {
    let val = document.querySelector('#otp').value;
    if (val === "1234") {
        alert('OTP Successfull');
        window.location.href = "load.html"
    }
    else {
        alert('Incorrect OTP');
    }
}
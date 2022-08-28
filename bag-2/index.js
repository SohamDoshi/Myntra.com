
import { navabar } from '../components/export.js'
let x = document.querySelector('.navbar');
x.innerHTML = navabar();
let arr = [{
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg',
    name: 'Roadster',
    desc: 'Men Blue Printed Casual Sustainable Shirt',
    price: "749",
    MRP: '1499',
    off: '50',
    size: 'L',
    seller: 'Fractal Fashion'
},
{
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg',
    name: ' HRX by Hrithik Roshan',
    desc: 'Men Yellow Printed Cotton Pure Cotton T-shirt',
    price: "349",
    MRP: '699',
    off: '50',
    size: 'XL',
    seller: 'Omnitech Retail'
}]
localStorage.setItem("bag", JSON.stringify(arr));
// // p.append(svg)


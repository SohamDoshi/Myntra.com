// document.getElementById("add").addEventListener("click", addProduct)
const x = [
  {
    "name": "U.S. Polo Assn",
    "category": "Mens Pure Cotton Polo T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19023024/2022/8/2/136b1ddb-e498-4e85-b9a6-4dbe4f0ae2821659421677365-US-Polo-Assn-Men-Tshirts-5691659421676904-1.jpg",
    "price": "1279",
    "mrp": "1499",
    "rating": "4.5",
    "custmer": "2500"
  },
  {
    "name": "Moda Rapido",
    "category": "Printed Cotton Pure Cotton T-shrit",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
    "price": "699",
    "mrp": "949",
    "rating": "3.8",
    "custmer": "750"
  },
  {
    "name": "Roadster",
    "category": "Typography cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg",
    "price": "239",
    "mrp": "599",
    "rating": "4.1",
    "custmer": "3200"
  },
  {
    "name": "ONN",
    "category": "Men Polo Collor T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18995934/2022/7/6/5a241a63-0047-4546-8640-05b0d78e62d11657120401052MensPeacockBlueSolidPoloCollarT-Shirt6.jpg",
    "price": "599",
    "mrp": "899",
    "rating": "4.5",
    "custmer": "12500"
  },
  {
    "name": "Loius Philippe Sport",
    "category": "Men Polo Collor T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18762302/2022/6/29/e4865577-1370-4ede-a5b9-325bf48b6c931656501603337-Louis-Philippe-Sport-Men-Brown-Polo-Collar-Slim-Fit-T-shirt--1.jpg",
    "price": "766",
    "mrp": "849",
    "rating": "5",
    "custmer": "5000"
  },
  {
    "name": "Difference of Opinion",
    "category": "Men Solid Oversized Cotton",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg",
    "price": "558",
    "mrp": "899",
    "rating": "3.5",
    "custmer": "2000"
  },
  {
    "name": "Roadster",
    "category": "Pure Cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2019/9/10/4f24f563-c764-4f27-9fc5-9ad3dcf167621568108715062-Roadster-Men-White-Solid-Round-Neck-T-shirt-1641568108713591-1.jpg",
    "price": "199",
    "mrp": "499",
    "rating": "3.9",
    "custmer": "650"
  },
  {
    "name": "Huetrap",
    "category": "Typography cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
    "price": "472",
    "mrp": "599",
    "rating": "4.5",
    "custmer": "4000"
  },
  {
    "name": "Austin wood",
    "category": "Striped Polo ",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg",
    "price": "509",
    "mrp": "749",
    "rating": "4.4",
    "custmer": "8900"
  },
  {
    "name": "HRX by Hrithik Roshan",
    "category": "Rapid Dry Traning T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5842076/2018/12/20/353cd269-5498-4aa9-a6ca-c503fcd2f2c61545286560719-HRX-by-Hrithik-Roshan-Men-White-Rapid-Dry-Camo-Training-T-sh-1.jpg",
    "price": "714",
    "mrp": "899",
    "rating": "4.9",
    "custmer": "53500"
  },
  {
    "name": "Puma",
    "category": "PERFORMANCE CAT Printed Tshirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13502814/2021/3/4/8ed00fec-a3cb-4cc4-8b31-7ec5cabd941f1614833774399-Puma-Men-Tshirts-8951614833772120-1.jpg",
    "price": "1049",
    "mrp": "1299",
    "rating": "4.5",
    "custmer": "21300"
  },
  {
    "name": "Puma",
    "category": "Printed Round Neck Pure Cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13502726/2021/3/1/74b34cf3-7cec-42a1-b234-b8bca7c80fe21614600619653-Puma-Men-Tshirts-1511614600618291-1.jpg",
    "price": "659",
    "mrp": "899",
    "rating": "4.7",
    "custmer": "18700"
  },
  {
    "name": "Puma",
    "category": "Men Brand Logo Printed Slim Fit T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16848142/2022/4/22/e0edd77e-c968-42ac-bd41-6425cf643bdb1650612095831-Puma-Men-Mustard-Yellow-Brand-Logo-Printed-Slim-Fit-T-shirt--1.jpg",
    "price": "1079",
    "mrp": "1250",
    "rating": "4.4",
    "custmer": "12300"
  },
  {
    "name": "WRONG",
    "category": "Self Design Welt Pocket T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1894413/2017/6/20/11497943671766-WROGN-Men-Grey-Melange-Self-Design-Round-Neck-T-shirt-881497943671356-1.jpg",
    "price": "685",
    "mrp": "899",
    "rating": "4.8",
    "custmer": "12700"
  },
  {
    "name": "WRONG",
    "category": "Men Slim Fit Cotton Pure Cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10188425/2019/9/26/21d2b20a-80fe-498d-95cb-7d77615435901569490347780-WROGN-Men-Black-Slim-Fit-Printed-Round-Neck-T-shirt-66115694-1.jpg",
    "price": "779",
    "mrp": "899",
    "rating": "4.5",
    "custmer": "14300"
  },
  {
    "name": "WRONG",
    "category": "Pack of 3 Solid Pure Cotton T-shirts",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12328906/2020/10/27/5f9f8d69-9b04-4f7f-a373-d8d6aed36ff81603799284499AllenSollyMenNavyBlueSolidSweatshirtTshirtsWROGNMenTshirtsWR1.jpg",
    "price": "1079",
    "mrp": "1245",
    "rating": "4.2",
    "custmer": "9000"
  },
  {
    "name": "WRONG",
    "category": "Polo Collar Slim Fit T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17026150/2022/7/18/dcb56042-3f1f-4692-b438-2dfed1a6a84c1658121042935-WROGN-Men-Tshirts-6271658121042417-1.jpg",
    "price": "899",
    "mrp": "1050",
    "rating": "3.9",
    "custmer": "6000"
  },
  {
    "name": "Kalt",
    "category": "Men Colourblocked T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19038426/2022/7/9/46da7fdf-c398-49f4-99c3-7e386752f9211657364845546Tshirts1.jpg",
    "price": "467",
    "mrp": "599",
    "rating": "3.5",
    "custmer": "850"
  },
  {
    "name": "Kalt",
    "category": "Men Colourblocked T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14142566/2021/4/22/61fd6be6-c0b0-40d1-8641-310b92ac65c61619073043653KaltMenGreenSolidHoodT-shirt1.jpg",
    "price": "357",
    "mrp": "499",
    "rating": "3.8",
    "custmer": "2000"
  },
  {
    "name": "Kalt",
    "category": "Men Colourblocked T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/19/55094c99-1281-4c83-975c-0ffcaada0cf11616158273845-1.jpg",
    "price": "1045",
    "mrp": "1310",
    "rating": "4.5",
    "custmer": "13000"
  },
  {
    "name": "Kalt",
    "category": "Men Striped Polo Collor T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17116068/2022/2/10/52dee27b-402b-4302-bb80-7a74d87a71de1644477374580KaltMenGreenStripedPoloCollarPocketsT-shirt1.jpg",
    "price": "1045",
    "mrp": "1250",
    "rating": "4.1",
    "custmer": "1000"
  },
  {
    "name": "Friskers",
    "category": "Printed V-Neck T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/16/2c8b13ef-000e-4630-9412-3d9fc5f9c4f01581804880059-1.jpg",
    "price": "515",
    "mrp": "649",
    "rating": "4.5",
    "custmer": "21300"
  },
  {
    "name": "Friskers",
    "category": "Printed V-Neck T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/16/8341a2bd-ddb8-4690-834b-2b0f48ca6c401581804472455-1.jpg",
    "price": "515",
    "mrp": "679",
    "rating": "4.7",
    "custmer": "9000"
  },
  {
    "name": "Friskers",
    "category": "Men Printer Cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16855080/2022/1/17/7df6faeb-c1e0-446b-8f9e-132a78f805331642425017278MenPistaSleepyAppleCutSleevelessGymVest1.jpg",
    "price": "492",
    "mrp": "599",
    "rating": "4.2",
    "custmer": "5000"
  },
  {
    "name": "Friskers",
    "category": "Solid V-Neck Pure Cotton T-shirt",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/25/388e72d1-2a53-411b-882e-95d60185bb5f1551092571172-1.jpg",
    "price": "481",
    "mrp": "649",
    "rating": "4.5",
    "custmer": "10000"
  }
]

let data = [];

function Product(n, c, i, p, g, s) {
  this.name = n;
  this.category = c;
  this.image = i;
  this.price = p;
  this.gender = g;
  this.sold = s;
}

function addProduct(e) {
  e.preventDefault()
  let form = document.querySelector("form");
  let name = form.name.value;
  let category = form.category.value;
  let image = form.image.value;
  let price = form.price.value
  let gender = form.gender.value;
  let sold = false;
  let add = new Product(name, category, image, price, gender, sold);

  // let data = [];
  data.push(add);
  console.log(data)
  // localStorage.setItem("Products",JSON.stringify(data));
}

let discount = (price, mrp) => {
  let div = +price / +mrp
  let per = Math.floor(100 - (div * 100))
  return per
}
let reviwe = (n) => {
  let a = +n > 1000 ? +n / 1000 + "K" : +n
  return a;
}
console.log(data);

let append = (data) => {
  let cont = document.getElementById('container')
  cont.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement('div')
    div.className = 'product'

    let img = document.createElement('img')
    img.src = el.image;

    let rating = document.createElement('p')
    rating.id = "rating"
    let custmer = reviwe(el.custmer)
    rating.innerHTML = `${el.rating} <i class="fa-solid fa-star"></i> | ${custmer}`;

    let title = document.createElement('h3')
    title.innerText = el.name;

    let dis = document.createElement('p')
    dis.innerText = el.category

    let price = document.createElement('p')
    let disc = discount(el.price, el.mrp);
    price.innerHTML = `Rs. ${el.price} <del>Rs. ${el.mrp}</del> <font color="red">(${disc}% OFF)</font>`;

    let btn = document.createElement('button')
    btn.id = "addtocart";
    btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add To Bag'
    btn.addEventListener('click', function () {
      addToCart(el)
    })
    let wish = document.createElement('button')
    wish.id = "addtowish";
    wish.innerHTML = '<i class="fa-solid fa-heart"></i> Add To Wishlist'
    wish.addEventListener('click', function () {
      addToWish(el)
    })
    div.append(img, rating, title, dis, price, btn, wish)
    cont.append(div)
  })
}

// append(x)

let addToCart = (el) => {
  let data = JSON.parse(localStorage.getItem("bag")) || [];
  data.push(el)
  localStorage.setItem("bag",JSON.stringify(data))
}
let addToWish=(el)=>{
  let data = JSON.parse(localStorage.getItem("wish")) || [];
  data.push(el)
  localStorage.setItem("bag",JSON.stringify(data))
}

let brands = (value) => {
  let data = x;
  let brand = document.getElementById(`${value}`)
  let filter = data.filter((el) => {
    return el.name === value;
  })
  if (brand.checked === true) {
    append(filter);
  } else {
    append(x)
  }
}

let discountRange = (value) => {
  let data = x;
  let brand = document.getElementById(`${value}`)
  let filter = data.filter((el) => {
    return discount(el.price, el.mrp) >= value;
  })
  if (brand.checked === true) {
    append(filter);
  } else {
    append(x)
  }
}

let priceRange = (id,value) => {
  let data = x;
  let brand = document.getElementById(`${id}`)
  let filter = data.filter((el) => {
    return el.price>= +id && el.price <=+value;
  })
  if (brand.checked === true) {
    append(filter);
  } else {
    append(x)
  }
}

let pagenation = (id, limit, arr) => {

  let items = limit;
  let start = id > 1 ? items * (+id - 1) : 0
  let end = start + items;
  let data = arr.slice(start, end)
  append(data)
}
let mainPagenation = (id) => {
  pagenation(id, 15, x)
}
mainPagenation(1, 15, x)

let filter = document.getElementById("short");

filter.addEventListener("change", function () {
  if (filter.value === "recom") {
    let data = x;
    let filtered = data.sort(function (a, b) {
      if (+a.rating > +b.rating) return -1
      if (+a.rating < +b.rating) return 1
      return 0
    })
    mainPagenation((this.id, 15, filtered));
  } else if (filter.value === "new") {
    let data = x;
    let filtered = data.sort(function (a, b) {
      if (+a.custmer > +b.custmer) return -1
      if (+a.custmer < +b.custmer) return 1
      return 0
    })
    mainPagenation((this.id, 15, filtered));
  } else if (filter.value === "ltoh") {
    let data = x;
    let priceLH = data.sort(function (a, b) {
      if (+a.price > +b.price) return 1
      if (+a.price < +b.price) return -1
      return 0
    })
    mainPagenation((this.id, 15, priceLH));
  } else if (filter.value === "htol") {
    let data = x;
    let priceHL = data.sort(function (a, b) {
      if (+a.price > +b.price) return -1
      if (+a.price < +b.price) return 1
      return 0
    })
    mainPagenation(this.id, 15, priceHL);
  } else if (filter.value === "dis") {
    let data = x;
    let filter = data.sort(function (a, b) {
      if (discount(a.price, a.mrp) > discount(b.price, b.mrp)) return -1
      if (discount(a.price, a.mrp) < discount(b.price, b.mrp)) return 1
      return 0
    })
    mainPagenation(this.id, 15, filter);
  } else if (filter.value === "customer") {
    let data = x;
    let filtered = data.sort(function (a, b) {
      if (+a.rating > +b.rating) return -1
      if (+a.rating < +b.rating) return 1
      return 0
    })
    mainPagenation((this.id, 15, filtered));
  } else if (filter.value === "popl") {
    let data = x;
    let filtered = data.sort(function (a, b) {
      if (+a.custmer > +b.custmer) return -1
      if (+a.custmer < +b.custmer) return 1
      return 0
    })
    mainPagenation((this.id, 15, filtered));
  }
})
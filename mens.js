document.getElementById("add").addEventListener("click",addProduct)
let x =[
    {
      "name": "U.S. Polo Assn",
      "category": "Mens Pure Cotton Polo T-shirt",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19023024/2022/8/2/136b1ddb-e498-4e85-b9a6-4dbe4f0ae2821659421677365-US-Polo-Assn-Men-Tshirts-5691659421676904-1.jpg",
      "price": "1279",
      "gender": "M",
      "sold": false
    },
    {
      "name": "Moda Rapido",
      "category": "Printed Cotton Pure Cotton T-shrit",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
      "price": "699",
      "gender": "M",
      "sold": false
    },
    {
      "name": "road",
      "category": "Typography cotton T-shirt",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg",
      "price": "239",
      "gender": "M",
      "sold": false
    },
    {
      "name": "ONN",
      "category": "Men Polo Collor T-shirt",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18995934/2022/7/6/5a241a63-0047-4546-8640-05b0d78e62d11657120401052MensPeacockBlueSolidPoloCollarT-Shirt6.jpg",
      "price": "599",
      "gender": "M",
      "sold": false
    },
    {
      "name": "Loius Philippe Sport",
      "category": "Men Polo Collor T-shirt",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18762302/2022/6/29/e4865577-1370-4ede-a5b9-325bf48b6c931656501603337-Louis-Philippe-Sport-Men-Brown-Polo-Collar-Slim-Fit-T-shirt--1.jpg",
      "price": "766",
      "gender": "M",
      "sold": false
    },
    {
      "name": "Difference of Opinion",
      "category": "Men Solid Oversized Cotton",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg",
      "price": "558",
      "gender": "M",
      "sold": false
    },
    {
      "name": "Roadster",
      "category": "Pure Cotton T-shirt",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2019/9/10/4f24f563-c764-4f27-9fc5-9ad3dcf167621568108715062-Roadster-Men-White-Solid-Round-Neck-T-shirt-1641568108713591-1.jpg",
      "price": "199",
      "gender": "M",
      "sold": false
    },
    {
      "name": "Huetrap",
      "category": "Typography cotton T-shirt",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
      "price": "472",
      "gender": "M",
      "sold": false
    },
    {
        "name": "Austin wood",
        "category": "Striped Polo ",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg",
        "price": "509",
        "gender": "M",
        "sold": false
      },
      {
        "name": "HRX by Hirthik Roshan",
        "category": "Rapid Dry Traning T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5842076/2018/12/20/353cd269-5498-4aa9-a6ca-c503fcd2f2c61545286560719-HRX-by-Hrithik-Roshan-Men-White-Rapid-Dry-Camo-Training-T-sh-1.jpg",
        "price": "714",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Puma",
        "category": "PERFORMANCE CAT Printed Tshirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13502814/2021/3/4/8ed00fec-a3cb-4cc4-8b31-7ec5cabd941f1614833774399-Puma-Men-Tshirts-8951614833772120-1.jpg",
        "price": "1049",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Puma",
        "category": "Printed Round Neck Pure Cotton T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13502726/2021/3/1/74b34cf3-7cec-42a1-b234-b8bca7c80fe21614600619653-Puma-Men-Tshirts-1511614600618291-1.jpg",
        "price": "659",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Puma",
        "category": "Men Brand Logo Printed Slim Fit T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16848142/2022/4/22/e0edd77e-c968-42ac-bd41-6425cf643bdb1650612095831-Puma-Men-Mustard-Yellow-Brand-Logo-Printed-Slim-Fit-T-shirt--1.jpg",
        "price": "1079",
        "gender": "M",
        "sold": false
      },
      {
        "name": "WRONG",
        "category": "Self Design Welt Pocket T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1894413/2017/6/20/11497943671766-WROGN-Men-Grey-Melange-Self-Design-Round-Neck-T-shirt-881497943671356-1.jpg",
        "price": "685",
        "gender": "M",
        "sold": false
      },
      {
        "name": "WRONG",
        "category": "Men Slim Fit Cotton Pure Cotton T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10188425/2019/9/26/21d2b20a-80fe-498d-95cb-7d77615435901569490347780-WROGN-Men-Black-Slim-Fit-Printed-Round-Neck-T-shirt-66115694-1.jpg",
        "price": "779",
        "gender": "M",
        "sold": false
      },
      {
        "name": "WRONG",
        "category": "Pack of 3 Solid Pure Cotton T-shirts",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12328906/2020/10/27/5f9f8d69-9b04-4f7f-a373-d8d6aed36ff81603799284499AllenSollyMenNavyBlueSolidSweatshirtTshirtsWROGNMenTshirtsWR1.jpg",
        "price": "1079",
        "gender": "M",
        "sold": false
      },
      {
        "name": "WRONG",
        "category": "Polo Collar Slim Fit T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17026150/2022/7/18/dcb56042-3f1f-4692-b438-2dfed1a6a84c1658121042935-WROGN-Men-Tshirts-6271658121042417-1.jpg",
        "price": "899",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Kalt",
        "category": "Men Colourblocked T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19038426/2022/7/9/46da7fdf-c398-49f4-99c3-7e386752f9211657364845546Tshirts1.jpg",
        "price": "467",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Kalt",
        "category": "Men Colourblocked T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14142566/2021/4/22/61fd6be6-c0b0-40d1-8641-310b92ac65c61619073043653KaltMenGreenSolidHoodT-shirt1.jpg",
        "price": "357",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Kalt",
        "category": "Men Colourblocked T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/19/55094c99-1281-4c83-975c-0ffcaada0cf11616158273845-1.jpg",
        "price": "1045",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Kalt",
        "category": "Men Striped Polo Collor T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17116068/2022/2/10/52dee27b-402b-4302-bb80-7a74d87a71de1644477374580KaltMenGreenStripedPoloCollarPocketsT-shirt1.jpg",
        "price": "1045",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Frisker",
        "category": "Printed V-Neck T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/16/2c8b13ef-000e-4630-9412-3d9fc5f9c4f01581804880059-1.jpg",
        "price": "515",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Frisker",
        "category": "Printed V-Neck T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/16/8341a2bd-ddb8-4690-834b-2b0f48ca6c401581804472455-1.jpg",
        "price": "515",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Frisker",
        "category": "Men Printer Cotton T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16855080/2022/1/17/7df6faeb-c1e0-446b-8f9e-132a78f805331642425017278MenPistaSleepyAppleCutSleevelessGymVest1.jpg",
        "price": "492",
        "gender": "M",
        "sold": false
      },
      {
        "name": "Frisker",
        "category": "Solid V-Neck Pure Cotton T-shirt",
        "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/25/388e72d1-2a53-411b-882e-95d60185bb5f1551092571172-1.jpg",
        "price": "481",
        "gender": "M",
        "sold": false
      }
  ]

let data = [];

function Product (n,c,i,p,g,s){
    this.name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.gender=g;
    this.sold = s;
}

function addProduct (e){
    e.preventDefault()
    let form = document.querySelector("form");
    let name= form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value
    let gender = form.gender.value;
    let sold = false;
    let add = new Product (name,category,image,price,gender,sold);

    // let data = [];
    data.push(add);
    console.log(data)
    // localStorage.setItem("Products",JSON.stringify(data));
}

console.log(data);

let append =()=>{
  let cont = document.createElement("div")

  data.forEach((el)=>{
    let img = document.createElement('img')
    img.src = el.image;

    let title = document.createElement('h3')
    title.innerText = el.name;

    let price = document.createElement('p')
    price.innerText = el.price;

    let btn = document.createElement('button')
    btn.id = "addToCart";
    btn.addEventListener('click',function(){
      addToCart(el)
    })
  })
}

let addToCart=(el)=>{
  
}
// PRODUCT
const productBox = document.querySelector(".box");
const insertCart = document.querySelector(".insertCart");

const product = [
  {
    img: "shoes1.png",
    barand: "NIKE",
    deatail:
      "Nike Air is designed to provide support throughout the life of the shoe.",
    currency: "₹",
    selected: 1,
    price: "900",
    button: "Add To Cart",
  },
  {
    img: "shoes2.png",
    barand: "VKC",
    deatail:
      "VKC Pride - Step into Style & Quality! Trendy, Durable, Comfortable Footwear",
    currency: "₹",
    selected: 1,
    price: "900",
    button: "Add To Cart",
  },
  {
    img: "shoes3.png",
    barand: "BATA",
    deatail:
      "The Bata Corporation is a multinational footwear, fashion accessories manufacturer ",
    currency: "₹",
    selected: 1,
    price: "500",
    button: "Add To Cart",
  },
  {
    img: "shoes4.png",
    barand: "AERO",
    deatail: "It is the world's largest supplier of athletic shoes ",
    currency: "₹",
    selected: 1,
    price: "700",
    button: "Add To Cart",
  },
  {
    img: "shoes5.png",
    barand: "BOOT",
    deatail:
      "Boots  will give the rigidity to help prevent these ankle injuries. ",
    currency: "₹",
    selected: 1,
    price: "1000",
    button: "Add To Cart",
  },
  {
    img: "shoes6.png",
    barand: "PRIDE",
    deatail:
      "The Running Sole of the shoe is added for you to help run and walk more comfortably.",
    currency: "₹",
    selected: 1,
    price: "800",
    button: "Add To Cart",
  },
  {
    img: "shoes7.png",
    barand: "PARAGON",
    deatail:
      " Paragon assuring durability, availability and quality, the brand has created a wide",
    currency: "₹",
    selected: 1,
    price: "800",
    button: "Add To Cart",
  },
  {
    img: "shoes8.png",
    barand: "CLASSIC",
    deatail: "Lorem ipsum dolor sit amet shoes and sliper sit amet consectetur",
    currency: "₹",
    selected: 1,
    price: "900",
    button: "Add To Cart",
  },
];

function productDetails() {
  try {
    productBox.innerHTML = product.map((element, ind) => {
      return returnValue(element, ind);
    });
  } catch (error) {
    console.log(error);
  }
}
productDetails();

function returnValue(product, ind) {
  return ` <div class="card">
    <div class="small_card">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-share"></i>
    </div>
    <div class="image">
        <a href="#About"> <img src="image/${product.img}" ></a>
       
    </div>
    <div class="products_text">
        <h2>${product.barand}</h2>
        <P>${product.deatail} </P>
        <h3>${product.currency}${product.price}</h3>
        <div class="product_star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
         <a  class="btn" onclick = addTocart(product[${ind}])> ${product.button}</a> 
    </div>
</div>`;
}

//  buy now - payment
const paymentbg = document.querySelector(".paymentbg");
const closeBtn = document.querySelector(".closebtn");
const cartContainer = document.querySelector(".cart");
const cartIcon = document.querySelector(".fa-cart-shopping");
const form = document.getElementById("myForm");
const fill = document.querySelector(".fill");
const fillmsg = document.querySelector(".fill_msg");

function cartBox() {
  cartContainer.style.display = "flex";
}

function cartClose() {
  cartContainer.style.display = "none";
}

function buyNow() {
  paymentbg.style.display = "flex";
  cartContainer.style.display = "none";
}
//  payment
function pay() {
  if (form.checkValidity()) {
    fill.style.display = "flex";
    fill.style.background = "green";
    fillmsg.textContent = "Your Order Has Been Placed";
  } else {
    fillmsg.textContent = "Please Enter Required Fields";
    fill.style.display = "flex";
  }
}
function closepay() {
  paymentbg.style.display = "none";
}

// ----ADD CART-----
// firstclick [1]->array of obj
// secondclick [1,2]->array of obj
const cartValue = [];

function addTocart(clickedProduct, ind) {
  cartValue.push(clickedProduct);
  insertCart.innerHTML = "";
  cartValue.forEach((element, ind) => {
    insertCart.innerHTML += `<div class="cartBox">
            <i  onclick = "deletefromcart(${ind})" class="fa-solid fa-trash"></i>
            <img src="image/${element.img}" width="90px">
            <p>${element.barand}</p>
            <p>${element.currency}${element.price}</p>
            <div class="qty">
                <label >Qty :</label>
                <input type="number" name="qty" min=1   placeholder="0" class="quantity" onChange="changeQty(${ind})">
            </div>
            <a href="#Home"> <button class="cartBtn" onclick="buyNow()"> BUY </button> </a>
            
        </div>`;
  });
  cartContainer.style.display = "flex";
}

// delete cart Items
function deletefromcart(i) {
  cartValue.splice(i, 1);
  insertCart.innerHTML = "";
  cartValue.forEach((element, ind) => {
    insertCart.innerHTML += `<div class="cartBox">
        <i  onclick = deletefromcart(${ind}) class="fa-solid fa-trash"></i>
        <img src="image/${element.img}" width="90px">
        <p>${element.barand}</p>
        <p class="price">${element.currency}${element.price}</p>
        <div class="qty">
            <label >Qty :</label>
            <input type="number" name="qty" min=1 >
        </div>
        <button class="cartBtn"  onclick="buyNow()"> BUY </button>
        
    </div>`;
  });
}

//   ABOUT
function imageChange(src) {
  const bigImage = document.getElementById("big_img");
  bigImage.src = src;
}

//  Reviews ----------------

const reviewList = [
  {
    img: "man_dp1.jpg",
    name: "Hibath",
    comment:
      " One Of The Best Product to  wear and its compfort , smooth , suitable for playing  ",
  },
  {
    img: "man_dp3.jpg",
    name: "Naseem",
    comment:
      " One Of The Best Product to  wear and its compfort , smooth , suitable for playing  ",
  },
  {
    img: "man_dp2.jpg",
    name: "Yusuf",
    comment:
      " One Of The Best Product to  wear and its compfort , smooth , suitable for playing  ",
  },
  {
    img: "man_dp1.jpg",
    name: "Riyas",
    comment:
      " One Of The Best Product to  wear and its compfort , smooth , suitable for playing  ",
  },
  {
    img: "man_dp1.jpg",
    name: "Faisal",
    comment:
      " One Of The Best Product to  wear and its compfort , smooth , suitable for playing  ",
  },
  {
    img: "man_dp1.jpg",
    name: "Hilman",
    comment:
      " One Of The Best Product to  wear and its compfort , smooth , suitable for playing  ",
  },
];

function reviewCard() {
  const reviewBox = document.querySelector(".review_box");
  reviewBox.innerHTML = reviewList.map((element) => {
    return reviewValues(element);
  });
}

function reviewValues(element) {
  return `<div class="review_card">
                <div class="card_top">
                    <div class="profile">
                            <div class="profile_image">
                                <img src="image/${element.img}" width="75px" height="78px">
                            </div>
                        <div class="name">
                            <strong>${element.name}</strong>

                            <div class="like">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <p>${element.comment}  </p>
                </div>
</div>`;
}
reviewCard();

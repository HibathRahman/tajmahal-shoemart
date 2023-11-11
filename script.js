const box = document.getElementsByClassName('box');
const cards = function card(){
    return 

        `<div class="card">
        <div class="small_card">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-share"></i>
        </div>
        <div class="image">
            <img src="image/shoes8.png" >
        </div>
        <div class="products_text">
            <h2>NIKE</h2>
            <P>Lorem ipsum dolor sit amet shoes and sliper sit amet consectetur  </P>
            <h3>$450.0</h3>
            <div class="product_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <a href="#" class="btn">Add To Cart</a>
        </div>
        </div>`
     }
     cards()
     box.innerHTML = cards()
     console.log(cards);


      function imageChange(src){
        const bigImage = document.getElementById('big_img');
        bigImage.src= src
      }
     
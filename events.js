const events =[
    {
        id:0,
        evntname:'Adventure retreat in Amazon Forest' ,
        hostname:'Amazon',
        date: '25/08/2023',
        time: '10:30',
        venue:'Amazon Forest',
        imgsrc:'images/amazon.jpg',
    },{
        id:1,
        evntname:'Fitness Workshop' ,
        hostname:'Jillian Michaels',
        date: '25/08/2023',
        time: '12:30',
        venue:'Milpark',
        imgsrc:'images/jillian.webp',
    },{
        id:2,
        evntname:'Music Lounge' ,
        hostname:'Musiq Soulchild',
        date: '25/08/2023',
        time: '13:30',
        venue:'Hyde Park',
        imgsrc:'images/musiq.jpg',
    },{
        id:3,
        evntname:'The Lion King Premiere' ,
        hostname:'Disney',
        date: '25/08/2023',
        time: '18:30',
        venue:'Disney Studios',
        imgsrc:'images/johnkani.jpg',
    },{
        id:4,
        evntname:'Dance Concert' ,
        hostname:'Carnival Presents',
        date: '26/08/2023',
        time: '19:30',
        venue:'Carvival City',
        imgsrc:'images/dance.jpg',
    },{
        id:5,
        evntname:'Bridgerton Premier Launch' ,
        hostname:'Shondaland',
        date: '27/08/2023',
        time: '10:30',
        venue:'NetFlix Studios',
        imgsrc:'images/amazon.jpg',
    },
 ];
 const productsElements = document.querySelector(".shopping-products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
function renderProducts() {
    products.forEach((product) => {
        productsElements.innerHTML += `
        <style>
        #addtocart.hidden{
            display:none;
        }
        </style>
          <div class="box">
            <img class="img-box" src="${product.image}" alt="${product.title}">
            <h3 class="product-title">${product.title}</h3>
            <div class="bottom ">
                <h5 class="product-price">R <span class="price">${product.price}</span></h5>
                <button class="button button-small px-5 button-border border-color m-0 color 
                h-bg-color h-text-light mt-2" id="addtocart" onclick="addtocart(${product.id})">Add To Cart</button>
                <!-- <div class="product-quantity">
                    <button id="decrease-quantity" class="decrease-btn"><i class="fas fa-minus"></i></button>
                    <input id="quantity" type="number" min="0" class="quantity-value form-control text-center" value="0">
                    <button id="increase-quantity" class="increase-btn"><i class="fas fa-plus"></i></button>
                </div> -->
            </div>
        </div>
      
          `;
    });
}
renderProducts();
    
    let cart =JSON.parse(localStorage.getItem("CART")) || [];
    updateCart();

    function addtocart(id){

    //check if product exists in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }

    updateCart();
    }
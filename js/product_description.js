let productDetail;
var quantity =0;
function fetchProductDescription() {
    var jsonData;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('product_id');
    fetch('https://dummyjson.com/products/' + product)
        .then(res => res.json())
        .then(data => { jsonData = data; })
        .then(() => { showProductDescription(jsonData) })
        .then(() => { addcart() })

}

fetchProductDescription()

function showProductDescription(product) {
    productDetail = product;
    const element = document.getElementById("spinner");
    if (element) {
        element.remove();
    }
    let newelement = document.getElementById("productDescriptionImage");

    newelement.innerHTML +=
        `
           <div class="" style="padding-top : 3%;" >
           <img class="card-img-top" src="${product.images[0]}" alt="Card image cap" style=" "></img>
           <div style="padding-top : 3%;">
           <button class="btn btn-primary buy_product" style ="width : 230px; height : 60px; font-size : 25px;" >Buy Now</button>
           <a href="cartPage.html" class=" btn btn-success add_toCart" style ="width : 230px; height : 60px; font-size : 25px;padding-left :2%;">Add to cart</a>
            </div>
           </div>
           `
    let newproductelement = document.getElementById("productDescription");

    newproductelement.innerHTML +=
        `
               <div class="card-body col-6"> 
                          <h5 class="product_id d-none">${product.id}</h5>
                          <h5 class="card-title">${product.title}</h5>
                          <p class="card-text">${product.description}</p>
                          <p class="card-text">Price -$${product.price}</p>
                          <p class="card-text">Discount Price -$${product.price - (product.price * product.discountPercentage / 100)}</p>
                          <p class="card-text">Rating -${product.rating}</p>
                          <p class="card-text">${product.stock}</p>
                          <p class="card-text">${product.brand}</p>
                          <p class="card-text">${product.category}</p>
                         
                      </div>
                
                  `
};


function addcart() {
    var add_toCart = document.querySelector('.add_toCart');
    var product = document.querySelector('.product_id').innerHTML;
    var cart = [];

   add_toCart.onclick = function () {
        var temp = [];
        if (localStorage.getItem('cartItems')) {
            var previousCartItems = localStorage.getItem("cartItems");
            temp = JSON.parse(previousCartItems)
            
            temp.push(productDetail);
            localStorage.setItem("cartItems", (JSON.stringify(temp)));


            // if(temp.find(key => key.id == productDetail.id)){
               
            //     // temp.Object.assign('quantity',qty+1)
            // } else {
            //     temp.push(productDetail);
            //     localStorage.setItem("cartItems", (JSON.stringify(temp)));
            // }

        } else {
            productDetail.quantity = 1 
            cart.push(productDetail)
            localStorage.setItem("cartItems", (JSON.stringify(cart)))
        }

    }
}








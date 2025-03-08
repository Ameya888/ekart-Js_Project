function renderitems(productItems) {

    productItems.products.forEach(function (product) {
        let newelement = document.getElementById("newproduct");
        const element = document.getElementById("spinner");
        if (element) {
            element.remove();
        }

        newelement.innerHTML +=
            `
        <div class="card col-lg-4 col-md-4 col-sm-6 col-12" style="" id="data-output">
       <img class="card-img-top" src="${product.images[0]}" alt="Card image cap" style="200px;"></img>
           <div class="card-body"> 
               <h5 class="card-title">${product.title}</h5>
               <p class="card-text">${product.description}</p>
               <p class="card-text">Price -$${product.price}</p>
               <p class="card-text">Discount Price -$${product.price - (product.price * product.discountPercentage / 100)}</p>
               <p class="card-text">Rating -${product.rating}</p>
               <p class="card-text">${product.stock}</p>
               <p class="card-text">${product.brand}</p>
               <p class="card-text">${product.category}</p>
              <a href="product_description.html?product_id=${product.id}" class="btn btn-primary">Buy Now</a>
              
           </div>
       </div>
       `


    });
}
var jsonData;
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => { jsonData = data; })
    .then(() => { renderitems(jsonData) });





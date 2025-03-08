window.onload = function () {
    const element = document.getElementById("spinner");
    if (element) {
        element.remove();
    }
    var cartProduct = JSON.parse(localStorage.getItem('cartItems'))

    cartProduct.forEach(function (v, i) {
        var newelement = document.getElementById("cartDescription");
        console.log(newelement)
        newelement.innerHTML +=
            `
        <h2 style="text-align: center;font-family: Lato,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
                    font-weight: 500;
                    line-height: 1.2;">Your shopping bag(1 item)</h2>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-4">
                                            <img src="${v.images[0]}" alt="" width="150px" height="200px">
                                        </div>
                                        <div class="col-8">
                                      
                                        <h5 class="card-title">${v.title}</h5>
                                        <p class="card-text">${v.description}</p>
                                        <p class="card-text">Price -$${v.price}</p>
                                        <p class="card-text">Discount Price -$${v.price - (v.price * v.discountPercentage / 100)}</p>
                                       </div>
                                    </div>
                                </div>
                                <hr>
                                   <h5>continue shopping</h5>
                            </div>
                         </div>
                        </div>
                        `
    })
   
    // let newproductelement = document.getElementById("cartSummary");

    // newproductelement.innerHTML +=
    //     `
    //                     <h2>summary</h2>  
    //                     <h4 style="padding-top: 20%;">Subtotal</h4> 
    //                     <h4>Delivery</h4> 
    //                     <h3 style="padding-top: 12%;padding-bottom: 10%;">Total</h3>
    //                     <button class="btn-block warning" style="background-color: blanchedalmond;">CHECKOUT SECUERLY</button>
    //                     `
}





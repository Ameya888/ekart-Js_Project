var products = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
]
let element = document.getElementById("products");
if (element) {
    products.forEach(function (name) {
        let newElement = document.createElement('a');
        newElement.innerHTML = name;
        newElement.setAttribute('href', '/html/products.html');
        newElement.setAttribute('class', 'menu-items');
        element.append(newElement);
    })
}

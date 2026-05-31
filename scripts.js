function showCategory(category){

    let sections =
    document.querySelectorAll(".products");

    sections.forEach(section=>{
        section.style.display="none";
    });

    document.getElementById(category)
    .style.display="grid";
}

showCategory("rings");

function addToCart(name, price, image){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name:name,
        price:parseFloat(price),
        image:image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart");
}
function updateCartCount(){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let countElement =
document.getElementById("cart-count");

if(countElement){

countElement.innerHTML = cart.length;

}

}

updateCartCount();

function showPage(pageId){

    let pages =
    document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.style.display="none";
    });

    document.getElementById(pageId)
    .style.display="block";
}

/* Open Home Page First */

showPage("home");

function searchProducts(){

    let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

    // Show all category sections first
    document.getElementById("rings").style.display = "grid";
    document.getElementById("necklaces").style.display = "grid";
    document.getElementById("earrings").style.display = "grid";
    document.getElementById("bracelets").style.display = "grid";

    let products =
    document.querySelectorAll(".product");

    let found = false;

    products.forEach(product=>{

        let productName =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        let category =
        product.dataset.category
        .toLowerCase();

        if(
            productName.includes(input) ||
            category.includes(input)
        ){

            product.style.display = "block";
            found = true;

        }else{

            product.style.display = "none";

        }

    });

}
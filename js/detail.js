import { login_url } from "./api.js";
import displayMessage from "../loginMessage/displayMessage.js";

const queryString = document.location.search;

const id= new URLSearchParams(queryString).get("id");





const productUrl = login_url + "products/" + id;

console.log(productUrl);

(async function (){
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        document.title = details.name;

        const container = document.querySelector(".detail-container");

        container.innerHTML = `<div article class="product">
        <div class= "img-container">
        <img src="${product.image_url}"></img>div class= "img-container">
        
        <button class="cart-btn">
<i class="fas fa-shopping-cart" data-id="${product.id}" data-name="${product.title}"></i>
Add to Cart
</button>
       
        <h3>Title: ${product.title}</h3>

        <h1> Description: ${product.description}</h1>

        <h4> Price: ${product.price} kr</h4>
        </div>
        </div>`;

        console.log(details);
    } catch(error) {
        displayMessage("error", error, ".detail-container");
    }

})();
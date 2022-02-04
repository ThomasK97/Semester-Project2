import { getFavs } from "./favFunction.js";

const favourites = getFavs();

const productContainer = document.querySelector(".product");

if(favourites.length === 0) {
   productContainer.innerHTML = "Ops, theres no products here"
}

favourites.forEach((favourite) => {
    productContainer.innerHTML += `<div class= "product">
                                     <h4> Title: ${favourite.name}</h4>
                                     <i class="fa fa-heart"></i>
                                     </div>`
});

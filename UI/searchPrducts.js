import { renderProducts } from "./renderProducts.js";

export function searchProduts(Products) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredproducts = Products.filter(function (products) {
            if (products.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        
            
        });

        renderProducts(filteredproducts);
    };

}
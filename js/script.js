import { renderProducts } from "./products.js";
import { searchProduts } from "../UI/searchPrducts.js";
import { url } from "./api.js";

async function getProducts() {
    try {
        const response = await fetch(url);
        const allProducts= await response.json();

        console.log(allProducts);

        renderProducts(allProducts);
        searchProduts(allProducts);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product");
    }
}

getProducts();











import { renderProducts } from "../UI/renderProducts.js";
import { searchProducts } from "../UI/searchPrducts.js";
import { url } from "./api.js";
import {url_banner} from "./api.js";
import {displayBanner} from "./banner.js";
import menu  from"./menu.js";



menu();


async function getProducts() {
    try{
        const response = await fetch(url);
        const products = await response.json();

        console.log(products);

        renderProducts(products);
        searchProducts(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();




/*async function getBanner () {
    try {
        
        const response_banner = await fetch(url_banner);
        const banner = await response_banner.json();
        console.log(banner);

        displayBanner(banner);

        
    }

    catch(error){
        console.log(error);
    }
};

getBanner();*/







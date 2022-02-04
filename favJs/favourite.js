import { getFavs } from "./favFunction.js";

const favourites = getFavs();

const articleContainer = document.querySelector(".articles-container");

if(favourites.length === 0) {
    articleContainer.innerHTML = "Ops, theres no articles here"
}

favourites.forEach((favourite) => {
    articleContainer.innerHTML += `<div class= "article">
                                     <h4> Title: ${favourite.name}</h4>
                                     <i class="fa fa-heart"></i>
                                     </div>`
});


export function renderProducts(ProductsRender){
    const productContainer = document.querySelector(".product");
    productContainer.innerHTML ="";
    
    productsRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product">
                                            <h4>Title: ${product.title}</h4>
            
                                            <p>Sumary: ${product.summary} </p>

                                           

                                            <br>
                                            <br>
                                            <i class="far fa-heart" data-id="${product.id}" data-name="${product.title}"></i>
                                        </div>`
        
    });
   
const heartButton = document.querySelectorAll(".product i");

console.log(heartButton);

heartButton.forEach((button) => {
    button.addEventListener("click", handleClick);
});
}

function handleClick(){
    
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;
   

    

    const currentFavs = getFavs();

    const articleExist = currentFavs.find(function(fav){
        return fav.id === id;
    });

    if (articleExist === undefined) {


    const article = { id: id, name: name};

    currentFavs.push(article);


    saveFavs(currentFavs);

    }
    else {
        const newFavs = currentFavs.filter(fav => fav.id !== id);

        saveFavs(newFavs);
    }


 
}




function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}

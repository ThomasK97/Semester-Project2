
export function renderProducts(productsRender){
    const productContainer = document.querySelector(".product");
    productContainer.innerHTML ="";
    
    productsRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product">
                                            <h4>Title: ${product.title}</h4>

                                            <img> src${product.image}</img>
            
                                            <p>Sumary: ${product.price} </p>

                                           

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

    const productExist = currentFavs.find(function(fav){
        return fav.id === id;
    });

    if (productExist === undefined) {


    const product = { id: id, name: name};

    currentFavs.push(product);


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

export function renderProducts(productsRender){
    const productsContainer = document.querySelector(".products-center");
    productsContainer.innerHTML ="";
    
    productsRender.forEach(function (product) {
        productsContainer.innerHTML += `<div class="article">
                                            <h3>Title: ${product.title}</h3>

                                            <img src="${product.img}"></img>

                                            <h4> Price: ${product.price}</h4>

                                        
            
                                         

                                            <span> Description: ${product.description} </span>

                                            <br>
                                            <br>
                                            
                                        </div>`
        
    });
};


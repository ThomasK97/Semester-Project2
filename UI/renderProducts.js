import { url } from "../js/api.js";
import { getExistingItems } from "../utils/getExistingItems.js";

export function renderProducts(productsRender){
    const productsContainer = document.querySelector(".products-center");
    productsContainer.innerHTML ="";

    

    
    productsRender.forEach(function (product) {
        productsContainer.innerHTML += `
        <div article class="product">
                                            <div class= "img-container">
                                            <a class="product" href="edit.html?id=${product.id}">
                                            <img src="${product.image_url}"></img>
                                            <button class="cart-btn">
                       <i class="fas fa-shopping-cart" data-id="${product.id}" data-name="${product.title}"></i>
                       Add to Cart
                   </button>
                   <button class="view-btn">
                        <a class="product" href="productDetail.html?id=${product.id}"</a>
                       View More
                   </button>
                   <a class="product" href="edit.html?id=${product.id}">
                                            <h3>${product.title}</h3>

                                            <h4>${product.price} kr</h4>

                                            <br>
                                            <br>

                                        
            
                                            
                                         

                                

                                            <br>
                                            <br>
                                            </div>
          
                                            </div>`

    

        
    });

    const addToCartButton = document.querySelector(".product i");


    addToCartButton.forEach((button) => {
        button.addEventListener("click", handleClick);
        
    });

    
    }


    
       
       

    

   

    
    
    


















  
    
      
    
       




    

    










    









    
    
    



    
  
    
        
       
    
        
    

        
    
    
     
    
    
    
    
    
    








   






  









    
    
   
   

    


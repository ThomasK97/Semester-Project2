export function renderProducts(productsRender){
    const productsContainer = document.querySelector(".products-center");
    productsContainer.innerHTML ="";

    

    
    productsRender.forEach(function (product) {
        productsContainer.innerHTML += `<div article class="product">
                                            <div class= "img-container">
                                            <img src="${product.image_url}"></img>
                                            <button class="cart-btn">
                       <i class="fas fa-shopping-cart" data-id="${product.id}" data-name="${product.title}"></i>
                       Add to Cart
                   </button>
                                           
                                            <h3>Title: ${product.title}</h3>

                                            <h4> Price: ${product.price} kr</h4>

                                        
            
                                            
                                         

                                

                                            <br>
                                            <br>
                                            </div>
          
                                            </div>`

    

        
    });
    

    
       
       

    }

    
     


















  
    
      
    
       




    

    










    









    
    
    



    
  
    
        
       
    
        
    

        
    
    
     
    
    
    
    
    
    








   






  









    
    
   
   

    


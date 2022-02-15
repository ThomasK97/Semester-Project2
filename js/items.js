import { getExistingItems } from "../utils/getExistingItems.js";

const items = getExistingItems();

const itemContainer = document.querySelector(".cart-content");

if (items.length === 0) {
    itemContainer.innerHTML = "No products added to cart yet";
}

items.forEach((product) => {
    itemContainer.innerHTML += `<div class="cart">
    <div class="cart-container">
           
    <h2>Your Shoping Cart</h2>
    
    <div class="cart-item">
        
        <div>
            <h4>${product.title}</h4>
            <h5>${product.price}</h5>
            <span class="remove-item">Remove</span>
        </div>
        
    </div>
    

    <div class="cart-footer">
     <h3>Total: Kr <span class="cart-total">0</span></h3>
     <button class="clear-cart">Clear Cart</button>
 </div>
                                    
                                </div>`;
});
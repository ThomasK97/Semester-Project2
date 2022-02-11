import { getUsername } from "../utils/storage.js";






export default function menu() {
    const { pathname } = document.location;

    const container = document.querySelector(".header");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;
    let productsLink= `<a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>`;
   

    if (username) {
        authLink = `<span>Hi ${username}</span>`;
    }

    console.log(username);
    
    container.innerHTML = `<div class="header">
   
    <div class="container">
    <div class="row align-items-center justify-content-between">
        <div class="logo">
           <a href="/">Home ︱ Decor</a>
        </div>
        <button type="button" class="nav-toggler">
                   <span></span>
                </button>
       
        
        <nav class="nav">
           <ul>
           
              <li><a href="/" class="${pathname === "/" ? "active" : ""}">Home</a></li>
              <li>${productsLink}</li>
              <li>${authLink}</li>
              <li><a href="cart.html"><i class="fa fa-shopping-cart" aria-hidden="true"></a></i></li>
              

              
              
              
           </ul>
        </nav>
    </div>
</div>
</div>`;




}

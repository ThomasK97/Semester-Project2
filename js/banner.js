import { url_banner } from "./api.js";

export function displayBanner (banner) {
    const hero_banner = document.querySelector(".banner");
    
    hero_banner.innerHTML += `<div class="banner">
   
    
        <div class="container">
        
            <h1 class="main-title">
                <span>Welcome</span> Home
            </h1>
            <p>Decor for every Home</p>
            
        </div>
    </div>

    

    


    `;
}
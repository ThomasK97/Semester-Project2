const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) {window.location = "products.html";}

const url = `http://localhost:1337/products${id}`;
fetch(url)
.then(response => response.json())
.then(data => {
    displayPost(data);
})

.catch((error) =>{
    console.error('Error:', error);
});

const output = document.querySelector(".detail-containe");
function displayPost (data){
    console.log(data);
    const title = data.title.rendered;
    const excerpt = data.excerpt.rendered;
    const link = data.link;
    let content = `
    <img src="${product.image_url}"></img>
     <button class="cart-btn">
    <i class="fas fa-shopping-cart" data-id="${product.id}" data-name="${product.title}"></i>
     Add to Cart
    </button>
    
    <h4>${title}</h4>
    <p>${data.content.rendered}</p>
    <a href="products.html"> &lt; Back</a>
     
    `
   

    output.innerHTML = 
    content;document.title = title;


} 
import displayMessage from "../loginMessage/displayMessage.js";
import menu from "./menu.js";
import { getToken } from "../utils/storage.js";
import { login_url } from "./api.js";

const token = getToken(); 

if(!token) {
    location.href ="/";
}

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    console.log("priceValue", priceValue);

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0){
        return displayMessage("warning", "Please enter correct values", ".message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue);



}

async function addProduct(title, price, description){
    const urlProd = login_url + "products";

    const data = JSON.stringify({ title: title, price: price, description: description })

   

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(urlProd, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Added Product", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
            
        }

        console.log(json);

    }
    catch(error){
        console.log(error)

    }
}
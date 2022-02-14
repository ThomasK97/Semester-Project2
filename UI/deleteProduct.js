import { login_url } from "../js/api.js";
import { getToken } from "../utils/storage.js";

export default function deleteBtn(id) {

    const container = document.querySelector(".delete-container");

    container .innerHTML = `<button type="button" class="delete">Delete</button>`

    const button = document.querySelector("button.delete");

    button.onclick = async function(){
        console.log(id);

        const url = login_url + "products/" + id;

        const token = getToken(); 

        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },

        };

        try {
            const response = await fetch(url, options);

            const json = await response.json();

            location.href = "/products.html";

            console.log(json);

        }
        catch(error) {
            console.log(error);

        }



    };

}
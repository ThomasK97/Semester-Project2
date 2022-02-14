 import { clearStorage } from "../utils/storage.js";

 export default function logOut(){

    const button = document.querySelector("#logout");

    if(button){
        button.onclick = function(){
            const doLogOut = confirm ("Are You sure");

            if(doLogOut){
                clearStorage();
                location.href = "/";
            }
        }
    }

 }
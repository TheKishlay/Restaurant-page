import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";
import "./style.css"

loadHome();

const homebtn = document.querySelector("#homebtn")
const contactbtn = document.querySelector("#contactbtn")
const menubtn = document.querySelector("#menubtn")
homebtn.addEventListener("click", loadHome);
menubtn.addEventListener("click", loadMenu);
contactbtn.addEventListener("click", loadContact);


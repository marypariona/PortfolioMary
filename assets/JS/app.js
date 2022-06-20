import hamburger_menu from "./components/hamburger_menu.js";
import header_background from "./components/header_background.js";
//import nse from "./components/home.js";
document.addEventListener('DOMContentLoaded',(e)=>{
    hamburger_menu('#hamburger','menu');
    header_background('header');
    //nse('.home');
});
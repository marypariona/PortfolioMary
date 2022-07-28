import hamburger_menu from "./components/hamburger_menu.js";
import header_background from "./components/header_background.js";
import noseee from "./components/home.js";
import nse from "./components/home.js";
import openProjectDetails from "./components/details_project.js";
document.addEventListener('DOMContentLoaded',(e)=>{
    hamburger_menu('#hamburger','menu');
    header_background('header');
    //nse('.home');
    noseee('.progress-bar','.skills');
    openProjectDetails(".project-image img");
});
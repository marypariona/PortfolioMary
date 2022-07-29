import hamburger_menu from "./components/hamburger_menu.js";
import header_background from "./components/header_background.js";
import animateSkills from "./components/home.js";
import openProjectDetails from "./components/details_project.js";
import addAriaCuerrent from "./components/add_aria_current.js";
document.addEventListener('DOMContentLoaded',(e)=>{
    hamburger_menu('#hamburger','menu');
    header_background('header');
    animateSkills('.progress-bar','.skills');
    openProjectDetails(".project-image img");
    addAriaCuerrent(".menu-link");
});
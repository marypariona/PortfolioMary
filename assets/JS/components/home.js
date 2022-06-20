export default function nse(hola){
    var $hero = document.querySelector(hola),
    h = window.innerHeight; 
    console.log($hero);
    $hero.style.height=h+"px";
    
}
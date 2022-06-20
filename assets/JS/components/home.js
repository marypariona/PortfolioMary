/*export default function nse(hola){
    var $hero = document.querySelector(hola),
    h = window.innerHeight; 
    console.log($hero);
    $hero.style.height=h+"px";
    
}*/
 /*
    const $s=document.querySelectorAll(skills);
    $s.forEach(el => {
        const $data=el.getAttribute('data-percent');
        el.textContent=$data;
        const ndn=$data+"% !important";
        el.setAttribute('style','width:'+ndn);
    })*/
export default function  noseee(skills,section){
    window.addEventListener('scroll',(e)=>{
        const $section=document.querySelector(section),
        $position=$section.getBoundingClientRect().top-(innerHeight/2);
        if(screenY>$position){
            const $skills=document.querySelectorAll(skills);
            $skills.forEach(el => {
                el.classList.add('animar');
            });
        }
    })
}

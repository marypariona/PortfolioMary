export default function addAriaCuerrent(menuLink){
    document.addEventListener('click',(e)=>{
        if(e.target.matches(menuLink)){
            const $menuLinks=document.querySelectorAll(menuLink);
            $menuLinks.forEach(el => {
                el.removeAttribute('aria-current');
            });
            e.target.setAttribute('aria-current','page');
            document.getElementById('menu').classList.remove('active');
            document.querySelector('#hamburger').classList.remove('active');
        }
    })
}
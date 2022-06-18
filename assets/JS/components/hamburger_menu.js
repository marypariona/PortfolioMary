
export default function hamburger_menu(btnhamburger,menu){
    document.addEventListener('click',(e)=>{
        if(e.target.matches(btnhamburger) || e.target.matches(`${btnhamburger} *`)){
           document.getElementById(menu).classList.toggle('active');
           document.querySelector(btnhamburger).classList.toggle('active');
        }
    })
}
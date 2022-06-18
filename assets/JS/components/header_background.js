export default function header_background(header){
    window.addEventListener('scroll',(e)=>{
        const $numScroll=window.scrollY;
        const $header= document.getElementById(header);
        if($numScroll>=100){
           $header.classList.add('activeBackground');
        }
        else{
            $header.classList.remove('activeBackground');
        }
    })
}

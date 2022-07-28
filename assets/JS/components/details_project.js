export default function openProjectDetails(openDetails){
    const $openDetail=document.querySelectorAll(openDetails);
    $openDetail.forEach(el => {
        el.addEventListener('click',(e)=>{
            $openDetail.forEach(element => {
                element.classList.remove('active');
            });
            el.classList.add('active');
        })
        el.addEventListener('mouseover',(e)=>{
            $openDetail.forEach(ell=>{
                ell.classList.remove('active');
            })
        })
    });
}
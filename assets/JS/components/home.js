export default function  animateSkills(skills,section){
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

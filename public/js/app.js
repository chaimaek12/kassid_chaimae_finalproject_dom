// carouseel by me 
let btn = document.querySelectorAll('.arrow');
let container = document.querySelectorAll('.container');

let index = 0;

btn.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if(arrow.id == 'left'){
            index--
            
        }else{
            index ++
        }
       container.forEach(carousel => {
             if(arrow.getAttribute('data-bs-target') ==  carousel.id){
                let slides = carousel.querySelectorAll('.slides')
                if(arrow.id == 'right' && index > slides.length - 1){
                    index = 0
                }else if(index < 0 && arrow.id == 'left'){
                    index = slides.length - 1
                }
                slides.forEach(slide => {
                    slide.style.transform = `translateX(calc(-100% * ${index}))`

                }) 
                
             }
       });
    })
})

//indicators

let indicators = document.querySelectorAll('.dots')
indicators.forEach(dot => {
    //to what carousel this dot belongs to ????
    dot.addEventListener('click', () => {
        container.forEach(carousel => {
        if(carousel.id == dot.getAttribute('data-bs-target')){
            let slideTogo = dot.id
            indicators.forEach(indicator => {
                indicator.classList.remove('dotColor')
            })

            dot.classList.add('dotColor')
            index = slideTogo
            let slides = carousel.querySelectorAll('.slides')
            slides.forEach(slide => {
                slide.style.transform = `translateX(calc(-100% * ${slideTogo}))`
            })
        }
    })
    })
    
})

container.forEach(carousel  => {
    if(carousel.hasAttribute('autoslide')){
        let time = carousel.getAttribute('autoslide')
        setInterval(() => {
            let nextBtn =  carousel.querySelector('.right')
            nextBtn.click() 
        }, time);
   }
})

// menuu

let mymenu=document.querySelector(".menu")
let dakchylifmenu=mymenu.querySelectorAll("div")
 let mymenutitre=document.querySelector(".menutitre")
 let ontestproudly=document.querySelector(".ontestproudly")

ontestproudly.addEventListener("click",()=>{
    mymenu.style.display="none"
})
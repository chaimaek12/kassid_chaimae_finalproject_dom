

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
 let mystarters=document.querySelector(".mystarters")
let myh1span=document.querySelector(".myh1demenu")
let mybreaky=document.querySelector(".mybreaky")
let mylunch=document.querySelector(".mylunch")
let mydinner=document.querySelector(".mydinner")


mystarters.addEventListener("click",()=>{
    mymenu.style.display="none"
    myh1span.style.display="none"


})

mybreaky.addEventListener("click",()=>{
   myh1span.textContent= "Breakfast"
   myh1span.style.color="red"
})
mylunch.addEventListener("click",()=>{
   myh1span.textContent= "lunch"
   myh1span.style.color="red"
})
mydinner.addEventListener("click",()=>{
   myh1span.textContent= "dinner"
   myh1span.style.color="red"
})
//carousell de gellerie 

let mypicsgallery = document.querySelector(".picsgallery")
let indicator = document.querySelectorAll('.no9ta')

indicator.forEach((no9ta, index) => {
  no9ta.addEventListener('click', () => {
    mypicsgallery.style.transform = `translateX(-${index * 600}px)`
  })
})

//section chefs 
let mytswirat = document.querySelectorAll(".tswirat");

mytswirat.forEach(element => {

  let myl3aybadyalhover = element.querySelector(".l3aybadyalhover");

  element.addEventListener("mouseenter", () => {
    myl3aybadyalhover.style.display = "block";
    myl3aybadyalhover.style.display="flex"
  });

  element.addEventListener("mouseleave", () => {
    myl3aybadyalhover.style.display = "none";
  });

});




//lvedio li feh ikoun maa tswera 
 

let mycerclerouge = document.querySelector(".cerclerouge");

mycerclerouge.addEventListener("click", () => {
  window.open("https://youtu.be/Y7f98aduVJ8", "_blank");
});


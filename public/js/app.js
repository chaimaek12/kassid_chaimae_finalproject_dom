

// carouseel by me 
let btn = document.querySelectorAll('.arrow');
let container = document.querySelectorAll('.container');

let index = 0;

// btn.forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         if(arrow.id == 'left'){
//             index--
            
//         }else{
//             index ++
//         }
//        container.forEach(carousel => {
//              if(arrow.getAttribute('data-bs-target') ==  carousel.id){
//                 let slides = carousel.querySelectorAll('.slides')
//                 if(arrow.id == 'right' && index > slides.length - 1){
//                     index = 0
//                 }else if(index < 0 && arrow.id == 'left'){
//                     index = slides.length - 1
//                 }
//                 slides.forEach(slide => {
//                     slide.style.transform = `translateX(calc(-100% * ${index}))`

//                 }) 
                
//              }
//        });
//     })
// })

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

// container.forEach(carousel  => {
//     if(carousel.hasAttribute('autoslide')){
//         let time = carousel.getAttribute('autoslide')
//         setInterval(() => {
//             let nextBtn =  carousel.querySelector('.right')
//             nextBtn.click() 
//         }, time);
//    }
// })










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

//booking

let lbotona = document.querySelector(".lbotona");
let mylformulaire = document.querySelector('.lformulaire');
let modaldiv = document.querySelector(".modaldiv");
let close = document.querySelector(".close");

let m3achadkhol = document.querySelector(".m3achadkhol");
let m3achatkhroj = document.querySelector(".m3achatkhroj");
let typedlmakla = document.querySelector("#typedlmakla");
let nbr = document.querySelector(".nbr");
let smitk = document.querySelector(".smitk");
let sendbtn = document.querySelector(".sendbtn");

let lhojozat = [];
let capacite = 3;


lbotona.addEventListener("click", () => {
  mylformulaire.style.display = "block";
  modaldiv.style.zIndex = "99";
  close.style.display = "block";
});


close.addEventListener("click", () => {
  mylformulaire.style.display = "none";
  close.style.display = "none";
});


sendbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (lhojozat.length >= capacite) {
    alert("Ma3ndnach blasa, la capacité 3");
    return;
  }

  let start = m3achadkhol.value;
  let end = m3achatkhroj.value;
  let meal = typedlmakla.value;
  let people = nbr.value;
  let name = smitk.value;

  lhojozat.push({ name, meal, start, end, people });

  console.log(lhojozat);
  alert("ela slamteek");

  if(lhojozat[0].end===lhojozat[1].end && lhojozat[0].start===lhojozat[1].start  ){
    alert("impossible")



  }
   for (let i = 0; i < lhojozat.length; i++) {
    let b =lhojozat[i];

    if (start < b.end && end > b.start) {
      alert("deja kayn chi hed fdak lwa9t")
      return;
    }
  

  }
});

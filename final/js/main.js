burgerButton = document.querySelector(".header__burger-button")


burgerButton.addEventListener("click", function(event){
cross = event.target;


navHeader = document.querySelector(".header__nav")
ulHeader = document.querySelector(".header__list")
content =  document.querySelector(".header__content")

if (cross.classList.contains("header__burger--to-cross") === false)
{
    cross.classList.add('header__burger--to-cross')
    navHeader.classList.add('header__burger-nav')
    ulHeader.classList.add('header__burger-list')
content.style.display='none'
}
else{
    cross.classList.remove("header__burger--to-cross")
    navHeader.classList.remove('header__burger-nav')
    ulHeader.classList.remove('header__burger-list')
    content.style.display='flex'
}


}
)


const modal = document.querySelector(".modal")
modal.addEventListener("click", function(event){

    
console.log(event.currentTarget)

  if(event.target.classList.contains("modal") )
  {modal.classList.add("hidden")}
})



const crossModal = document.querySelector(".modal__cancel")

crossModal.addEventListener("click", function(event){
  event.currentTarget
  modal.classList.add("hidden")
}
)





const controlsPlay = document.querySelector(".about__controls-play") 

controlsPlay.addEventListener("click", function(event){
event.target.classList.contains("about__controls-play")
modal.classList.remove("hidden")
})


// -------tab------

const tab = document.querySelector(".tab")

tab.addEventListener("click", function(event){
  event.preventDefault();
  const tabButton = event.target.closest(".tab__link")
  const tabItem = tabButton.parentElement
  const tabItems = Array.from(document.querySelectorAll(".tab__item"))
  const tabButtonAtrribute = tabButton.getAttribute("href")
  const tabContent = document.querySelector(tabButtonAtrribute)
  const tabContents = Array.from(document.querySelectorAll(".tab__content"))


  tabItems.forEach(el => {
    if(el.classList.contains("tab__item--active")){
      el.classList.remove("tab__item--active")
    }
  })
  if (tabItem.classList.contains("tab__item--active")) return
  tabItem.classList.toggle("tab__item--active")
  
 


  tabContents.forEach(el => {
   if(!el.classList.contains("hidden")) {
    el.classList.add("hidden")
   }
  })
  tabContent.classList.remove("hidden")

})

// -----accordion-------

accordions = Array.from(document.querySelectorAll(".accordion"))


accordions.forEach(el => {
  el.addEventListener("click", function(event){
    const accordionButton = event.target.closest(".accordion__button");
    const accordionContent = accordionButton.nextElementSibling;
    const accordion = event.currentTarget
    const accordionContents = Array.from(accordion.querySelectorAll(".accordion__content"))



    
if (accordionContent.classList.contains("hidden"))
{accordionContent.classList.remove("hidden")
accordionButton.classList.add("accordion__button-control--active")
}
else{accordionContent.classList.add("hidden")
accordionButton.classList.remove("accordion__button-control--active")}


  }
  )
}
)


// --------slide-------


new Swiper('.gallery__slider', {
  slidesPerView: 3,
  spaceBetween: 32,
  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2
    },

    630: {
      slidesPerView: 3
    },
    
    1201: {
      slidesPerView: 4
    }
  }

}

);   


// ---------scrollbar-------

new Swiper('.testimonials__slider', {

  slidesPerView: 1.2,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.testimonials__scrollbar',
    draggable: true,
  },

  breakpoints: {
    781: {
      slidesPerView: 1.2
      },

    981: {
      slidesPerView: 1.6
      },

    1101: {
    slidesPerView: 2
    }
  }
});

const inputTels = document.querySelectorAll('[type="tel"]')

const inputTel = new Inputmask("+7 (999)-999-99-99");

inputTel.mask(inputTels)


























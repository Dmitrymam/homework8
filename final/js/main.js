

// бургер меню
document.addEventListener("click", burgerInit);

function burgerInit(e){
  const target = e.target;
  const burgerIcon = target.closest(".burger-icon")
  const burgerNavLink = target.closest(".nav__link")
  if (!burgerIcon && !burgerNavLink) return

  if ( document.documentElement.clientWidth > 900) return

  if(burgerIcon){
    e.preventDefault();
  }

  if(!document.body.classList.contains("body--opened-menu")){
    document.body.classList.add("body--opened-menu")
  }
  else{
    document.body.classList.remove("body--opened-menu")
  }
  
  }


// табы

const tabControls = document.querySelector(".tab-controls")

tabControls.addEventListener("click", switchTab)

function switchTab(event) {
  event.preventDefault();
  const tabControl = event.target.closest(".tab-controls__link")
  if (!tabControl) return
  const tabControlID = tabControl.getAttribute("href");
  const tabContent = document.querySelector(tabControlID) 
  const tabContentActive = document.querySelector(".tab-content--show")
  const tabControlActive = document.querySelector(".tab-controls__link--active")

  tabControlActive.classList.remove("tab-controls__link--active")
  tabControl.classList.add("tab-controls__link--active")
  

  tabContentActive.classList.remove("tab-content--show")
  tabContent.classList.add("tab-content--show");
}


//  аккордион

const accordionLists = document.querySelectorAll(".accordion-list")

// document.querySelector(".accordion-list__item--opened .accordion-list__content").style.maxHeight = document.querySelector(".accordion-list__item--opened .accordion-list__content").scrollHeight + "px"

accordionLists.forEach(el => {
  el.addEventListener("click", function(event){
    event.preventDefault();
    const accordionList = event.currentTarget;
    const accordionItemOpened = accordionList.querySelector(".accordion-list__item--opened")

    const accordionContentOpened = accordionList.querySelector(".accordion-list__item--opened .accordion-list__content")

    const accordionButton = event.target.closest(".accordion-list__control")
    if(!accordionButton) return

    const accordionItem = accordionButton.parentElement;
    const accordionContent = accordionButton.nextElementSibling;

    if(accordionItemOpened && accordionContentOpened !== accordionContent){
      accordionItemOpened.classList.remove("accordion-list__item--opened")
      accordionContentOpened.style.maxHeight = null
    }
  


    

    accordionItem.classList.toggle("accordion-list__item--opened")
  
    if (accordionItem.classList.contains("accordion-list__item--opened")) {
  accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
  }
  else{
    accordionContent.style.maxHeight = null;
  }

}
  )
})


  // модальное окно

 const modal = document.querySelector(".modal")
 const modalButton = document.querySelector(".about__img-button")


 modalButton.addEventListener("click", openModal)
 modal.addEventListener("click", closeModal)

 function openModal(event) {
  event.preventDefault();
  document.body.classList.add('body--opened-modal')
 }
  
function closeModal(event){
  event.preventDefault();

  const target = event.target


  if (target.closest(".modal__cancel") || target.classList.contains("modal")){
    document.body.classList.remove('body--opened-modal')
  }
}

// -----------слайдер-галерея--------

new Swiper('.gallery__slider', {

  slidesPerView: 1.5,
  spaceBetween: 15,


  pagination: {
    el: '.gallery__pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  breakpoints:{
    450:{
      slidesPerView: 2,
      spaceBetween: 15,
    },


600:{
  slidesPerView: 3,
  spaceBetween: 15,
},


    800: {
      slidesPerView: 3,
      spaceBetween: 32,
    },



  1100: {
    slidesPerView: 4,
    spaceBetween: 32,
  }


}
}
);

// ------слайдер-отзывы-------


new Swiper('.testimonials__slider', {

  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,


  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.testimonials__scrollbar',
  },

  breakpoints:{
   
    900: {
      slidesPerView: 1.5
    },

  1200: {
    slidesPerView: 2.1
  }

}
}
);


// -----маска для телефона------

const telInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask("+7 (999) 99 99-99")
im.mask(telInputs)
























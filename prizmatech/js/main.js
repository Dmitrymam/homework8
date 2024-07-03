


// ------выбор параметров светодиодных экранов-------

const range = document.querySelectorAll("#range")


range.forEach((item) => {
    item.addEventListener("change", function(e){
        const number = e.currentTarget.previousElementSibling
        number.value = this.value
}
)
}
)

range.forEach((item) => {
    item.addEventListener('input', () => {
        const value = (item.value-item.min)/(item.max-item.min)*100;
        console.log(value)
        item.style.background = `linear-gradient(to right, rgba(241, 87, 61, 1) ${value}%, rgba(247, 200, 193, 1) ${value}%)`;
      });
})


// ------------слайдер our-projects----------

new Swiper('.our-projects__slider', {
   

    slidesPerView: 1,
    spaceBetween: 210,


    navigation: {
    

      nextEl: '.our-projects__control-right',
      prevEl: '.our-projects__control-left',
    },
  
  });

// ------------слайдер our-clients----------

  new Swiper('.our-clients__slider', {
   
    
    
    slidesPerView: 2,
    spaceBetween: 0,

    navigation: {
    

      nextEl: '.our-clients__control-right',
      prevEl: '.our-clients__control-left',
    },

    

    
    breakpoints:{

      500:{
        slidesPerView: 2,
        spaceBetween: 0,
      },

      700:{
        slidesPerView: 2.5,
        spaceBetween: 0,
      },

      900:{
        slidesPerView: 3,
        spaceBetween: 0,
      },

      
      
      1200:{
        slidesPerView: 3.5,
        spaceBetween: 0,
      },



      1300:{
        slidesPerView: 4,
        spaceBetween: 15,
      },
  
  
  
  }
});




  // -------modal-city--------

  const selectCity = document.querySelector(".header__select-city")
  const selectCityMuddle = document.querySelector(".header__select-city-muddle")
  const selectCityMobile = document.querySelector(".header__select-city-mobile")


const selects = [
  selectCity,
  selectCityMuddle,
  selectCityMobile
]


 selects.forEach(item => (
  item.addEventListener("click", (e) => {
console.log(item)
    if(e.target.closest(".header__select-city") || e.target.closest(".header__select-city-muddle") || e.target.closest(".header__select-city-mobile") )
     { document.body.classList.add("body-modal-city--opened")}
  
   })
 ))
 
  const modalCity = document.querySelector(".modal-city")

  modalCity.addEventListener("click", (e)=>{

   const  target = e.target
   const modalCityLink = target.closest(".modal-city__link")
   const selectCityText = selectCity.querySelector("p")
   const selectCityMuddleText = selectCityMuddle.querySelector("p")
   const selectCityMobileText = selectCityMobile.querySelector("p")

    
 if (target.closest(".modal-city__cancel") || target.classList.contains("modal-city"))
   {document.body.classList.remove("body-modal-city--opened")}
 
 if(modalCityLink){
  selectCityText.innerText = modalCityLink.textContent
  selectCityMuddleText.innerText = modalCityLink.textContent
  selectCityMobileText.innerText = modalCityLink.textContent

  document.body.classList.remove("body-modal-city--opened")
 }

  })
  

 // -------modal-consultation--------

 const buttonConsultation = document.querySelector("#consultation")
 const buttonConsultationAnother = document.querySelector("#consultation-another")
 const modalConsultation = document.querySelector(".modal-consultation")


 buttonConsultation.addEventListener("click", (e) => {
  e.currentTarget
  
  document.body.classList.add("body-modal-consultation--opened")


 })

 buttonConsultationAnother.addEventListener("click", (e) => {
  e.currentTarget
  
  document.body.classList.add("body-modal-consultation--opened")


 })

 
 modalConsultation.addEventListener("click", (e)=>{

   const  target = e.target

    
 if (target.closest(".modal-consultation__cancel") || target.classList.contains("modal-consultation") || target.classList.contains("modal-consultation__button"))
   {document.body.classList.remove("body-modal-consultation--opened")}
 

  })



// --------map---------

function init() {
  let map = new ymaps.Map('map', {
    center: [44.46518533172114,26.087291688540986],
    zoom: 20
  });

  let placemark = new ymaps.Placemark([44.46518533172114,26.087291688540986], {}, {
      iconLayout: 'default#image',
      iconImageHref: "img/icons/map/marker.png",
      iconImageSize: [88, 113],
      iconImageOffset: [-48, -120]


  })

  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  // map.controls.remove('searchControl'); // удаляем поиск
  // map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']);
map.geoObjects.add(placemark)
}
ymaps.ready(init)



// ---------бургер меню---------

const burgerButton = document.querySelector(".header__burger-menu-button")

burgerButton.addEventListener("click", (e) => {
  e.currentTarget
document.body.classList.add("burger-menu--opened")
}
)

const burgerButtonCross = document.querySelector(".burger-menu__cross")

burgerButtonCross.addEventListener("click", (e) => {
  e.currentTarget
  document.body.classList.remove("burger-menu--opened")
})

// -----поиск-------

const searchIcon = document.querySelector(".header__search-icon")

searchIcon.addEventListener("click", function(e){
  const search = e.currentTarget;
  const searchBlock =  search.parentElement;
  const searchField = search.nextElementSibling;


  if(search && searchField.classList.contains("header__search-field--active") == false){
    searchBlock.style.width = 100 + "px"
    searchField.classList.add("header__search-field--active")
  }
  else if(searchField.classList.contains("header__search-field--active") == true && search)
    {searchBlock.style.width = 27 + "px"
    searchField.classList.remove("header__search-field--active")
  }


})


const searchIconMobile = document.querySelector(".header__search-icon-mobile")

searchIconMobile.addEventListener("click", function(e){
  const searchMobile = e.currentTarget;
  const searchBlockMobile =  searchMobile.parentElement;
  const searchFieldMobile = searchMobile.nextElementSibling;


  if(searchMobile && searchFieldMobile.classList.contains("header__search-field-mobile--active") == false){
    searchBlockMobile.style.width = 100 + "px"
    searchFieldMobile.classList.add("header__search-field-mobile--active")
  }
  else if(searchFieldMobile.classList.contains("header__search-field-mobile--active") == true && searchMobile)
    {searchBlockMobile.style.width = 27 + "px"
    searchFieldMobile.classList.remove("header__search-field-mobile--active")
  }


})
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const navWrapper = document.querySelector('.nav-wrapper');


navToggle.addEventListener("click",()=>{
    primaryNav.classList.toggle("display-navigation");
    navToggle.classList.toggle('active');
    navWrapper.classList.toggle('active');
});

// FIXED NAVBAR MENU

const header = document.querySelector(".primary-header");
const heroSlider = document.querySelector(".hero-slider");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionOneObesrver = new IntersectionObserver
(function (
    entries,
    sectionOneObesrver
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        }else {
            header.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);
sectionOneObesrver.observe(heroSlider);


// CAROUSEL

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) {
            newIndex = slides.children.length -1;
        }

        if(newIndex >= slides.children.length) {
            newIndex=0;
        }
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

/////////////FILTER MENU

const menuBtns = document.querySelectorAll('.tasty-menu-btn');
const menuItems = document.querySelectorAll('.tasty-menu-items');
const breakfastItem=document.querySelector('.breakfast');

// breakfastItem.manageItems();

menuBtns.forEach((btn) => {
    btn.addEventListener("click", removeActive);
    btn.addEventListener("click", manageItems);
});

//remove active 

function removeActive() {
    menuBtns.forEach((btn)=> {
        btn.classList.remove("active-item");
        this.classList.add("active-item");
    });
}

function manageItems() {
    menuItems.forEach((item)=> {
        item.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display="grid";
    })
}

// Testemonials Carousel

/////////////////SWIPER JS//////////////

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  //Prevent form from sending

  let formContact = document.querySelector(".reservation-form form");

  formContact.addEventListener("submit", function(e){
    e.preventDefault();
  })
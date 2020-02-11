const show = "showing";
const firstSlide = document.querySelector(".img_sl:first-child");
const lastSlide = document.querySelector(".img_sl:last-child");
const mainSlide = document.querySelector(".slide");
const slideImg = document.querySelector(".img_sl");
const btn_next = document.querySelector(".btn_next");
const btn_prev = document.querySelector(".btn_prev");

function slideNext() {
   const currentSlide = document.querySelector(`.${show}`);
   if (currentSlide){
      currentSlide.classList.remove(show);
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide) {
         nextSlide.classList.add(show);
      } else {
         firstSlide.classList.add(show);
      }
   } else {
      firstSlide.classList.add(show);
   }
}

function slidePrev() {
   const currentSlide = document.querySelector(`.${show}`);
   if (currentSlide){
      currentSlide.classList.remove(show);
      const prevSlide = currentSlide.previousElementSibling;
      if (prevSlide) {
         prevSlide.classList.add(show);
      } else {
         lastSlide.classList.add(show);
      }
   } else {
      lastSlide.classList.add(show);
   }
}

slideNext();
btn_next.onclick = function(){
   slideNext();
}
btn_prev.onclick = function(){
   slidePrev();
}

// setInterval(slideNext, 2000);
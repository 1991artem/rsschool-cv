
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.getElementsByName("slide");
    if (n > slides.length-1) {
      slideIndex = 0
    }
    if (n < 1) {
        slideIndex = slides.length-1
    }
    if (slideIndex == 0){
        slides[0].style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
        slides[1].style.filter = "";
        slides[2].style.filter = "";
        slides[0].className = "pets_page_slider_card_2";
        slides[1].className = "pets_page_slider_card_3";
        slides[2].className = "pets_page_slider_card_1";
    }
    if (slideIndex == 1){
        slides[0].style.filter = "";
        slides[1].style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
        slides[2].style.filter = "";
        slides[0].className = "pets_page_slider_card_1";
        slides[1].className = "pets_page_slider_card_2";
        slides[2].className = "pets_page_slider_card_3";
    }
    if (slideIndex == 2){
        slides[0].style.filter = "";
        slides[1].style.filter = "";
        slides[2].style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
        slides[0].className = "pets_page_slider_card_3";
        slides[1].className = "pets_page_slider_card_1";
        slides[2].className = "pets_page_slider_card_2";
    }
}
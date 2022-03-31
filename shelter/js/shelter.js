let slider = {};

slider.slideIndex = 0;

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
slider.plusSlide = function plusSlide() {
    slider.show(slider.slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
slider.minusSlide = function minusSlide() {
    slider.show(slider.slideIndex -= 1);  
}

/* Основная функция слайдера */
slider.show = function showSlides(n) {
    let slides = document.getElementsByName("slide");
    if (n >= slides.length-1) {
        slider.slideIndex = 0
    }
    if (n < 1) {
        slider.slideIndex = slides.length-1
    }
    slides.forEach(element => {
        element.style.visibility = "hidden";
    });

        let arrShow = ["pets_page_slider_card_1","pets_page_slider_card_2","pets_page_slider_card_3"];
        let count = 0;
        let i = slider.slideIndex;
    while (count < 3){
            slides[i].className = arrShow[count];
            slides[i].style.visibility = "visible";
            count++;
            i++;
            if (i > slides.length-1){
                i=0;
            }
    }

}
/* Индекс слайда по умолчанию */
slider.show(slider.slideIndex);

slider.plusSlide();

slider.minusSlide();
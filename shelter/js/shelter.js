if (typeof shelter === "object") {
    if (shelter.pets == {}){
        shelter.pets.name = "Puppy";
        shelter.pets.img = "img";
        shelter.pets.link = "#";
    } else{
        shelter.pets = {
            name : "Puppy",
            img : "img",
            link : "../page/index_pets.html"
            };
    }
} else {
    function shelterObj (){return shelter = {}}; 
    shelterObj();
    shelter.pets = {
        name : "Puppy",
        img : "img",
        link : "#"
        };
    shelter.slider = {
        slideIndex: 1,
        plusSlide : function() {showSlides(this.slideIndex += 1)}, /* Функция увеличивает индекс на 1, показывает следующй слайд*/
        minusSlide : function() {showSlides(this.slideIndex -= 1)} /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    };
}

let arrPets = [];
let arrImg = [
    "../img/pets-katrine.png", 
    "../img/pets-jennifer.png", 
    "../img/pets-woody.png", 
    "../img/pets-fred.png", 
    "../img/pets-scarlet.png",
    "../img/pets-timmy.png",
    "../img/pets-charly.png",
    "../img/pets-sof.png"]
let arrPetsName = [
    "Katrine", 
    "Jennifer", 
    "Woody", 
    "Fred", 
    "Scarlet", 
    "Timmy", 
    "Charly", 
    "Sophia"];
arrPetsName.forEach(function (element, index) {
    arrPets[index] = Object.create(shelter.pets);
    arrPets[index].name = arrPetsName[index];
    arrPets[index].img = arrImg[index];
});



/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.getElementsByClassName("pets_slide");
    if (n > arrPets.length-1) {
        shelter.slider.slideIndex = 0;
    }
    if (n < 0) {
        shelter.slider.slideIndex = arrPets.length-1;
    }
    let count = 0;
    let i = shelter.slider.slideIndex-1;

    while(count < 3){
        if (i > arrPets.length-1) {
            i = 0;
        }
        if (i < 0) {
            i = arrPets.length-1;
        }
        slides[count].childNodes[1].src = arrPets[i].img;
        slides[count].childNodes[3].innerHTML = arrPets[i].name;
        count++;
        i++;
        }
    }

/* Индекс слайда по умолчанию */
showSlides(shelter.slider.slideIndex);

window.onload = function(){
    window.onscroll = function() {myFunction()};
    let petsPage = new Object();

    petsPage.header = document.getElementById("header");

    petsPage.sticky = petsPage.header.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= petsPage.sticky) {
            petsPage.header.classList.add("sticky");
        } else {
            petsPage.header.classList.remove("sticky");
        }
    }

}

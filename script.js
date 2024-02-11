document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var screenHeight = window.innerHeight;

        if (scrollPosition < screenHeight) {
            document.getElementById("background1").style.opacity = 1;
            document.getElementById("background2").style.opacity = 0;
            document.getElementById("background3").style.opacity = 0;
        } else if (scrollPosition < screenHeight * 7) {
            document.getElementById("background1").style.opacity = 0;
            document.getElementById("background2").style.opacity = 1;
            document.getElementById("background3").style.opacity = 0;
        } else {
            document.getElementById("background1").style.opacity = 0;
            document.getElementById("background2").style.opacity = 0;
            document.getElementById("background3").style.opacity = 1;
        }
    });
});

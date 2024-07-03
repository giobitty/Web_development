document.addEventListener("DOMContentLoaded", function() {
    const slideContainer = document.querySelector(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");

    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".carousel-slide img");
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", function() {
        slideIndex--;
        showSlide(slideIndex);
    });

    nextBtn.addEventListener("click", function() {
        slideIndex++;
        showSlide(slideIndex);
    });

    // Automatic slideshow (optional)
    // setInterval(function() {
    //     slideIndex++;
    //     showSlide(slideIndex);
    // }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    let slideWidth = slider.querySelector('.card').offsetWidth + 16; // Adjust for gap
    let currentIndex = 0;
    let numSlides = dots.length;
    let autoSlideInterval;

    const updateDots = () => {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.remove("black-dot");
                dot.classList.add("red-dot");
            } else {
                dot.classList.remove("red-dot");
                dot.classList.add("black-dot");
            }
        });
    };

    const moveSlider = () => {
        slider.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });
        // updateDots();
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % numSlides;
        moveSlider();
    };

    slider.addEventListener('scroll', () => {
        const scrollLeft = slider.scrollLeft;
        currentIndex = Math.round(scrollLeft / slideWidth);
        updateDots();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval); // Stop auto-slide on dot click
            currentIndex = index;
            moveSlider();
            autoSlideInterval = setInterval(nextSlide, 3000); // Restart auto-slide after click
        });
    });

    autoSlideInterval = setInterval(nextSlide, 3000);

    const contactUsBtn = document.querySelector(".contact-us-btn");

    const overlay = document.querySelector(".overlay");

    contactUsBtn.addEventListener("click", () => {
        showPopup();
    })
    overlay.addEventListener("click", () => {
        hidePopup();
    })

    function showPopup() {
        const popupForm = document.getElementById('popupForm');
        const overlay = document.getElementById('overlay');

        overlay.classList.add('show');
        overlay.classList.remove('hide');

        popupForm.classList.add('show');
        popupForm.classList.remove('hide');
    }

    function hidePopup() {
        const popupForm = document.getElementById('popupForm');
        const overlay = document.getElementById('overlay');

        overlay.classList.add('hide');
        overlay.classList.remove('show');

        popupForm.classList.add('hide');
        popupForm.classList.remove('show');

    }
});

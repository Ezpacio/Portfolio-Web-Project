let sliderItem = document.querySelectorAll('.slider-item');
let slideCount = document.querySelector('.slide-count > span');

let counter = 0;
let touchStartX = 0;
let isDragging = false;
let percentMoved = 0;

sliderItem.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++;
    if (counter >= sliderItem.length) {
        counter = 0;
    }
    slide();
};

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = sliderItem.length - 1;
    }
    slide();
};

const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
    isDragging = true;
    percentMoved = 0;
};

const handleTouchMove = (event) => {
    if (!isDragging) return;

    const currentX = event.touches[0].clientX;
    const diff = touchStartX - currentX;
    percentMoved = (diff / window.innerWidth) * 100;

    sliderItem.forEach((slide, index) => {
        slide.style.transition = 'none';
        slide.style.transform = `translateX(-${counter * 100 + percentMoved}%)`;
    });
};

const handleTouchEnd = () => {
    if (!isDragging) return;

    isDragging = false;

    // Add transition back for smooth sliding
    sliderItem.forEach((slide) => {
        slide.style.transition = 'transform 0.5s ease';
    });

    // Determine whether to go to next or previous slide based on percent moved
    if (percentMoved > 10) {
        goNext();
    } else if (percentMoved < -10) {
        goPrev();
    } else {
        slide();
    }
};

let slide = () => {
    sliderItem.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    slideCount.innerHTML = counter + 1;
};

// Event listeners for touch events
sliderItem.forEach((slide) => {
    slide.addEventListener('touchstart', handleTouchStart);
    slide.addEventListener('touchmove', handleTouchMove);
    slide.addEventListener('touchend', handleTouchEnd);
});


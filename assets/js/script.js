document.addEventListener('DOMContentLoaded', function () {
    // Handle the global slideshow (e.g., for index.html)
    const globalSlideshow = document.querySelector('.slideshow.global');
    if (globalSlideshow) {
        let globalSlides = globalSlideshow.querySelectorAll('.slide');
        let globalIndex = 0;

        function showGlobalSlide() {
            globalSlides.forEach((slide, i) => {
                slide.style.display = i === globalIndex ? 'block' : 'none';
            });
            globalIndex = (globalIndex + 1) % globalSlides.length;
        }

        setInterval(showGlobalSlide, 3000);
        showGlobalSlide(); // Show the first slide immediately
    }

    // Handle project-specific slideshows
    const projectSlideshows = document.querySelectorAll('.slideshow.project');

    projectSlideshows.forEach((slideshow) => {
        let slides = slideshow.querySelectorAll('.gallery-slide');
        let index = 0;

        function showProjectSlide() {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
            index = (index + 1) % slides.length;
        }

        setInterval(showProjectSlide, 3000);
        showProjectSlide(); // Show the first slide immediately
    });
});

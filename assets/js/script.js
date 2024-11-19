document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    // Function to show the current slide
    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none'; // Show current slide, hide others
        });
        index = (index + 1) % slides.length; // Move to the next slide
    }

    // Start the slideshow by calling the showSlide function every 3 seconds
    setInterval(showSlide, 3000); // Change slide every 3 seconds

    // Display the first slide immediately
    showSlide();
});

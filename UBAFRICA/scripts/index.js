
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function (params) {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-x'
        : 'fa-solid fa-bars'
    }


    // Get the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll events
window.addEventListener('scroll', function () {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Define the scroll threshold for the background change
    const scrollThreshold = 100;

    // Check if scroll position is below the threshold
    if (scrollPosition > scrollThreshold) {
        // Change the background color to gradient pink and hot pink
        navbar.style.background = 'rgba(68, 68, 141, 0.862) ';
    } else {
        // Reset the background to transparent if scroll position is above the threshold
        navbar.style.background = 'transparent';
    }
});


    // Get the button element by its ID
const heartButton = document.getElementById('heart-button');

// Add a click event listener to toggle the solid heart icon and background color
heartButton.addEventListener('click', function () {
    const heartIcon = this.querySelector('i.fa-heart');
    if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
        this.classList.add('clicked');
    } else {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
        this.classList.remove('clicked');
    }
});


// Get all the price spans
const priceSpans = document.querySelectorAll('.prices span');

// Add a click event listener to each span
priceSpans.forEach((span) => {
    span.addEventListener('click', function () {
        // Remove the "active" class from all spans
        priceSpans.forEach((s) => s.classList.remove('active'));
        // Add the "active" class to the clicked span
        this.classList.add('active');
    });
});

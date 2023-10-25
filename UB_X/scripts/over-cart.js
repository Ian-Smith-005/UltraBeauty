

// Function to toggle the overlay
function toggleOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
    }
    
    // Add event listeners to elements with id "open-overlay-btn"
    var openOverlayButtons = document.querySelectorAll("#open-overlay-btn");
    openOverlayButtons.forEach(function(button) {
    button.addEventListener("click", toggleOverlay);
    });
    // Function to close the overlay
    document.getElementById("close-overlay-btn").addEventListener("click", function () {
    document.getElementById("overlay").classList.remove("active");
    });
    
    
    // Function to select quantity
    function selectPrice(span) {
    // Remove the 'active' class from all spans in the 'prices' div
    var allSpans = document.querySelectorAll('.prices span');
    allSpans.forEach(function (element) {
    element.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked span
    span.classList.add('active');
    
    // Rest of your code for quantity selection goes here...
    }
    
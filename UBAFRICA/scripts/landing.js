var swiper = new Swiper(".swiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
},
keyboard: {
    enabled: true
},
mousewheel: {
    thresholdDelta: 70
},
loop: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true
},
breakpoints: {
    640: {
    slidesPerView: 2
    },
    768: {
    slidesPerView: 1
    },
    1024: {
    slidesPerView: 2
    },
    1560: {
    slidesPerView: 3
    }
}
});

        document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
    var searchResults = document.getElementById("search-results");

    function updateSearchResults() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = "";

        if (searchTerm === "") {
            searchResults.innerHTML = `<p>Type in the input to see products.</p>`;
            return;
        }

        var products = document.querySelectorAll(".product");
        var foundResults = false;

        products.forEach(function (product, index) {
            var titleElement = product.querySelector("h3");
            var title = titleElement.textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                var resultItem = document.createElement("div");
                resultItem.className = "search-result";
                var boldPart = title.slice(0, searchTerm.length);
                var restOfTitle = title.slice(searchTerm.length);
                resultItem.innerHTML = `<a href="#product-${index}"><strong>${boldPart}</strong>${restOfTitle}</a><br>`;
                searchResults.appendChild(resultItem);
                foundResults = true;

                // Scroll to the product when the result item is clicked
                resultItem.querySelector("a").addEventListener("click", function (e) {
                    e.preventDefault();
                    // Scroll smoothly to the product using JavaScript
                    product.scrollIntoView({ behavior: "smooth" });
                    // Highlight the product title
                    titleElement.style.backgroundColor = "#673AB7";
                    titleElement.style.padding = "5px";
                    titleElement.style.marginTop = "5px";
                    titleElement.style.color = "#fff";
                    titleElement.style.borderRadius = "5px";
                    titleElement.style.animation = "found";
                    titleElement.style.animationDuration = "4s";
                    titleElement.style.animationPlayState = "ease-in-out";
                });
            }
        });

        if (!foundResults) {
            searchResults.innerHTML = `<p>No matching items found.</p>`;
        }
    }

    // Initiate search when typing starts
    searchInput.addEventListener("input", function () {
        updateSearchResults();
    });

    // Search with Enter button
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            updateSearchResults();
        }
    });

    // Search button click event
    searchButton.addEventListener("click", function () {
        updateSearchResults();
    });
});

     
        const header = document.querySelector('.header-container');

window.addEventListener('scroll', function() {
if (window.scrollY > 100) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

  
        document.getElementById("toggleSearch").addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents the click event from reaching the document body
            var searchBar = document.querySelector(".search-bar-section");
            searchBar.classList.toggle("active");
        });
        
        document.getElementById("closeSearch").addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents the click event from reaching the document body
            var searchBar = document.querySelector(".search-bar-section");
            searchBar.classList.remove("active");
        });
        
        
        
      
                const hamburgerMenu = document.querySelector('.hamburger-menu');
        
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
        });
        
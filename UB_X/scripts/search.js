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

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to check if the IP cookie exists
function ipCookieExists() {
    return getCookie("visitedByIP") !== null;
}

// Function to display the cookie banner
function showCookieBanner() {
    var banner = document.getElementById("cookie-banner");
    banner.style.display = "block";
}

// Function to handle the "Accept" button click
function acceptCookies() {
    setCookie("visitedByIP", "true", 365); // Set the IP cookie for 1 year
    var banner = document.getElementById("cookie-banner");
    banner.style.display = "none";
}

// Check if the IP cookie exists and display the banner if not
if (!ipCookieExists()) {
    showCookieBanner();
}

// Attach a click event listener to the "Accept" button
document.getElementById("accept-cookies").addEventListener("click", acceptCookies);
document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');
    const messageDiv = document.getElementById('message');

    let isMessageDisplayed = false;

    // Check if the user has visited the site before
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (!hasVisitedBefore) {
        cookieConsent.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('hasVisitedBefore', true);
        cookieConsent.style.display = 'none';
    });

    rejectBtn.addEventListener('click', function() {
        if (isMessageDisplayed) {
            messageDiv.textContent = '';
            messageDiv.classList.remove('error');
            cookieConsent.style.display = 'none';
        } else {
            messageDiv.textContent = "You might have trouble accessing some services without accepting cookies.";
            messageDiv.classList.add('error');
            isMessageDisplayed = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const reviewContainer = document.querySelector('.review-container');
    let scrollAmount = 0;

    function autoScrollReviews() {
        scrollAmount += 1;
        if (scrollAmount >= reviewContainer.scrollWidth - reviewContainer.clientWidth) {
            scrollAmount = 0; // Reset scroll to the beginning
        }
        reviewContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    setInterval(autoScrollReviews, 50);
});





document.getElementsByClassName("turnHere")[0].addEventListener("click", function() {
    const cardBackground = document.getElementsByClassName("cardBackground")[0];
    cardBackground.classList.toggle("slideUp");
});
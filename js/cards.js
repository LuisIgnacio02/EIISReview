const card = document.querySelectorAll('.card_inner');

card.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });
});
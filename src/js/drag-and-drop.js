const cardContainer = document.getElementById("cardContainer");

const colors = [
    "bg-primary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-secondary",
];

function changeSquareColors() {
    const squares = document.querySelectorAll(".feature");
    squares.forEach((square) => {
        colors.forEach((color) => square.classList.remove(color));

        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColorClass = colors[randomIndex];

        square.classList.add(randomColorClass);
    });
}

new Sortable(cardContainer, {
    animation: 150,
    ghostClass: "sortable-ghost",
    onEnd: function (evt) {
        console.log("Card moved!", evt);
        changeSquareColors();
    },
});

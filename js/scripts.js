/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://dmitrymatvichuk.github.io/startbootstrap-heroic-features)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
const ctaButton = document.getElementById("cta-button");
const welcomeText = document.getElementById("welcome-text");
const jumboText = document.getElementById("jumbo-text");

const rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8B00FF",
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}

async function fetchCatFact() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        return data.fact;
    } catch (error) {
        console.error("Error fetching the fact:", error);
        return "Failed to load a cat fact 😿";
    }
}

function fadeOutText(textElement) {
    textElement.classList.add("fade-out");
}

ctaButton.addEventListener("click", async () => {
    ctaButton.style.backgroundColor = getRandomColor();

    const newFact = await fetchCatFact();
    welcomeText.textContent = newFact;

    fadeOutText(jumboText);
});

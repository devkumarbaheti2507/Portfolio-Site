document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.menu-option');
    const links = document.querySelector('.links');

    menu.addEventListener('click', (event) => {
        event.stopPropagation();
        links.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        links.classList.remove('show');
    });

    links.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    const words = ["Web Developer", "Programmer", "Designer", "Tech Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    const typedText = document.getElementById("typed-text");
    const typingDelay = 100;
    const erasingDelay = 60;
    const newWordDelay = 1500;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typedText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay);
        }
    }

    setTimeout(type, 1000);

    const stockSpan = document.getElementById("stockSpan");
    const minimizedCash = document.getElementById("minimizedCash");
    const webCalc = document.getElementById("webCalc");
    const classicSnake = document.getElementById("classicSnake");

    stockSpan.addEventListener("click", () => {
        window.open("https://github.com/devkumarbaheti2507/Stock-Span-Market-Analyzer.git", "_blank");
    });
    minimizedCash.addEventListener("click", () => {
        window.open("https://github.com/devkumarbaheti2507/Minimized-Cash-Flow.git", "_blank");
    });
    webCalc.addEventListener("click", () => {
        window.open("https://devkumarbaheti2507.github.io/Web-Calculator/", "_blank");
    });
    classicSnake.addEventListener("click", () => {
        window.open("https://github.com/devkumarbaheti2507/Snake-Game.git", "_blank");
    });
});

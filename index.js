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
});

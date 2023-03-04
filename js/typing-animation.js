// Home Screen Typing Animation

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Lynn Kim", "a coder", "a researcher", "a creator"]
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else if (textArrayIndex == 0) {
        setTimeout(erase, 2000);
    }
    else {
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});

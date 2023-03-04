// Ripple Effect

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) { ripple.remove(); }

    button.appendChild(circle);
}

// Update Table Information

const texts = document.getElementsByClassName("role-text");

function updateDisplay(newDisplay) {
    for (const text of texts) {
        text.style.display = "none";
    }
    for (const button of buttons) {
        button.classList.remove("active")
    }
    if (newDisplay == 1) {
        var displayText = document.getElementById("exp-text1");
        displayText.style.display = "block";
        btn1.classList.add("active");
    }
    else if (newDisplay == 2) {
        var displayText = document.getElementById("exp-text2");
        displayText.style.display = "block";
        btn2.classList.add("active");
    }
    else if (newDisplay == 3) {
        var displayText = document.getElementById("exp-text3");
        displayText.style.display = "block";
        btn3.classList.add("active");
    }
    else if (newDisplay == 4) {
        var displayText = document.getElementById("exp-text4");
        displayText.style.display = "block";
        btn4.classList.add("active");
    }
}

// Apply to sidebar buttons

const buttons = document.getElementsByClassName("exp-btn");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

const btn1 = document.getElementById("experience-btn1");
btn1.addEventListener("click", function(){updateDisplay(1)});

const btn2 = document.getElementById("experience-btn2");
btn2.addEventListener("click", function(){updateDisplay(2)});

const btn3 = document.getElementById("experience-btn3");
btn3.addEventListener("click", function(){updateDisplay(3)});

const btn4 = document.getElementById("experience-btn4");
btn4.addEventListener("click", function(){updateDisplay(4)});

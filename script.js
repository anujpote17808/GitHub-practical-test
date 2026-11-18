
// ==============================
// SKILL SELECTION INTERACTION
// ==============================

const skills = document.querySelectorAll(".skill");

const skillMessage = document.getElementById("skill-message");

skills.forEach((skill) => {

    skill.addEventListener("click", () => {

        // Remove previous selection
        skills.forEach((item) => {
            item.classList.remove("selected");
            item.setAttribute("aria-pressed", "false");
        });

        // Highlight selected skill
        skill.classList.add("selected");

        skill.setAttribute("aria-pressed", "true");

        // Display selected skill
        skillMessage.textContent =
            "You selected: " + skill.textContent;

    });

});


// ==============================
// SMOOTH SCROLLING
// ==============================

const projectButton = document.querySelector(
    '.hero a[href="#projects"]'
);

projectButton.addEventListener("click", (event) => {

    event.preventDefault();

    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });

});


// ==============================
// WELCOME MESSAGE
// ==============================

console.log("Welcome to Anuj's Developer Portfolio!");

console.log("Portfolio website loaded successfully.");

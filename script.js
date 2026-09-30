// =========================
// SCREEN NAVIGATION
// =========================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================
// SKILL SEARCH
// =========================

function searchSkill() {

    const input = document.getElementById("skillSearch");

    const skill = input.value.trim();

    if (skill === "") {
        alert("Please enter a skill to search.");
        return;
    }

    alert(
        "Searching SkillSwap for: " + skill
    );
}


// =========================
// ENTER KEY SEARCH
// =========================

document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("skillSearch");

    if (input) {

        input.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                searchSkill();
            }

        });

    }

});

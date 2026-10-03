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


// =========================
// CREATE PROJECT
// =========================

function createProjectPost() {

    const name = document.getElementById("projectName").value.trim();
    const description = document.getElementById("projectDescription").value.trim();
    const skills = document.getElementById("projectSkills").value.trim();
    const members = document.getElementById("projectMembers").value.trim();

    if (!name || !description || !skills || !members) {
        alert("Please fill in all project details.");
        return;
    }

    const project = {
        id: Date.now(),
        name: name,
        description: description,
        skills: skills,
        membersNeeded: Number(members),
        membersJoined: 1
    };

    const projects =
        JSON.parse(localStorage.getItem("skillswapProjects")) || [];

    projects.push(project);

    localStorage.setItem(
        "skillswapProjects",
        JSON.stringify(projects)
    );

    alert("Project created successfully! 🚀");

    document.getElementById("projectName").value = "";
    document.getElementById("projectDescription").value = "";
    document.getElementById("projectSkills").value = "";
    document.getElementById("projectMembers").value = "";

    showScreen("projects");
}


// =========================
// OPEN CREATE PROJECT
// =========================

function createProject() {
    showScreen("createProject");
}
// =========================
// TEAM BUILDER
// =========================

function findTeamMembers() {

    const idea = document.getElementById("teamIdea").value.trim();
    const skills = document.getElementById("teamSkills").value.trim();
    const size = document.getElementById("teamSize").value.trim();

    if (!idea || !skills || !size) {
        alert("Please fill in all team details.");
        return;
    }

    const results = document.getElementById("teamResults");

    results.innerHTML = `
        <div class="team-results">

            <p class="eyebrow">
                TEAM MATCHES
            </p>

            <h2>
                People you could build with
            </h2>

            <div class="team-card">

                <div class="team-avatar">
                    👨‍💻
                </div>

                <div class="team-info">

                    <h3>
                        Alex
                    </h3>

                    <p>
                        Frontend Developer
                    </p>

                    <span>
                        HTML • CSS • JavaScript
                    </span>

                </div>

                <button
                    onclick="alert('Team request sent!')">

                    Request

                </button>

            </div>


            <div class="team-card">

                <div class="team-avatar">
                    🎨
                </div>

                <div class="team-info">

                    <h3>
                        Maya
                    </h3>

                    <p>
                        UI/UX Designer
                    </p>

                    <span>
                        Figma • UI Design • Prototyping
                    </span>

                </div>

                <button
                    onclick="alert('Team request sent!')">

                    Request

                </button>

            </div>


            <div class="team-card">

                <div class="team-avatar">
                    🤖
                </div>

                <div class="team-info">

                    <h3>
                        Rahul
                    </h3>

                    <p>
                        AI / ML Developer
                    </p>

                    <span>
                        Python • Machine Learning • AI
                    </span>

                </div>

                <button
                    onclick="alert('Team request sent!')">

                    Request

                </button>

            </div>

        </div>
    `;
}
// =========================
// LUCIDE ICONS
// =========================

document.addEventListener("DOMContentLoaded", function() {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});



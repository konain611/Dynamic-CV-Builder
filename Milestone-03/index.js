// script.ts
// Taking elements from HTML
var inputField = document.querySelector(".inputField");
var main = document.querySelector(".resume-builder");
var outputContainer = document.querySelector(".output_container");
var isHidden = true;
// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;
        // Cast inputField to FormInputs
        var inputs = inputField;
        outputContainer.style.display = "block";
        outputContainer.innerHTML = "\n            <div class=\"output\">\n                <div class=\"heading\">\n                    <h1>".concat(inputs.name.value, "</h1>\n                    <h4>").concat(inputs.title.value, "</h4>\n                </div>\n                <div class=\"info\">\n                    <div class=\"left\">\n                        <div class=\"box\">\n                            <h2>Objective</h2>\n                            <p>").concat(inputs.objective.value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Skills</h2>\n                            <p>").concat(inputs.skills.value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Academic Details</h2>\n                            <p>").concat(inputs.academic_details.value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Contact</h2>\n                            <p>").concat(inputs.contact.value, "</p>\n                        </div>\n                    </div>\n                    <div class=\"right\">\n                        <div class=\"box\">\n                            <h2>Work Experience</h2>\n                            <p>").concat(inputs.work_experience.value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Achievements</h2>\n                            <p>").concat(inputs.achievements.value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Projects</h2>\n                            <p>").concat(inputs.projects.value, "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button onclick=\"print()\">Print Resume</button>\n        ");
    }
    else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;
        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}

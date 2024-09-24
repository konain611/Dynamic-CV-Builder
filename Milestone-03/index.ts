// script.ts

// Define an interface for the input fields
interface FormInputs {
    name: HTMLInputElement;
    title: HTMLInputElement;
    objective: HTMLInputElement;
    skills: HTMLInputElement;
    academic_details: HTMLInputElement;
    contact: HTMLInputElement;
    work_experience: HTMLInputElement;
    achievements: HTMLInputElement;
    projects: HTMLInputElement;
}

// Taking elements from HTML
const inputField = document.querySelector<HTMLFormElement>(".inputField") as HTMLFormElement;
const main = document.querySelector<HTMLElement>(".resume-builder")!;
const outputContainer = document.querySelector<HTMLElement>(".output_container")!;

let isHidden: boolean = true;

// Function to toggle between input form and resume preview
function hide(): void {
    if (isHidden) {
        // Hide the input form and show the resume preview
        main.style.display = "none";
        isHidden = false;

        // Cast inputField to FormInputs
        const inputs = inputField as unknown as FormInputs;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${inputs.name.value}</h1>
                    <h4>${inputs.title.value}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${inputs.objective.value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${inputs.skills.value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${inputs.academic_details.value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${inputs.contact.value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${inputs.work_experience.value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${inputs.achievements.value}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${inputs.projects.value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}

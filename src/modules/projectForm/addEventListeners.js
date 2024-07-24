import { addProject } from "../sideBarContent/projectData";

export function projectFormEventListeners() {
    const closeButton = document.querySelector(".menu-close");
    const dialog = document.querySelector(".project-dialog");

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    const projectForm = document.querySelector(".project-form");
    const projectFormInput = projectForm.querySelector("input[name='projectName']");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const projectName = projectFormInput.value;
        addProject(projectName);
        dialog.close();
        projectForm.reset();
    });
}
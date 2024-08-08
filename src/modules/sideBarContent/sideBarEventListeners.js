import { loadProjectForm } from "../projectForm/projectForm";

export function sideBarEventListeners() {
    loadProjectForm();

    const addNewProjectButton = document.querySelector(".add-project-button");
    const projectDialog = document.querySelector(".project-dialog");

    addNewProjectButton.addEventListener("click", () => {
        projectDialog.showModal();
    })
}
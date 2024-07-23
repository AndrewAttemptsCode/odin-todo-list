import { loadProjectForm } from "../projectForm/loadProjectForm";

export function sideBarEventListeners() {
    const addButton = document.querySelector(".add-project-button");

    loadProjectForm();

    addButton.addEventListener("click", () => {
        const dialog = document.querySelector(".project-dialog");
        dialog.showModal();
    });
}
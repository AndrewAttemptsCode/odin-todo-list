import { toDoList } from "../projectData/projectData";

export function projectFormEventListeners() {
    const projectForm = document.querySelector(".project-form");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const projectName = document.querySelector(".project-name").value;
        toDoList.addProject(projectName);
        projectDialog.close();
        projectForm.reset();
        // do something to update the project list next after clicking submit button on project form
    })

    const closeButton = document.querySelector(".menu-close");
    const projectDialog = document.querySelector(".project-dialog");
    closeButton.addEventListener("click", () => {
        projectDialog.close();
        projectForm.reset();
    })

}


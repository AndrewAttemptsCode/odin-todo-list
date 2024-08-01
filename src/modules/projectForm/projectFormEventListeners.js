import { toDoList } from "../projectData/projectData";
import { updateProjectsList } from "../sideBarContent/updateProjects";

export function projectFormEventListeners() {
    const projectForm = document.querySelector(".project-form");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const projectName = document.querySelector(".project-name").value;
        toDoList.addProject(projectName);
        updateProjectsList();
        projectDialog.close();
        projectForm.reset();
    })

    const closeButton = document.querySelector(".menu-close");
    const projectDialog = document.querySelector(".project-dialog");
    closeButton.addEventListener("click", () => {
        projectDialog.close();
        projectForm.reset();
    })

}


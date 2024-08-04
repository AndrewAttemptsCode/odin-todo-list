import { toDoList } from "../projectData/projectData";
import { updateProjectsList } from "../sideBarContent/updateProjects";

export function projectFormEventListeners() {
    const projectForm = document.querySelector(".project-form");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const projectName = document.querySelector(".project-name").value;
        
        const projects = toDoList.getProjects();
        const existingProject = projects.find(project => project.name === projectName);

        if (existingProject) {
            alert("A project with this name already exists.");
            projectForm.reset();
            return;
        }

        toDoList.addProject(projectName);
        updateProjectsList();
        projectDialog.close();
        projectForm.reset();
    })

    const closeButton = document.querySelector(".project-menu-close");
    const projectDialog = document.querySelector(".project-dialog");
    closeButton.addEventListener("click", () => {
        projectDialog.close();
        projectForm.reset();
    })

}


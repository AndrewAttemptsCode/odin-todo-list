import { toDoList } from "../projectData/projectData";

export function taskFormEventListeners() {
    const taskDialog = document.querySelector(".task-dialog");
    const taskForm = document.querySelector(".task-form");
    const closeButton = document.querySelector(".task-menu-close");
    
    closeButton.addEventListener("click", () => {
        taskDialog.close();
        taskForm.reset();
    })

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Test submit");
        // add form input values as a task to selected project
    })   
    
}
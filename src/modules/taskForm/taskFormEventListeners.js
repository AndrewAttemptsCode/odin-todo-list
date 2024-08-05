import { toDoList } from "../projectData/projectData";

let taskFormListenersAttached = false;

export function taskFormEventListeners() {
    if (taskFormListenersAttached) return;

    const taskDialog = document.querySelector(".task-dialog");
    const taskForm = document.querySelector(".task-form");
    const closeButton = document.querySelector(".task-menu-close");

    const closeHandler = () => {
        taskDialog.close();
        taskForm.reset();
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Test submit");
        // add form input values as a task to selected project   
    };

    closeButton.addEventListener("click", closeHandler);
    taskForm.addEventListener("submit", submitHandler);
        
    taskFormListenersAttached = true;
}
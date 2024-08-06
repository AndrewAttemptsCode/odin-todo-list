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

        const taskTitle = taskForm.querySelector("#taskTitle").value;
        const taskDescription = taskForm.querySelector("#taskDescription").value;
        const taskPriority = taskForm.querySelector("#taskPriority").value;
        const taskDueDate = taskForm.querySelector("#taskDueDate").value;

        toDoList.addTaskToSelectedProject(taskTitle, taskDescription, taskPriority, taskDueDate);
        closeHandler();
    };

    closeButton.addEventListener("click", closeHandler);
    taskForm.addEventListener("submit", submitHandler);
        
    taskFormListenersAttached = true;
}
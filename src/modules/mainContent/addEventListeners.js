import { loadTaskForm } from "../taskForm/loadTaskForm";
import { taskFormEventListeners } from "../taskForm/addEventListeners";

export function mainEventListeners(selectedProjectName) {
    const addTaskButton = document.querySelector(".add-task-container");
    
    loadTaskForm();
    
    addTaskButton.addEventListener("click", () => {
        const dialog = document.querySelector(".task-dialog");
        dialog.showModal();

        taskFormEventListeners(selectedProjectName);
    });

}
import { loadTaskForm } from "../taskForm/loadTaskForm";
import { taskFormEventListeners } from "../taskForm/addEventListeners";

export function mainEventListeners() {
    const addTaskButton = document.querySelector(".add-task-container");

    loadTaskForm();
    taskFormEventListeners();
    
    addTaskButton.addEventListener("click", () => {
        const dialog = document.querySelector(".task-dialog");
        dialog.showModal();
    });

}
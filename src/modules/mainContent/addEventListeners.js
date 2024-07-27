import { loadTaskForm } from "../taskForm/loadTaskForm";

export function taskFormEventListeners() {
    const addTaskButton = document.querySelector(".add-task-container");

    loadTaskForm();

    addTaskButton.addEventListener("click", () => {
        const dialog = document.querySelector(".task-dialog");
        dialog.showModal();
    });
}
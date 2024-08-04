import { loadTaskForm } from "../taskForm/taskForm";

export function mainContentEventListeners() {
    loadTaskForm();

    const addNewTaskButton = document.querySelector(".add-task-container");
    const taskDialog = document.querySelector(".task-dialog");

    addNewTaskButton.addEventListener("click", () => {
        taskDialog.showModal();
    })
}

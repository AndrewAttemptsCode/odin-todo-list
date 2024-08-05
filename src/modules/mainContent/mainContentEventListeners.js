import { loadTaskForm } from "../taskForm/taskForm";
import { taskFormEventListeners } from "../taskForm/taskFormEventListeners";

let taskFormLoaded = false;

export function mainContentEventListeners() {
    loadTaskForm();

    const addNewTaskButton = document.querySelector(".add-task-container");
    const taskDialog = document.querySelector(".task-dialog");

    if (!taskFormLoaded) {
        taskFormEventListeners();
        taskFormLoaded = true;
    }

    addNewTaskButton.addEventListener("click", () => {
        taskDialog.showModal();
    })
}

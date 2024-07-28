import { updateTasks } from "../mainContent/updateTasks";
import { addTaskToProject } from "../sideBarContent/projectData";

export function taskFormEventListeners(selectedProjectName) {
    const closeButton = document.querySelector(".task-dialog .menu-close");
    const dialog = document.querySelector(".task-dialog");

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    const taskForm = document.querySelector(".task-form");
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskTitle = taskForm.taskTitle.value;
        const taskDescription = taskForm.taskDescription.value;
        const taskPriority = taskForm.taskPriority.value;
        const taskDueDate = taskForm.taskDueDate.value;

        const task = {
            title: taskTitle,
            description: taskDescription,
            priority: taskPriority,
            dueDate: taskDueDate
        };

        addTaskToProject(selectedProjectName, task);
        updateTasks();
        dialog.close();
        taskForm.reset();
    });
}
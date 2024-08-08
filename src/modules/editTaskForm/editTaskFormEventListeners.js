import { updateTaskList } from "../mainContent/updateTasks";
import { toDoList } from "../projectData/projectData";

export function editTaskFormEventListeners(taskIndex) {

    const editTaskDialog = document.querySelector(".edit-task-dialog");
    const editTaskForm = document.querySelector(".edit-task-form");
    const editCloseButton = document.querySelector(".edit-task-menu-close");

    const closeHandler = () => {
        editTaskDialog.close();
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const taskTitle = editTaskForm.querySelector("#taskTitle").value;
        const taskDescription = editTaskForm.querySelector("#taskDescription").value;
        const taskPriority = editTaskForm.querySelector("#taskPriority").value;
        const taskDueDate = editTaskForm.querySelector("#taskDueDate").value;

        toDoList.editTaskOfSelectedProject(taskIndex, taskTitle, taskDescription, taskPriority, taskDueDate);
        closeHandler();
        updateTaskList();
    }

    editTaskForm.onsubmit = submitHandler;
    editCloseButton.onclick = closeHandler;

}


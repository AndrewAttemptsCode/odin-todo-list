// update dom display of tasks completed

import { toDoList } from "../projectData/projectData";
import removeTaskButtonImage from "../../images/delete.svg";

export function updateTaskList() {
    const mainContent = document.querySelector(".main-content");
    const tasks = toDoList.getTasksOfSelectedProject();

    let taskHeader = mainContent.querySelector(".task-header");

    if (!taskHeader && tasks.length > 0) {
        taskHeader = document.createElement("div");
        taskHeader.classList.add("task-header");
        mainContent.appendChild(taskHeader);

        const taskTitle = document.createElement("h1");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = "Tasks";
        taskHeader.appendChild(taskTitle);
    }

    let tasksContainer = mainContent.querySelector(".tasks-item-container");

    if (taskHeader && tasks.length === 0) {
        mainContent.removeChild(taskHeader);
        mainContent.removeChild(tasksContainer);
    }

    if (taskHeader && !tasksContainer) {
        tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks-item-container");
        mainContent.appendChild(tasksContainer);
    }
    
    if (taskHeader && tasksContainer) {
        tasksContainer.innerHTML = "";
    }

    tasks.forEach((task, index) => {
        const taskCard = document.createElement("div");
        taskCard.dataset.index = index;
        taskCard.classList.add("task-card");

        if (task.completed) {
            taskCard.classList.add("task-completed");
        }

        // Contents of each card: title, description, priority, due date
        const title = document.createElement("h2");
        title.classList.add("task-card-title");
        title.textContent = task.title;
        taskCard.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("task-card-description");
        description.textContent = task.description;
        taskCard.appendChild(description);

        const priority = document.createElement("p");
        priority.classList.add("task-card-priority");
        priority.textContent = `Priority: ${task.priority}`;
        taskCard.appendChild(priority);

        const dueDate = document.createElement("p");
        dueDate.classList.add("task-card-duedate");
        dueDate.textContent = `Due Date: ${task.dueDate}`;
        taskCard.appendChild(dueDate);

        const taskHoverControls = document.createElement("div");
        taskHoverControls.classList.add("task-hover-controls");
        taskCard.appendChild(taskHoverControls);

        const taskCheckBox = document.createElement("input");
        taskCheckBox.type = "checkbox";
        taskCheckBox.name = "taskComplete";
        taskCheckBox.checked = task.completed;
        taskCheckBox.title = "Mark task as complete";
        taskCheckBox.classList.add("task-checkbox");
        taskHoverControls.appendChild(taskCheckBox);

        const removeTaskButton = document.createElement("img");
        removeTaskButton.src = removeTaskButtonImage;
        removeTaskButton.title = "Remove task";
        removeTaskButton.classList.add("remove-task-button");
        taskHoverControls.appendChild(removeTaskButton);

        tasksContainer.appendChild(taskCard);

        removeTaskButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const taskIndex = Number(taskCard.dataset.index);
            toDoList.removeTask(taskIndex);
            updateTaskList();
        })

        taskCheckBox.addEventListener("change", () => {
            task.toggleComplete();
            updateTaskList();
        })
    })
}
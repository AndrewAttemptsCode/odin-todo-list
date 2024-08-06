// update dom display of tasks added/removed/completed
// if tasks length > 1 run this module

import { toDoList } from "../projectData/projectData";

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

    if (taskHeader && tasks.length === 0) {
        mainContent.removeChild(taskHeader);
    }
    
    let tasksContainer = mainContent.querySelector(".tasks-item-container");
    
    if (taskHeader && !tasksContainer) {
        tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks-item-container");
        mainContent.appendChild(tasksContainer);
    }
    
    if (taskHeader && tasksContainer) {
        tasksContainer.innerHTML = "";
    }

    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

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
        priority.textContent = task.priority;
        taskCard.appendChild(priority);

        const dueDate = document.createElement("p");
        dueDate.classList.add("task-card-duedate");
        dueDate.textContent = task.dueDate;
        taskCard.appendChild(dueDate);

        tasksContainer.appendChild(taskCard);
    })
}
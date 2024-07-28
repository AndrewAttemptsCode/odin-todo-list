import { getCurrentProject, getCurrentProjectName } from "../sideBarContent/projectData";

export function updateTasks() {
    const projectName = getCurrentProjectName();
    const project = getCurrentProject(projectName);

    if (!project || project.tasks.length === 0) {
        return;
    }

    const mainContent = document.querySelector(".main-content");

    let taskHeader = mainContent.querySelector(".task-header");
    if (!taskHeader) {
        taskHeader = document.createElement("div");
        taskHeader.classList.add("task-header");
        mainContent.appendChild(taskHeader);

        const taskTitle = document.createElement("h1");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = "Tasks";
        taskHeader.appendChild(taskTitle);
    }

    let tasksContainer = mainContent.querySelector(".tasks-container-wrapper");
    if (!tasksContainer) {
        tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks-container-wrapper");
        mainContent.appendChild(tasksContainer);
    }

    let tasksItemContainer = tasksContainer.querySelector(".tasks-item-container");
    if (!tasksItemContainer) {
        tasksItemContainer = document.createElement("div");
        tasksItemContainer.classList.add("tasks-item-container");
        tasksContainer.appendChild(tasksItemContainer);
    } else {
        tasksItemContainer.innerHTML = "";
    }

    project.tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        // Contents of each card: title, description, priority, due date
        const title = document.createElement("h2");
        title.classList.add("task-title");
        title.textContent = task.title;
        taskCard.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("task-description");
        description.textContent = task.description;
        taskCard.appendChild(description);

        const priority = document.createElement("p");
        priority.classList.add("task-priority");
        priority.textContent = task.priority;
        taskCard.appendChild(priority);

        const dueDate = document.createElement("p");
        dueDate.classList.add("task-duedate");
        dueDate.textContent = task.dueDate;
        taskCard.appendChild(dueDate);

        tasksItemContainer.appendChild(taskCard);
    });
}

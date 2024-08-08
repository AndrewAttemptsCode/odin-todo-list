import { toDoList } from "../projectData/projectData";

let editTaskDialog = null;

export function editTaskForm(taskIndex) {
    const task = toDoList.getTasksOfSelectedProject()[taskIndex];

    if (!editTaskDialog) {
        const toDoApp = document.querySelector("#todo-app");
        
        editTaskDialog = document.createElement("dialog");
        editTaskDialog.classList.add("edit-task-dialog");
        toDoApp.appendChild(editTaskDialog);

        const menuBar = document.createElement("div");
        menuBar.classList.add("menu-bar");
        editTaskDialog.appendChild(menuBar);

        const menuTitle = document.createElement("p");
        menuTitle.textContent = "Edit Task...";
        menuBar.appendChild(menuTitle);

        const close = document.createElement("button");
        close.classList.add("edit-task-menu-close");
        close.textContent = "x";
        close.title = "Close";
        menuBar.appendChild(close);

        const editTaskForm = document.createElement("form");
        editTaskForm.classList.add("edit-task-form");
        editTaskForm.method = "dialog";
        editTaskDialog.appendChild(editTaskForm);

        // Form Fields

        const labelTitle = document.createElement("label");
        labelTitle.setAttribute("for", "taskTitle");
        labelTitle.textContent = "Title:";
        editTaskForm.appendChild(labelTitle);

        const taskTitle = document.createElement("input");
        taskTitle.id = "taskTitle";
        taskTitle.classList.add("task-form-input");
        taskTitle.type = "text";
        taskTitle.name = "taskTitle";
        taskTitle.required = true;
        taskTitle.maxLength = 20;
        editTaskForm.appendChild(taskTitle);

        const labelDescription = document.createElement("label");
        labelDescription.setAttribute("for", "taskDescription");
        labelDescription.textContent = "Description:"
        editTaskForm.appendChild(labelDescription);

        const taskDescription = document.createElement("textarea");
        taskDescription.id = "taskDescription";
        taskDescription.classList.add("task-form-description");
        taskDescription.name = "taskDescription";
        taskDescription.required = false;
        taskDescription.maxLength = 100;
        editTaskForm.appendChild(taskDescription);

        const labelPriority = document.createElement("label");
        labelPriority.setAttribute("for", "taskPriority");
        labelPriority.textContent = "Priority:";
        editTaskForm.appendChild(labelPriority);

        const taskPriority = document.createElement("select");
        taskPriority.id = "taskPriority";
        taskPriority.classList.add("task-form-input");
        taskPriority.name = "taskPriority";
        taskPriority.required = true;
        editTaskForm.appendChild(taskPriority);

        const lowPriority = document.createElement("option");
        lowPriority.textContent = "Low";
        taskPriority.appendChild(lowPriority);

        const mediumPriority = document.createElement("option");
        mediumPriority.textContent = "Medium";
        taskPriority.appendChild(mediumPriority);

        const highPriority = document.createElement("option");
        highPriority.textContent = "High";
        taskPriority.appendChild(highPriority);

        const labelDate = document.createElement("label");
        labelDate.setAttribute("for", "taskDueDate");
        labelDate.textContent = "Due Date:";
        editTaskForm.appendChild(labelDate);

        const taskDueDate = document.createElement("input");
        taskDueDate.type = "date";
        taskDueDate.id = "taskDueDate";
        taskDueDate.classList.add("task-form-input");
        taskDueDate.name = "taskDueDate";
        taskDueDate.required = true;
        editTaskForm.appendChild(taskDueDate);

        const taskButtonSubmit = document.createElement("button");
        taskButtonSubmit.type = "submit";
        taskButtonSubmit.classList.add("task-submit-button");
        taskButtonSubmit.textContent = "Edit task";
        editTaskForm.appendChild(taskButtonSubmit);
    }

    editTaskDialog.querySelector("#taskTitle").value = task.title;
    editTaskDialog.querySelector("#taskDescription").value = task.description;
    editTaskDialog.querySelector("#taskPriority").value = task.priority;
    editTaskDialog.querySelector("#taskDueDate").value = task.dueDate;
    
}
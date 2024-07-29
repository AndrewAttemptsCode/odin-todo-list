import { updateProjects } from "./updateProjects";

let projectList = [];

export function addProject(projectName) {
    projectList.push({ name: projectName, tasks: [] });
    updateProjects();
}

export function addTaskToProject(projectName, task) {
    const project = projectList.find(proj => proj.name === projectName);
    project.tasks.push(task);
}

export function removeProject(index) {
    projectList.splice(index, 1);
    updateProjects();
}

export function getProjects() {
    return projectList;
}

export function getCurrentProject(projectName) {
    return projectList.find(proj => proj.name === projectName);
}
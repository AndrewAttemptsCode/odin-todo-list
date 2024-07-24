import { updateProjects} from "./updateProjects";

let projectList = [];

export function addProject(projectName) {
    projectList.push({name: projectName});
    updateProjects();
}

export function removeProject(index) {
    projectList.splice(index, 1);
    updateProjects();
}

export function getProjects() {
    return projectList;
}
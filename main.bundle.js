(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),a=n.n(o),r=n(314),s=n.n(r)()(a());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),s.push([e.id,'/* Fonts */\n    /* Roboto */\n    /* Montserrat */\n\n/* CSS Reset */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    font-family: \'Roboto\', sans-serif;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n\n#root, #__next {\n    isolation: isolate;\n}\n\n/* Template Section*/\n\n#todo-app {\n    position: relative;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 300px 3fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n        "header header"\n        "side-bar main-content";\n}\n\n.header {\n    grid-area: header;\n    background: #475569;\n    padding: 8px;\n}\n\n.side-bar {\n    grid-area: side-bar;\n    background: #64748b;\n}\n\n.main-content {\n    grid-area: main-content;\n    background: #94a3b8;\n}\n\n/* Header Section */\n\n.logo-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.logo-image {\n    width: 70px;\n    height: auto;\n}\n\n.logo-text {\n    font-family: "Montserrat";\n    font-size: 50px;\n    color: #f8fafc;\n}\n\n/* Side Bar Section */\n\n.sidebar-controls-container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 10px 0;\n}\n\n.sidebar-title {\n    color: #f1f5f9;\n}\n\n.add-project-button,\n.add-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 50%;\n    font-size: 25px;\n    font-weight: bold;\n    background: #f1f5f9;\n    color: #334155;\n    transition: background 0.5s ease, color 0.5s ease;\n    cursor: pointer;\n}\n\n.add-project-button:hover {\n    background: #334155;\n    color: #f1f5f9;\n}\n\n.project-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 20px 8px 0;\n    padding: 8px 16px;\n    border-radius: 0 10px 10px 0;\n    background: #94a3b8;\n    color: #f1f5f9;\n    font-size: 20px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.project-item.selected {\n    background: #334155;\n}\n\n.project-hover-controls {\n    cursor: pointer;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.project-item:hover .project-hover-controls {\n    opacity: 1;\n    visibility: visible;\n} \n\n/* Add Project Dialog */\n\n.project-dialog,\n.task-dialog,\n.edit-task-dialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 0;\n    border: none;\n    outline: none;\n}\n\n.menu-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #334155;\n    color: #f1f5f9;\n    padding-left: 5px;\n}\n\n.project-menu-close,\n.task-menu-close,\n.edit-task-menu-close {\n    border: none;\n    background: #334155;\n    color: #f1f5f9;\n    font-size: 24px;\n    padding: 0 12px;\n}\n\n.project-form {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    background: #f1f5f9;\n}\n\n.project-menu-close:hover,\n.task-menu-close:hover,\n.edit-task-menu-close:hover {\n    background: #ff8080;\n    cursor: pointer;\n}\n\nbutton[type="submit"] {\n    border: 1px solid #334155;\n    border-radius: 5px;\n    margin-top: 15px;\n}\n\nbutton[type="submit"]:hover {\n    background: #22c55e7c;\n    cursor: pointer;\n}\n\n/* Main Content */\n\n.main-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 20px;\n    padding: 8px 16px;\n    background: #475569;\n    border-radius: 5px;\n}\n\n.main-project-title {\n    color: #f8fafc;\n    font-size: 4rem;\n}\n\n.add-task-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    border: none;\n    padding: 8px;\n    gap: 10px;\n    background: #334155;\n    color: #f1f5f9;\n    cursor: pointer;\n    font-weight: bold;\n    transition: background 0.3s ease, color 0.3s ease;\n}\n\n.add-task-container:hover {\n    color: #334155;\n    background: #f1f5f9;\n}\n\n.add-task-container:hover .add-task-button {\n    background: #334155;\n    color: #f1f5f9;\n}\n\n.task-header {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 20px 20px 0 20px;\n    padding: 8px 16px;\n    color: #f1f5f9;\n    background: #475569;\n    border-radius: 5px;\n}\n\n.tasks-item-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin: 20px;\n}\n\n.task-card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 375px;\n    padding: 16px;\n    background: #f1f5f9;\n    border-radius: 5px;\n}\n\n.task-card-title {\n    display: flex;\n    justify-content: center;\n    color: #334155;\n}\n\n.task-card-description {\n    height: 100px;\n    border: none;\n    background: transparent;\n}\n\n.task-hover-controls {\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3 ease, visibility 0.3s ease;\n}\n\n.task-card:hover .task-hover-controls {\n    opacity: 1;\n    visibility: visible;\n} \n\n.remove-task-button,\n.edit-task-button {\n    cursor: pointer;\n    height: 36px;\n    width: 36px;\n}\n\n.task-checkbox {\n    cursor: pointer;\n    height: 24px;\n    width: 24px;\n}\n\n.task-completed {\n    text-decoration: line-through;\n}\n\n/* Add Task Dialog */\n\n.task-form,\n.edit-task-form {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    background: #f1f5f9;\n    min-width: 245px;\n}\n\n.task-form label,\n.task-form button {\n    margin-top: 15px;\n}\n\n.task-form-input,\n.project-name {\n    height: 40px;\n    padding: 8px;\n    font-size: 16px;\n    border: 1px solid #94a3b8;\n    border-radius: 4px;\n    background: #f1f5f9;\n}\n\n.task-form-description {\n    padding: 8px;\n    font-size: 16px;\n    border: 1px solid #94a3b8;\n    border-radius: 4px;\n    background: #f1f5f9;\n}',""]);const c=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],c=0;c<e.length;c++){var i=e[c],d=o.base?i[0]+o.base:i[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var c=n(r[s]);t[c].references--}for(var i=o(e,a),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=i}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var o=n(72),a=n.n(o),r=n(825),s=n.n(r),c=n(659),i=n.n(c),d=n(56),l=n.n(d),p=n(540),u=n.n(p),m=n(113),h=n.n(m),f=n(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=u(),a()(f.A,g),f.A&&f.A.locals&&f.A.locals;const k=n.p+"bf9035e2142096886fb9.svg";const b=n.p+"9efc2cfaa86c571aa751.svg",x=n.p+"53895c6e080fa38b0b41.svg";let v=null;function y(){const e=document.querySelector(".main-content"),t=T.getTasksOfSelectedProject();let n=e.querySelector(".task-header");if(!n&&t.length>0){n=document.createElement("div"),n.classList.add("task-header"),e.appendChild(n);const t=document.createElement("h1");t.classList.add("task-title"),t.textContent="Tasks",n.appendChild(t)}let o=e.querySelector(".tasks-item-container");n&&0===t.length&&(e.removeChild(n),e.removeChild(o)),n&&!o&&(o=document.createElement("div"),o.classList.add("tasks-item-container"),e.appendChild(o)),n&&o&&(o.innerHTML=""),t.forEach(((e,t)=>{const n=document.createElement("div");n.dataset.index=t,n.classList.add("task-card"),e.completed&&n.classList.add("task-completed");const a=document.createElement("h2");a.classList.add("task-card-title"),a.textContent=e.title,n.appendChild(a);const r=document.createElement("p");r.classList.add("task-card-description"),r.textContent=e.description,n.appendChild(r);const s=document.createElement("p");s.classList.add("task-card-priority"),s.textContent=`Priority: ${e.priority}`,n.appendChild(s);const c=document.createElement("p");c.classList.add("task-card-duedate"),c.textContent=`Due Date: ${e.dueDate}`,n.appendChild(c);const i=document.createElement("div");i.classList.add("task-hover-controls"),n.appendChild(i);const d=document.createElement("input");d.type="checkbox",d.name="taskComplete",d.checked=e.completed,d.title="Mark task as complete",d.classList.add("task-checkbox"),i.appendChild(d);const l=document.createElement("img");l.src=x,l.title="Edit task",l.classList.add("edit-task-button"),i.appendChild(l);const p=document.createElement("img");p.src=b,p.title="Remove task",p.classList.add("remove-task-button"),i.appendChild(p),o.appendChild(n),p.addEventListener("click",(e=>{e.stopPropagation();const t=Number(n.dataset.index);T.removeTask(t),y()})),d.addEventListener("change",(()=>{e.toggleComplete(),T.saveToLocalStorage(),y()})),l.addEventListener("click",(()=>{const e=Number(n.dataset.index);!function(e){const t=T.getTasksOfSelectedProject()[e];if(!v){const e=document.querySelector("#todo-app");v=document.createElement("dialog"),v.classList.add("edit-task-dialog"),e.appendChild(v);const t=document.createElement("div");t.classList.add("menu-bar"),v.appendChild(t);const n=document.createElement("p");n.textContent="Edit Task...",t.appendChild(n);const o=document.createElement("button");o.classList.add("edit-task-menu-close"),o.textContent="x",o.title="Close",t.appendChild(o);const a=document.createElement("form");a.classList.add("edit-task-form"),a.method="dialog",v.appendChild(a);const r=document.createElement("label");r.setAttribute("for","taskTitle"),r.textContent="Title:",a.appendChild(r);const s=document.createElement("input");s.id="taskTitle",s.classList.add("task-form-input"),s.type="text",s.name="taskTitle",s.required=!0,s.maxLength=20,a.appendChild(s);const c=document.createElement("label");c.setAttribute("for","taskDescription"),c.textContent="Description:",a.appendChild(c);const i=document.createElement("textarea");i.id="taskDescription",i.classList.add("task-form-description"),i.name="taskDescription",i.required=!1,i.maxLength=100,a.appendChild(i);const d=document.createElement("label");d.setAttribute("for","taskPriority"),d.textContent="Priority:",a.appendChild(d);const l=document.createElement("select");l.id="taskPriority",l.classList.add("task-form-input"),l.name="taskPriority",l.required=!0,a.appendChild(l);const p=document.createElement("option");p.textContent="Low",l.appendChild(p);const u=document.createElement("option");u.textContent="Medium",l.appendChild(u);const m=document.createElement("option");m.textContent="High",l.appendChild(m);const h=document.createElement("label");h.setAttribute("for","taskDueDate"),h.textContent="Due Date:",a.appendChild(h);const f=document.createElement("input");f.type="date",f.id="taskDueDate",f.classList.add("task-form-input"),f.name="taskDueDate",f.required=!0,a.appendChild(f);const g=document.createElement("button");g.type="submit",g.classList.add("task-submit-button"),g.textContent="Edit task",a.appendChild(g)}v.querySelector("#taskTitle").value=t.title,v.querySelector("#taskDescription").value=t.description,v.querySelector("#taskPriority").value=t.priority,v.querySelector("#taskDueDate").value=t.dueDate}(e),document.querySelector(".edit-task-dialog").showModal(),function(e){const t=document.querySelector(".edit-task-dialog"),n=document.querySelector(".edit-task-form"),o=document.querySelector(".edit-task-menu-close"),a=()=>{t.close()};n.onsubmit=t=>{t.preventDefault();const o=n.querySelector("#taskTitle").value,r=n.querySelector("#taskDescription").value,s=n.querySelector("#taskPriority").value,c=n.querySelector("#taskDueDate").value;T.editTaskOfSelectedProject(e,o,r,s,c),a(),y()},o.onclick=a}(e)}))}))}let C=!1,j=!1;function E(){!function(){const e=document.querySelector("#todo-app"),t=document.createElement("dialog");t.classList.add("task-dialog"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-bar"),t.appendChild(n);const o=document.createElement("p");o.textContent="Create new Task...",n.appendChild(o);const a=document.createElement("button");a.classList.add("task-menu-close"),a.textContent="x",a.title="Close",n.appendChild(a);const r=document.createElement("form");r.classList.add("task-form"),r.method="dialog",t.appendChild(r);const s=document.createElement("label");s.setAttribute("for","taskTitle"),s.textContent="Title:",r.appendChild(s);const c=document.createElement("input");c.id="taskTitle",c.classList.add("task-form-input"),c.type="text",c.name="taskTitle",c.required=!0,c.maxLength=20,r.appendChild(c);const i=document.createElement("label");i.setAttribute("for","taskDescription"),i.textContent="Description:",r.appendChild(i);const d=document.createElement("textarea");d.id="taskDescription",d.classList.add("task-form-description"),d.name="taskDescription",d.required=!1,d.maxLength=100,r.appendChild(d);const l=document.createElement("label");l.setAttribute("for","taskPriority"),l.textContent="Priority:",r.appendChild(l);const p=document.createElement("select");p.id="taskPriority",p.classList.add("task-form-input"),p.name="taskPriority",p.required=!0,r.appendChild(p);const u=document.createElement("option");u.textContent="Low",p.appendChild(u);const m=document.createElement("option");m.textContent="Medium",p.appendChild(m);const h=document.createElement("option");h.textContent="High",p.appendChild(h);const f=document.createElement("label");f.setAttribute("for","taskDueDate"),f.textContent="Due Date:",r.appendChild(f);const g=document.createElement("input");g.type="date",g.id="taskDueDate",g.classList.add("task-form-input"),g.name="taskDueDate",g.required=!0,r.appendChild(g);const k=document.createElement("button");k.type="submit",k.classList.add("task-submit-button"),k.textContent="Add task",r.appendChild(k)}();const e=document.querySelector(".add-task-container"),t=document.querySelector(".task-dialog");j||(function(){if(C)return;const e=document.querySelector(".task-dialog"),t=document.querySelector(".task-form"),n=document.querySelector(".task-menu-close"),o=()=>{e.close(),t.reset()};n.addEventListener("click",o),t.addEventListener("submit",(e=>{e.preventDefault();const n=t.querySelector("#taskTitle").value,a=t.querySelector("#taskDescription").value,r=t.querySelector("#taskPriority").value,s=t.querySelector("#taskDueDate").value;T.addTaskToSelectedProject(n,a,r,s),o(),y()})),C=!0}(),j=!0),e.addEventListener("click",(()=>{t.showModal()}))}function L(){const e=document.querySelector(".main-content");e.innerHTML="";const t=document.createElement("div");t.classList.add("main-header"),e.appendChild(t);const n=document.createElement("h1");n.classList.add("main-project-title"),n.textContent=T.selectedProject.name,t.appendChild(n);const o=document.createElement("div");o.classList.add("add-task-container"),o.title="Add new task",t.appendChild(o);const a=document.createElement("p");a.classList.add("add-task-button-text"),a.textContent="Add Task",o.appendChild(a);const r=document.createElement("button");r.classList.add("add-task-button"),r.textContent="+",o.appendChild(r)}class S{constructor(e,t,n,o){this.title=e,this.description=t,this.priority=n,this.dueDate=o,this.completed=!1}toggleComplete(){this.completed=!this.completed}edit(e,t,n,o){this.title=e,this.description=t,this.priority=n,this.dueDate=o}}class P{constructor(e){this.name=e,this.tasks=[]}addTask(e,t,n,o){const a=new S(e,t,n,o);this.tasks.push(a)}editTask(e,t,n,o,a){this.tasks[e].edit(t,n,o,a)}getTasks(){return this.tasks}}const T=new class{constructor(){this.projects=[],this.selectedProject=null}addProject(e){const t=new P(e);this.projects.push(t),this.saveToLocalStorage()}removeProject(e){this.projects.splice(e,1),this.saveToLocalStorage()}removeTask(e){this.selectedProject.tasks.splice(e,1),this.saveToLocalStorage()}selectProject(e){this.selectedProject=this.projects.find((t=>t.name===e)),this.saveToLocalStorage()}addTaskToSelectedProject(e,t,n,o){this.selectedProject?(this.selectedProject.addTask(e,t,n,o),this.saveToLocalStorage()):console.log("No project selected")}editTaskOfSelectedProject(e,t,n,o,a){this.selectedProject?(this.selectedProject.editTask(e,t,n,o,a),this.saveToLocalStorage()):console.log("No project selected")}getProjects(){return this.projects}getTasksOfSelectedProject(){return this.selectedProject?this.selectedProject.getTasks():(console.log("No project selected"),[])}saveToLocalStorage(){const e={projects:this.projects,selectedProject:this.selectedProject?this.selectedProject.name:null};localStorage.setItem("toDoList",JSON.stringify(e))}loadFromLocalStorage(){const e=localStorage.getItem("toDoList");if(e){const t=JSON.parse(e);this.projects=[],t.projects.forEach((e=>{const t=new P(e.name);e.tasks.forEach((e=>{const n=new S(e.title,e.description,e.priority,e.dueDate);n.completed=e.completed,t.tasks.push(n)})),this.projects.push(t)})),t.selectedProject&&(this.selectedProject=this.projects.find((e=>e.name===t.selectedProject)),this.selectedProject&&(L(),y(),E()))}}};function w(){const e=T.getProjects(),t=document.querySelector(".project-container");t.innerHTML="",e.forEach(((e,n)=>{const o=document.createElement("div");o.classList.add("project-item"),o.textContent=e.name,o.dataset.index=n,t.appendChild(o);const a=document.createElement("div");a.classList.add("project-hover-controls"),o.appendChild(a);const r=document.createElement("img");r.src=b,r.title="Remove project",r.classList.add("remove-project-button"),a.appendChild(r),r.addEventListener("click",(e=>{e.stopPropagation();const t=Number(o.dataset.index),n=T.getProjects()[t].name;T.removeProject(t),w(),T.selectedProject&&T.selectedProject.name===n&&(T.selectedProject=null,document.querySelector(".main-content").innerHTML="")})),o.addEventListener("click",(()=>{T.selectProject(e.name),L(),E(),y()}))}))}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("#todo-app"),t=document.createElement("div");t.classList.add("header"),e.appendChild(t);const n=document.createElement("div");n.classList.add("side-bar"),e.appendChild(n);const o=document.createElement("div");o.classList.add("main-content"),e.appendChild(o)}(),function(){const e=document.querySelector(".header"),t=document.createElement("div");t.classList.add("logo-container"),e.appendChild(t);const n=document.createElement("img");n.classList.add("logo-image"),n.src=k,n.alt="checklist image",t.appendChild(n);const o=document.createElement("h1");o.classList.add("logo-text"),o.textContent="Project Planner",t.appendChild(o)}(),function(){const e=document.querySelector(".side-bar"),t=document.createElement("div");t.classList.add("sidebar-controls-container"),e.appendChild(t);const n=document.createElement("h1");n.classList.add("sidebar-title"),n.textContent="Projects",t.appendChild(n);const o=document.createElement("button");o.classList.add("add-project-button"),o.textContent="+",o.title="Add new project",t.appendChild(o);const a=document.createElement("div");a.classList.add("project-container"),e.appendChild(a)}(),function(){!function(){const e=document.querySelector("#todo-app"),t=document.createElement("dialog");t.classList.add("project-dialog"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-bar"),t.appendChild(n);const o=document.createElement("p");o.textContent="Create new Project...",n.appendChild(o);const a=document.createElement("button");a.classList.add("project-menu-close"),a.textContent="x",a.title="Close",n.appendChild(a);const r=document.createElement("form");r.classList.add("project-form"),r.method="dialog",t.appendChild(r);const s=document.createElement("label");s.textContent="Project Name: ",r.appendChild(s);const c=document.createElement("input");c.classList.add("project-name"),c.type="text",c.name="projectName",c.required=!0,c.maxLength=20,r.appendChild(c);const i=document.createElement("button");i.type="submit",i.classList.add("project-submit-button"),i.textContent="Add project",r.appendChild(i)}();const e=document.querySelector(".add-project-button"),t=document.querySelector(".project-dialog");e.addEventListener("click",(()=>{t.showModal()}))}(),function(){const e=document.querySelector(".project-form");e.addEventListener("submit",(t=>{t.preventDefault();const o=document.querySelector(".project-name").value;if(T.getProjects().find((e=>e.name===o)))return alert("A project with this name already exists."),void e.reset();T.addProject(o),w(),n.close(),e.reset()}));const t=document.querySelector(".project-menu-close"),n=document.querySelector(".project-dialog");t.addEventListener("click",(()=>{n.close(),e.reset()}))}(),T.loadFromLocalStorage(),w()}))})();
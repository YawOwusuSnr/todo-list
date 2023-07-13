import Task from './task.js'
import Project from './project.js'

const newProjectButton = document.getElementById('new_project')
newProjectButton.addEventListener('click', () => {
    togglePrompt()
})


// Folder holds all projects
const folder = (() => {
    const header = document.getElementById('header')
    const li = document.getElementById('nav')
    header.appendChild(li)

    const projectsArray = []

    const listProjects = () => {
    projectsArray.forEach(project => {
        const projlistItem = document.createElement('li')
        const projbutton = document.createElement('button')
        projbutton.innerHTML = project.getName()
        projbutton.setAttribute('class', `projects`)
        projbutton.setAttribute('id', `${project.getName()}`)
        projlistItem.appendChild(projbutton)
        li.appendChild(projlistItem)
        console.log('listed')
    });
    }   

    const addProject = (proj) => {
        projectsArray.push(proj)
        listProjects()
    }

    return {projectsArray, addProject}
})();


const new_Task = Task('Download odin', 'Make sure', 'Important', 'tomorrow')
const newProj = Project('Coding', 'Everything i need to code')


newProj.addTaskToProject(new_Task)

folder.addProject(newProj)


const projects = document.querySelectorAll('.projects')

projects.forEach((project) => {
    project.addEventListener('click', () => {
        folder.projectsArray[0].renderTasks();
    });
});

function newTask() {
    const form = document.getElementById('add_a_book')
    const new_title = form.elements[0].value
    const new_description = form.elements[1].value
    const new_due = form.elements[2].value
    
    const task = Task(new_title, new_description, new_due, 'important')
    newProj.addTaskToProject(task)
    newProj.renderTasks()
    newProj.togglePrompt()
    form.reset()
}

const submitTask = document.getElementById('add_book')
submitTask.addEventListener('click', newTask)

console.log(newProj.toDo)

function askForProject() {
    // const popup = document.createElement('div')
    // const overlay = document.createElement('div')
    // const form_content = document.createElement('div')

    // const greet = document.createElement('h1')
    // greet.textContent = 'Add Project'
    // const project_form = document.createElement('form')

    // const label1 = document.createElement('label')
    // const new_project_name = document.createElement()

    // const label2 = document.createElement('label')
    // const label3 = document.createElement('label')

    const form1 = document.getElementById('add_a_form')

    const new_title1 = form1.elements[0].value
    const new_description1 = form1.elements[1].value
    
    const task = Project(new_title1, new_description1)
    newProj.togglePrompt()
    form1.reset()
}
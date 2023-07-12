import Task from './task.js'
import Project from './project.js'

const content = document.getElementById('content')


const folder = (() => {
    const header = document.getElementById('header')
    const li = document.createElement('ul')
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

    });
    }   

    const addProject = (proj) => {
        projectsArray.push(proj)
        listProjects()
    }

    


    return {projectsArray, addProject}
})();


const newTask = Task('Download odin', 'Make sure', 'Important', 'tomorrow')
const newProj = Project('Coding', 'Everything i need to code')

newProj.addTaskToProject(newTask)

folder.addProject(newProj)


const projects = document.querySelectorAll('.projects')

projects.forEach((project) => {
    project.addEventListener('click', () => {
        const tasks = folder.projectsArray[0].renderTasks()
        content.appendChild(tasks) ;
    });
});
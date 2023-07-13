import Task from './task.js'
const content = document.getElementById('content')


const Project = (name, des) => {
    const getName = () => name   
    const getDes = () => des
    const togglePrompt = () => {
        document.getElementById("popup-1").classList.toggle("active");
    };

    const toDo = []
    
    const addTaskToProject = (task) => {
        toDo.push(task)
        console.log('done adding')
    }

    const renderTasks = () => {
        content.innerHTML = "";
        const list = document.createElement('div')
        list.classList.add('items')
    
        toDo.forEach((spec) => {
            const card = document.createElement('div')
            const head = document.createElement('div')
            const body = document.createElement('div')
            card.classList.add('card')
    
            head.textContent = `${spec.getTitle()}`
            body.textContent = `${spec.getDescription()}`

            card.appendChild(head)
            card.appendChild(body)
            
            list.appendChild(card)
        })
    
        const newTaskButton = document.createElement('button')
        newTaskButton.innerText = 'New Note'

        newTaskButton.addEventListener('click', () => {
            togglePrompt()
        })

        list.appendChild(newTaskButton)
        content.appendChild(list)
    }
    


    

    return {getName, getDes, addTaskToProject, toDo, renderTasks, togglePrompt}
}


export default Project


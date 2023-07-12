import Task from './task.js'

const Project = (name, des) => {
    const getName = () => name   
    const getDes = () => des

    const toDo = []
    
    const addTaskToProject = (task) => {
        toDo.push(task)
    }

    const renderTasks = () => {
        const list = document.createElement('div')
        list.classList.add('items')

        toDo.forEach((spec) => {
            const card = document.createElement('div')
            const head = document.createElement('div')
            const body = document.createElement('div')
            card.classList.add('card')

            card.appendChild(head)
            card.appendChild(body)

            head.textContent = spec.getTitle()
            body.textContent = spec.getDescription()
            list.appendChild(card)
        })
        return list
    }



    return {getName, getDes, addTaskToProject, toDo, renderTasks}
}

export default Project

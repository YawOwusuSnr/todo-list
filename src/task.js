const Task = (title, description, dueDate, priority) => {
    const getTitle = () => title
    const getDescription  = () => description;
    const getDue = () => dueDate;
    const getPriority =() => priority

    return {getDescription, getDue, getPriority, getTitle}
}

export default Task
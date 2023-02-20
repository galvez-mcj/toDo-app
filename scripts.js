const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

let checkUncheck = "unchecked"

addTask.addEventListener("click", () => {
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkBtn.classList.add('checkTask')
    task.appendChild(checkBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteBtn.classList.add('deleteTask')
    task.appendChild(deleteBtn)

    if (inputTask.value === "") {
        alert('Please enter a task.')
    } else {
        taskContainer.appendChild(task)
    }

    inputTask.value = ""

    checkBtn.addEventListener("click", () => {
        if (checkUncheck === "unchecked") {
            checkBtn.parentElement.style.textDecoration = "line-through"
            checkBtn.style.backgroundColor = "rgb(0, 149, 255)"
            checkBtn.style.color = "whitesmoke"
            checkUncheck = "checked"
        } else {
            checkBtn.parentElement.style.textDecoration = "none"
            checkBtn.style.backgroundColor = "whitesmoke"
            checkBtn.style.color = "rgb(0, 149, 255)"
            checkUncheck = "unchecked"
        }
        
    })

    deleteBtn.addEventListener("click", (e) => {
        let target = e.target
        target.parentElement.parentElement.remove()
    })
})
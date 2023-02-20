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
    checkBtn.classList.add('btn', 'checkTask')
    task.appendChild(checkBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteBtn.classList.add('btn', 'deleteTask')
    task.appendChild(deleteBtn)

    if (inputTask.value === "") {
        alert('Please enter a task.')
    } else {
        taskContainer.appendChild(task)
    }

    inputTask.value = ""

    console.log(task)

    checkBtn.addEventListener("click", () => {
        if (checkUncheck === "unchecked") {
            checkBtn.parentElement.style.textDecoration = "line-through"
            checkBtn.parentElement.style.color = "darkgray"
            checkBtn.classList.remove('checkTask')
            checkBtn.classList.add('uncheckTask')
            checkUncheck = "checked"
        } else {
            checkBtn.parentElement.style.textDecoration = "none"
            checkBtn.parentElement.style.color = "black"
            checkBtn.classList.remove('uncheckTask')
            checkBtn.classList.add('checkTask')
            checkUncheck = "unchecked"
        }
    })

    deleteBtn.addEventListener("click", () => {
        task.remove()
    })
})
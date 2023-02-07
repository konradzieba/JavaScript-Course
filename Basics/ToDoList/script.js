let todoInput
let errorInfo
let addBtn
let ulList
let newTodo
let popup
let popupInfo
let todoToEdit
let popupAddBtn
let popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
}

const addNewTodo = () => {
    if (todoInput.value !== ''){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value


        createTools()
        ulList.append(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

const createTools = () => {
    const div = document.createElement('div')
    div.classList.add('tools')
    newTodo.append(div)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('delete')
    btnDelete.innerHTML = '<i class="fas fa-times"></i>'

    div.append(completeBtn, editBtn, btnDelete)
}

const checkClick = (e) => {
    if (e.target.matches('.complete')) {
      e.target.closest('li').classList.toggle('completed')
      e.target.classList.toggle('completed')
    }
    else if (e.target.matches('.edit')) {
        console.log('edit');
    }
    else if (e.target.matches('.delete')) {
        console.log('delete');
    }
}


document.addEventListener('DOMContentLoaded', main)

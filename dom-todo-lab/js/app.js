const input = document.getElementById('input')
const button = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')


button.addEventListener('click', function(event) {
  if(input.value === "") return
  const newTodo = document.createElement('li')
  newTodo.textContent = input.value
  todoList.appendChild(newTodo)
  input.put.value = ''
})
console.log(button)
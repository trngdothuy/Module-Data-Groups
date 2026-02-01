function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((item) => {
    displayTodo(item)
  })
}

function displayTodo(item) {
  let list = document.getElementById("todo-list");
  let taskDiv = document.createElement("div")
  taskDiv.id = "task-card"
  let task = document.createElement("li")
  let completedButton = document.createElement('button')
  completedButton.id = 'completed-button'
  let deleteButton = document.createElement('button')
  deleteButton.id = 'delete-button'

  task.textContent = item.task
    if (!item.completed) {
      completedButton.textContent = "☑️"
    } else {
      task.classList.add("completed")
      completedButton.textContent = "✅"
    }
    deleteButton.textContent = '❌'

    taskDiv.append(task, completedButton, deleteButton)
    list.append(taskDiv)

  completedButton.addEventListener("click", () => {
      if (completedButton.textContent === "☑️") {
        task.classList.add("completed")
        completedButton.textContent = "✅"
        item.completed = 'true'
      } else {
        task.classList.remove("completed")
        completedButton.textContent = "☑️"
        item.completed = 'false'
      }
      console.log(todos)
    })

  deleteButton.addEventListener("click", () => {
    deleteTodo(item, todos, taskDiv)
  })
}

function deleteTodo(item, todos, taskDiv) {
  const index = todos.indexOf(item)
    if (index > -1) {
      todos.splice(index, 1)
    } else {
      todos.pop()
    }
    taskDiv.innerText = ""
    console.log(todos)
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.querySelector("input")
  todos.push({ task: input.value, completed: false })
  console.log(todos)
  displayTodo({ task: input.value, completed: false }) 
  input.value = ""
}

const addTodoButton = document.getElementById("add-todo");
addTodoButton.addEventListener("click", addNewTodo)

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

}

const removeAllButton = document.getElementById("remove-all-completed");
removeAllButton.addEventListener("click", deleteAllCompletedTodos)
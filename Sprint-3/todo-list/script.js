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
  let deadline = document.createElement("div")
  let completedButton = document.createElement('button')
  completedButton.id = 'completed-button'
  let deleteButton = document.createElement('button')
  deleteButton.id = 'delete-button'

  task.textContent = item.task

  // display deadline countdown
  if (item.deadline) {
    const deadlineDate = new Date(item.deadline.value).getTime();
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const gap = deadlineDate - now; // miliseconds
      const daysLeft = Math.floor(gap / (1000 * 60 * 60 * 24) + 1)
      if (Number(daysLeft) <= 0) {
        clearInterval(countdown);
        deadline.innerHTML = 'EXPIRED'
      } else {
        deadline.innerHTML = `${daysLeft} day(s) left`
      }
    }, 1000)
  }

  // set 2 buttons each task
  if (!item.completed) {
    completedButton.textContent = "☑️"
  } else {
    task.classList.add("completed")
    completedButton.textContent = "✅"
  }
  deleteButton.textContent = '🗑️'

  // add to HTML
  taskDiv.append(task, completedButton, deleteButton, deadline)
  list.append(taskDiv)

  // ✅ button clicked
  completedButton.addEventListener("click", () => {
    const index = todos.findIndex(e => e.task === item.task)
    if (completedButton.textContent === "☑️") {
      task.classList.add("completed")
      completedButton.textContent = "✅"

      if (index > -1) {
        todos[index]["completed"] = 'true'
      } else (
        console.log("not found this task in the todos")
      )
    } else {
      task.classList.remove("completed")
      completedButton.textContent = "☑️"
      if (index > -1) {
        todos[index]["completed"] = 'false'
      } else (
        console.log("not found this task in the todos")
      )
    }
    })

  // 🗑️ button clicked
  deleteButton.addEventListener("click", () => {
    deleteTodo(item.task, todos, taskDiv)
  })
}

function deleteTodo(taskName, todos, taskDiv) {
  const index = todos.findIndex(e => e.task === taskName)
    if (index > -1) {
      todos.splice(index, 1)
    } else {
      console.log("not found this task in the todos")
    }
    taskDiv.remove()
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
  const input = document.getElementById("todo-input")
  const deadline = document.getElementById("deadline")
  todos.push({ task: input.value, completed: false, deadline: deadline })
  displayTodo({ task: input.value, completed: false, deadline: deadline }) 
  input.value = ""
}

const addTodoButton = document.getElementById("add-todo");
addTodoButton.addEventListener("click", addNewTodo)

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let taskCard = document.querySelectorAll("div #task-card")
  taskCard = Object.entries(taskCard)
  for (let item of taskCard) {
    if (item[1]["firstChild"]["className"] === "completed") {
      let taskName = item[1]["firstChild"]["innerHTML"]
      deleteTodo(taskName, todos, item[1])
    }
  }
}

const removeAllButton = document.getElementById("remove-all-completed");
removeAllButton.addEventListener("click", deleteAllCompletedTodos)
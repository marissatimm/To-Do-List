
//selectors
const todoInput = document.querySelector(".item");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".each-items");
//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck)
//Functions
function addTodo(event){
  
  event.preventDefault();
  //console.log(todoInput.value);

  //To do Div

  //Creating element
  const todoDiv = document.createElement('div');
  //adding a class/id name
  todoDiv.classList.add('todo');

  //Create LI
  const createLI = document.createElement('li');
  createLI.innerText = todoInput.value;
  createLI.classList.add('todolist');
  todoDiv.appendChild(createLI);

  //trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa fa-trash"></>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";

}

//displaying list


//delete item
function deleteCheck(e){
  const item = e.target.parentNode;
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    console.log(item.parentElemet);
    todo.remove();
  }
}
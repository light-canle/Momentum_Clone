const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    // li 안에 span을 넣고 span에 todo를 추가
    li.appendChild(span);
    span.innerText = newTodo;

    // 리스트에 넣음
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    // 새로고침 방지
    event.preventDefault();
    // 입력받은 것을 저장하고 입력칸을 비움
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
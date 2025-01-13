const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todoArray = [];
const TODO_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

// 버튼을 눌렀을 때 실행 - 해당 TODO를 제거
function deleteToDo(event){
    // 버튼을 포함한 li에 접근 후 삭제한다.
    const li = event.target.parentNode;
    li.remove();

    // todoArray에서 해당 요소를 뺀다.
    todoArray = todoArray.filter(toDo => parseInt(li.id) !== toDo.id);
    saveToDos();
}

// Todo의 이름을 입력했을 때 실행 - 새로운 todo 목록을 추가함
function paintToDo(newTodo){
    // HTML 요소 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.style.backgroundColor = "white";
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖️";

    // button 이벤트 리스너 추가
    button.addEventListener("click", deleteToDo);

    // li 안에 span, button을 추가
    li.appendChild(span);
    li.appendChild(button);

    // 리스트에 넣음
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    // 새로고침 방지
    event.preventDefault();
    // 입력받은 것을 저장하고 입력칸을 비움
    const newTodo = todoInput.value;
    todoInput.value = "";

    // 배열에 새로운 todo 추가
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    todoArray.push(newTodoObj);

    // 새로운 todo를 화면에 추가
    paintToDo(newTodoObj);

    // localStorage에 저장
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodoArray = localStorage.getItem(TODO_KEY);

if (savedTodoArray !== null){
    const parsedToDos = JSON.parse(savedTodoArray);
    // 기존 데이터 저장
    todoArray = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    // form의 자동 submit 방지
    event.preventDefault();
    // form 가림
    loginForm.classList.add(HIDDEN_CLASS);
    // 유저 이름을 받고 표시
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // form 표시
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    // 바로 인사 표시
    paintGreetings();
}
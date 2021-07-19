const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_TAG = "hidden";
const USER_NAME = "username";
// 1. write down name on the form -> submit -> hidden
// Needs : addEventListener , function about addEventListener
//  default value = hidden -> changed non-hidden    

function handleLoginForm(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_TAG);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    greeting.innerText = `Hello  ${username}`;
    greeting.classList.remove(HIDDEN_TAG);
}

function showGreetings(username) {
    greeting.innerText = `Hello  ${username}`;
    greeting.classList.remove(HIDDEN_TAG);
}

const savedUsername = localStorage.getItem(USER_NAME);

if(savedUsername == null){
    // show the form
    loginForm.classList.remove(HIDDEN_TAG);
    loginForm.addEventListener("submit", handleLoginForm);
}   else {
    // show the greetings
    showGreetings(savedUsername);
}

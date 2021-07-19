const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
let toDos = [];

const TODOS_KEY = "todos";
// 사용자가 todo-list에 입력한 data를 localstorage에 저장.
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}   // localStorage에 JSON.stringify()를 이용하여 배열형식으로 저장하지 않는다면, 데이터들은 텍스트형태로 저장되고 중복또한 허용되지 않음.
    // 프론트와 백의 데이터 이동은 String으로 하는 것이 원칙이다.

// JSON.stringify() -> 함수안에 넣은 어떤 데이든 String형태로 변환
// JSON.parse() -> stringify를 통해 String타입으로 만든 데이터를 오브젝트 데이터형태로 변환시켜줌 (여기서는 String 타입의 데이터를 사용할 수 있는 배열의 형태로 변환시켜준다 )

// 사용자가 입력한 todo-list를 화면에 표시
function paintTodo(data){
    const li = document.createElement("li");
    li.id = data.id;    // 위에 선언한 li (html문서에 추가해줄 li)에 newDataObj에 있는 id를 넣어준다.
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = data.text; // handleTodoSubmit()에서 전달하는 data는 newDataObj 즉, Object 객체이기 때문에 newDataObj의 Key값인 text와 id중 하나를 선택해야 {Object : Object}와 같은 문구가 출력되지 않는다. 여기서는 text를 출력하는 것이 맞으니 .text를 붙여줘야 한다.
    todoList.appendChild(li);
}

// todo-list를 삭제하는 함수
function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));    // li.id 는 String toDo.id는 Int타입이기 때문에 형변환이 필요
    saveToDos();
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const dataTodo = todoInput.value;
    todoInput.value = "";
    const newDataObj = {
        text: dataTodo,
        id: Date.now(),
    };
    toDos.push(newDataObj);
    paintTodo(newDataObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => console.log());
}

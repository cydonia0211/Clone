const shiftBlue = document.querySelector(".Test:first-child h1");

function handleTitleElement(){
    shiftBlue.style.color = "blue";
}

shiftBlue.addEventListener("click", handleTitleElement);

console.dir(shiftBlue);

const text = document.querySelector("div.click h1");

function handleMouseClick(){
    text.style.color = "blue";
}

function handleMouseEnter() {
    text.innerText = "Text is here!";
}

function handleMouseLeave(){
    text.innerText = "Text is gone!";
}
text.addEventListener("click", handleMouseClick );
//title.onclick = handleMouseClick;

text.addEventListener("mouseenter", handleMouseEnter);
//title.onmouseenter = hadnlemouseEnter;

text.addEventListener("mouseleave", handleMouseLeave);
//title.onmouseleave = handlemouseLeave;

// className -> Class 명을 변경.



// 코드를 깔끔하게 part-1
function handleTitleClick() {
    if(h1.className === "clicked"){
        h1.className = "";
    }   else {
        h1.className = "clicked";
    }
}
/****  위 코드에선 clicked라는 String 단어를 잘못 적을 위험이 있음. ****/
/****  때문에 아래와 같이 String부분에 쓰일 변수를 선언하여 바꿔주면 깔끔 *****/
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.className === "clicked"){
        h1.className = "";
    }   else {
        h1.className = "clicked";
    }
}

// className 사용 시 class이름 전체를 완전히 바꿔버림. 클래스명을 부분만 바꾸기 위해서는 아래와 같이.
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }   else {
        h1.classList.add(clickedClass);
    }
}   // 위 처럼 classList() 함수를 사용하여 "clicked"라는 단어가 포함될 경우  h1의 클래스명에서 clickedClass변수에 포함된 값만 바꿔줄 수 있음.

// handleTitleClick() 함수를 toggle함수를 이용하여 한 줄로 바꿀 수 있음.
function handltTitleClick() {
    h1.classList.toggle("clicked"); 
}   // toggle() -> Token과 같은 값이 있다면 토큰을 제거하고 존재하지 않는다면 토큰과 같은 값을 추가함.

console.dir(h1);
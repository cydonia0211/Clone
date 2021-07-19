const object = {
    first: 1,
    second: 2,
    third: 3,
    forth: function(nameOfPerson){
        console.log("This is the function of "+ nameOfPerson);
    }
};

console.log(object.first);
console.log(object.forth("Deok Ho"));
console.log(object.forth("Deok Ho"));

const calculator = {
    add: function(firstNum, secondNum){
        console.log(firstNum+secondNum);
    },
    min: function(firstNum, secondNum){
        console.log(firstNum-secondNum);
    },
    mul: function(firstNum, secondNum){
        console.log(firstNum*secondNum);
    },
    div: function(firstNum, secondNum){
        console.log(firstNum/secondNum);
    }
}

const cal = ["add","min"];


calculator.add(10, 10);
calculator.min(10, 10);
calculator.mul(10, 10);
calculator.div(10, 10);

// parseInt() -> 다른 타입의 변수를 Int 타입으로 변환
// prompt(String, variable) -> 사용자에게 묻는 질문(String)과 대답(Answer 어떤 타입이던지 가능)을 묻는 modal창 
// isNaN() -> isNaN함수에 들어온 변수가 정수이면 true 아니면 false반환.
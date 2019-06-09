function sayHello(potato, oi){
    console.log(`hello ${potato} this is good ${oi} good`);
}

//return으로해보자
function ho(potato, oi)
{
    return `hello ${potato} this is good ${oi} good`;
}

//const hho = sayHello("ho", 23);
const hs= ho("cheese", 30);
console.log(ho("cheese", 30)); //hs넣어도되고

const calculator = {
    plus : function(a, b){
    return a + b;
    },
    minus : function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    division : function(a, b){
        return a/b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 3);
const mul = calculator.multiply(3, 3);
const div = calculator.division(5, 2);
console.log(plus, minus, mul, div);
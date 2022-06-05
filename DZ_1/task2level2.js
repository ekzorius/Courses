//Завдання 2 рівень 2

let allMoney = 500;

const apple = 30;
const milk = 50;
const pizza = 130;
const meat = 200;
const coffeeBeans = 300;

if (allMoney >= apple) {
    allMoney -= apple
}
if (allMoney >= milk) {
    allMoney -= milk
}
if (allMoney >=pizza) {
    allMoney -=pizza
}
if (allMoney >= meat) {
    allMoney -= meat
}
if (allMoney >= coffeeBeans) {
    allMoney -= coffeeBeans
}

console.log ('Залишок в гаманці:', allMoney ,'\n','Не вистачає грошей на нову покупку')
//Завдання 2 рівень 2. Кількість куплених товарів не знаю як зробити.

let allMoney = 500;

const apple = 30;
const milk = 50;
const pizza = 130;
const meat = 200;
const coffeeBeans = 300;

if (allMoney < apple) {
    console.log ("No money")}
    else {allMoney -= apple}

 if (allMoney < milk) {
    console.log ("No money")}
    else { allMoney -= milk}

if (allMoney < pizza) {
    console.log ("No money")}
    else { allMoney -=pizza}

if (allMoney < meat) {
    console.log ("No money")}
    else {  allMoney -= meat}

if (allMoney > coffeeBeans) {
    allMoney -= coffeeBeans }
    
    else if (allMoney < coffeeBeans) { 
        if (allMoney < apple) {
            console.log ("No money")}
            else {allMoney -= apple}
        
         if (allMoney < milk) {
            console.log ("No money")}
            else { allMoney -= milk}
        
        if (allMoney < pizza) {
            console.log ("No money")}
            else { allMoney -=pizza}
        
    }
console.log ('Залишок в гаманці:', allMoney) 
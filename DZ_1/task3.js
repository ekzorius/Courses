// Завдання 3

const buy = 5
const price = 10000
const oilPrice = 500
const finalPrice = 20000
const april = 'Квітень'
const name = 'Леопольд Адольфович'

let incomeMoney = finalPrice * buy // загальний прибуток
let spending = price * buy + oilPrice * buy // витрати на закупку та доставку
let netProfit = incomeMoney - spending // чистий прибуток

const finalMessage = (`Доброго дня, ${name}, даю результат роботи за ${april}.  , 
В цьому місяці ми продали товару на загальну суму ${incomeMoney} грн, а наші витарати склали ${spending} грн.
Таким чином наш чистий прибуток = ${netProfit} грн`)
console.log (finalMessage)  

const a = 2
const b = "3"

if ((typeof a!== "number" && typeof a!== "string" ) || (typeof b!== "number" && typeof b!== "string" )) {
    console.log ("Невірний тип даних") // виводимо умову за якою тип операнда не буде дорівнювати числу або рядку
}

let result = Number(a) ** Number (b) // перетворюємо в числа змінній (якщо буде число в рядку)

if (Number.isNaN (result)) {
    console.log ("Невірний тип даних") // якщо передане значення не є числом, то виводимо "Невірний тип даних"
}
else {console.log (result)}
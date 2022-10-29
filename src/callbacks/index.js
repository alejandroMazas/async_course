const sum = (num1, num2) => num1 + num2
const mult = (num1, num2) => num1 * num2

const calc = (num1, num2, callback) => {
    return callback(num1, num2)
}

const result = calc(3, 5, mult)
console.log(`El resultado es: ${result}`)

setTimeout(function () {
    console.log('Hola javascript')
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 3000, 'Alejandro')
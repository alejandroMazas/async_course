const sum = (num1, num2,) => num1 + num2

const calc = (num1, num2, callback) => {
    const result = callback(num1, num2)
    return console.log(`El resultado es: ${result}`)
}


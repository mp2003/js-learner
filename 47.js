function generateNumber(number1, number2, callback) {

    try {
        number1 = Math.round(Math.random() * 10);
        number2 = Math.round(Math.random() * 10);
        console.log(number1, number2);
        callback(number1, number2);

    } catch (error) {
        console.error("Failed to generate number");
    }
}
generateNumber("1", 2, (number1, number2) => {
    console.log(number1 + number2);
});
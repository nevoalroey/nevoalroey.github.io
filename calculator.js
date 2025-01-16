function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ""; // איפוס התוצאה

    // בדיקת תקינות מספרים
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        alert("אנא הזן שני מספרים תקינים.");
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                alert("ניסית לחלק באפס.");
                return;
            }
            result = number1 / number2;
            break;
        default:
            alert("פעולה לא חוקית.");
            return;
    }

    resultDiv.textContent = תוצאה: ${result};
}
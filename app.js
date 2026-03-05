function sum() {
    var num1,num2,result;
    num1 = Number(document.stupid_calculator.number1.value);
    num2 = Number(document.stupid_calculator.number2.value);
    
    result= num1 + num2;
    document.stupid_calculator.result.value = result;
}
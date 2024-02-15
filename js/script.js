function convert() {
    var input = parseFloat(document.getElementById("input").value);
    var firstTemp = document.getElementById("firstTemp").value;
    var secondTemp = document.getElementById("secondTemp").value;


    var converter;
    var formula;

    if (firstTemp === "celcius" && secondTemp === "fahrenheit") {
        converter = (input * 9 / 5) + 32;
        formula = "F = (C * 9 / 5) + 32"
    } else if (firstTemp === "celcius" && secondTemp === "celcius") {
        converter = input;
    } else if (firstTemp === "fahrenheit" && secondTemp === "celcius") {
          converter = (input - 32) * 5 / 9;
          formula = "C = (F - 32) * 9 / 5"
    } else if (firstTemp === "fahrenheit" && secondTemp === "farenheit"){
        converter = input;
    }

    document.getElementById("result").innerHTML = input + " " + firstTemp + " = " + converter.toFixed(2) + " " + secondTemp;
    document.getElementById("formula").innerHTML = "Conversion Formula: " + formula;
}


function clearInput() {
    
    var output = document.getElementById('input')
    var formula = document.getElementById('formula');
    var result = document.getElementById('result');

    output.value = "";
    formula.innerHTML = "";
    result.innerHTML = "";
}

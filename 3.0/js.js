var lastAnswer = 0;

//Reset the form
function reset() {
    console.log("halp");
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operation").value = "";
    setOutput("");
    lastAnswer = 0;
}

//The main function used to evaluate which operation is being done
function doThing() {
    //We check for any blank boxes (With trimming of course)

    if (document.getElementById("number1").value.trim() == "" || document.getElementById("number2").value.trim() == "") {
        setOutput("Eraro: Enigi numeron en la enigejoj<br>Error: Enter value in the text areas");
        return;
    }

    //We get the operands evaluated as an integer
    var int1 = parseFloat(document.getElementById("number1").value),
        int2 = parseFloat(document.getElementById("number2").value);

    //Check the integers for some values that will kill things
    if (int1 == null || int2 == null || int1 == undefined || int2 == undefined || int1 == NaN || int2 == NaN) {
        setOutput("No nulls pl0x");
        return;
    }
    switch (document.getElementById("operation").value.toLowerCase()) {
        case "add":
        case "sumigi":
        case "+":
            add(int1, int2);
            break;
        case "subtrakti":
        case "subtract":
        case "-":
            subtract(int1, int2);
            break;
        case "multipliki":
        case "multiply":
        case "*":
            multiply(int1, int2);
            break;
        case "dividi":
        case "divide":
        case "/":
            divide(int1, int2);
            break;
        case "mod":
        case "%":
        case "modulo":
        case "modulus":
            mod(int1, int2);
            break;
        case "exp":
        case "**":
        case "potencigi":
        case "^":
        case "pow":
        case "exponent":
            exp(int1, int2);
            break;
        case "sin":
        case "sine":
            sin(int1);
        case "tan":
            tan(int1);
        case "absolute":
        case "absolutigi":
        case "abs":
            abs(int1);
        case "the meaning of life":
        case "la defino de vivo":
            doOutput(42);
            break;
        default:
            setOutput("Ne vera operacio/Not a valid operator");
    }
}

function add(int1, int2) {
    doOutput(int1 + int2);
}

function subtract(int1, int2) {
    doOutput(int1 - int2);
}

function multiply(int1, int2) {
    doOutput(int1 * int2);
}

function divide(int1, int2) {
    if (int1 == 0 && int2 == 0) {
        doOutput("42");
        return;
    }
    if (int2 == 0) {
        doOutput("Cannot divide by 0<br>Ne eblas dividi per 0");
        return;
    }
    doOutput(int1 / int2);
}

function mod(int1, int2) {
    doOutput(int1 % int2);
}

function exp(int1, int2) {
    doOutput(int1 ** int2);
}

function sin(int1) {
    doOutput(Math.sin(int1));
}

function tan(int1) {
    doOutput(Math.tan(int1));
}

function abs(int1) {
    doOutput(Math.abs(int1));
}

function replaceOp1() {
    document.getElementById("number1").value = document.getElementById("respondo").innerHTML;
}

function getPi() {
    document.getElementById("number1").value = Math.PI;
}

function doOutput(out) {
    lastAnswer = out;
    setOutput(out);
}

function setOutput(out) {
    document.getElementById("respondo").innerHTML = out;
}

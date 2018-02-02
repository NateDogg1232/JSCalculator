var lastAnswer = 0;

var originalOutputValue = ""

//Reset the form
function resetForm() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operation").value = "";
    setOutput(originalOutputValue);
    lastAnswer = 0;
}

function init() {
    originalOutputValue = document.getElementById("respondo").innerHTML;
    nextNode(document.body);
}

//The main function used to evaluate which operation is being done
function doThing() {
    //We get the operands evaluated as an integer
    var int1 = document.getElementById("number1").value,
        int2 = document.getElementById("number2").value,
        op = document.getElementById("operation").value.toLowerCase();


    //Check for empty values
    if (int1.trim() == "" || int2.trim() == "" || op.trim() == "") {
        setOutput("Please input a value/Bonvolu enigi ion");
        return;
    }
    
    if (int1.trim() == "pi")
        int1 = Math.PI;
    if (int2.trim() == "pi")
        int1 = math.PI;
    
    //We parse them to floats
    int1 = parseFloat(int1);
    int2 = parseFloat(int2);

    console.log(int1)
    console.log(int1 == NaN);
    console.log(int2);

    //And now we check to see if any of them were not numbers
    if (isNaN(int1) || isNaN(int2)) {
        setOutput("No numbers were inputted/Ne estis numeroj enligitaj.");
        return;
    }

    switch (op) {
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

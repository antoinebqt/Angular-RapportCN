//CONVERTISSEUR INFIXE POSTFIXE
function infixToPostfix(infix) {
    const presedences = ["-", "+", "*", "/"];

    var opsStack = [],
        postfix = [];

    for (let token of infix) {
        // Step 1
        if ("number" === typeof token) {
            postfix.push(token);
            continue;
        }
        let topOfStack = opsStack[opsStack.length - 1];
        // Step 2
        if (!opsStack.length || topOfStack == "(") {
            opsStack.push(token);
            continue;
        }
        // Step 3
        if (token == "(") {
            opsStack.push(token);
            continue;
        }
        // Step 4
        if (token == ")") {
            while (opsStack.length) {
                let op = opsStack.pop();
                if (op == "(") break;
                postfix.push(op);
            }
            continue;
        }
        // Step 5
        let prevPresedence = presedences.indexOf(topOfStack),
            currPresedence = presedences.indexOf(token);
        while (currPresedence < prevPresedence) {
            let op = opsStack.pop();
            postfix.push(op);
            prevPresedence = presedences.indexOf(opsStack[opsStack.length - 1]);
        }
        opsStack.push(token);
    }
    // Step 6
    while (opsStack.length) {
        let op = opsStack.pop();
        if (op == "(") break;
        postfix.push(op);
    }

    var postfixString = postfix.toString();
    return postfixString.replace(/,/g, " ");
}

//DÉCOUPEUR
function tokenize(exp) {
    return exp
        .replace(/\s/g, "")
        .split("")
        .map((token, i) => /^\d$/.test(token) ? +token : token);
}

//CONVERTISSEUR INFIXE PREFIXE
function infixToPrefix(infix) {
    var temp1 = infix.replace(/\(/g, "x");
    var temp2 = temp1.replace(/\)/g, "(");
    var temp3 = temp2.replace(/x/g, ")");


    var reversedString = temp3.split("").reverse().join("");
    var reversedPrefix = infixToPostfix(tokenize(reversedString));
    var prefix = reversedPrefix.split("").reverse().join("");
    return prefix;
}

//CONVERTISSEUR POSTFIX INFIXE
function push_stack(stackArr, ele) {
    stackArr[stackArr.length] = ele;
}

function pop_stack(stackArr) {
    var _temp = stackArr[stackArr.length - 1];
    delete stackArr[stackArr.length - 1];
    stackArr.length--;
    return (_temp);
}

function isOperand(who) {
    return (!isOperator(who) ? true : false);
}

function isOperator(who) {
    return ((who == "+" || who == "-" || who == "*" || who == "/" || who == "(" || who == ")") ? true : false);
}

function topStack(stackArr) {
    return (stackArr[stackArr.length - 1]);
}

function postfixToInfix(postfix) {
    var stackArr = new Array();
    postfix = postfix.split(' ');
    for (var i = 0; i < postfix.length; i++) {
        if (isOperand(postfix[i])) {
            push_stack(stackArr, postfix[i]);
        } else {
            var temp = topStack(stackArr);
            pop_stack(stackArr);
            var pushVal = topStack(stackArr) + postfix[i] + temp;
            pop_stack(stackArr);
            push_stack(stackArr, pushVal);
        }
    }
    var infixString = topStack(stackArr).toString();
    return infixString.split("").join(" ");
}

//CONVERTISSEUR POSTFIX PREFIX
function postfixToPrefix(postfix) {
    var infix = postfixToInfix(postfix);
    var prefix = infixToPrefix(infix);
    return prefix;
}
let inp1 = document.querySelector("#value1");
let inp2 = document.querySelector("#value2");

let operator = document.querySelector("#operator");

let calBtn = document.querySelector(".cal-btn");

let result = document.querySelector(".result-value");

// result.innerText = "Hello";

calBtn.addEventListener("click", () => {

    if(operator.value == "+") {
        // let sol = ;
        result.innerText = inp1.value + inp2.value;
    }

    else if(operator.value == "-") {
        result.innerText = inp1.value - inp2.value;
    }

    else if(operator.value == "*") {
        result.innerText = inp1.value * inp2.value;
    }

    else if(operator.value == "/") {
        result.innerText = inp1.value / inp2.value;
    }

    else{
        result.innerText = "Invalid";
    }

    inp1.value = "";
    operator.value = "";
    inp2.value = "";
})
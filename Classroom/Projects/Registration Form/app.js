let btn = document.querySelector("#sub-btn");
let inpArea = document.querySelector(".input-area");

let newPop = document.createElement("p");
newPop.innerText = "Form was Submited... 👍";

let mainBox = document.querySelector(".main-box");

btn.addEventListener("click", () => {

    // alert("Form was Registerd.");
    inpArea.remove();
    btn.remove();

    newPop.classList.add("newPopStyle");
    mainBox.appendChild(newPop);
})
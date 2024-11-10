let btn = document.querySelector("#sub-btn");
let inpArea = document.querySelector(".input-area");

btn.addEventListener("click", () => {

    alert("Form was Registerd.");
    inpArea.remove();
    btn.remove();
})


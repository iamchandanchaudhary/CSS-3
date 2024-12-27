let btn = document.querySelector(".sub-btn");
let inpArea = document.querySelector(".input-area");
const popup = document.querySelector(".popup");
let okbtn = document.querySelector(".okbtn");

btn.addEventListener("click", () => {
    popup.classList.add("open-popup");
})

okbtn.addEventListener("click", () => {
    popup.classList.remove("open-popup");
})
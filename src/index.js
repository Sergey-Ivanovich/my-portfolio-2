let bouncingArrowElement = document.querySelector(".arrow");

function bounce() {
  bouncingArrowElement.classList.toggle("bounce");
}

function hideArrow() {
  bouncingArrowElement.classList.add("hide");
}

setInterval(bounce, 1050);

bouncingArrowElement.addEventListener("click", hideArrow);

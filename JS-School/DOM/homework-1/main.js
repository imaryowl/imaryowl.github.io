const triangle = document.getElementsByClassName("list__item-triangle");
const item = document.getElementsByClassName("list__item");

for (let i = 0; i < triangle.length; i++) {
  triangle[i].addEventListener("click", function(e) {
    this.parentNode.parentNode.classList.toggle("is-opened");
    e.stopPropagation();
  });
}

function selectItem(event) {
  if (event.shiftKey) {
    this.classList.toggle("is-active");
  } else {
      let activeItem = document.querySelectorAll(".is-active");

      for (let i = 0; i < activeItem.length; i++) {
        activeItem[i].classList.remove("is-active");
      }

      this.classList.toggle("is-active");
  }
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", selectItem);
}

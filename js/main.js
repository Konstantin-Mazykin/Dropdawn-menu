const menuTitle = document.querySelector(".dropdawn-menu__title");
const menuList = document.querySelector(".dropdawn-menu__list");
const listItems = document.querySelectorAll(".dropdawn-menu__item");
const dropdawnInput = document.querySelector(".dropdawn-menu__input");

function openMenu() {
  menuList.classList.toggle("open-menu");
  menuTitle.classList.toggle("title-pressed");
}

function processingSelectedItem(evant) {
  evant.stopPropagation();
  menuTitle.innerText = this.innerText;
  clearItemSelection();
  this.classList.add("selected-item");
  dropdawnInput.value = this.dataset.value;
  closeMenu();
}

function closeMenu() {
  menuList.classList.remove("open-menu");
  menuTitle.classList.remove("title-pressed");
}

function clickOutsideDropdawn(evant) {
  if (evant.target !== menuTitle) {
    closeMenu();
  }
}

function keyboardActions(evant) {
  if (evant.key === "Tab" || evant.key === "Escape") {
    closeMenu();
  }
}

function clearItemSelection() {
  listItems.forEach((item) => {
    item.classList.remove("selected-item");
  });
}

menuTitle.addEventListener("click", openMenu);

listItems.forEach((listItem) => {
  listItem.addEventListener("click", processingSelectedItem);
});

document.addEventListener("click", clickOutsideDropdawn);

document.addEventListener("keydown", keyboardActions);

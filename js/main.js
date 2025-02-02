const menuTitle = document.querySelector(".dropdawn-menu__title");
const menuList = document.querySelector(".dropdawn-menu__list");
const items = document.querySelectorAll(".dropdawn-menu__item");
const input = document.querySelector(".dropdawn-menu__input");

function openMenu() {
  menuList.classList.toggle("open-menu");
  menuTitle.classList.toggle("title-pressed");
}

function closeMenu() {
  menuList.classList.remove("open-menu");
  menuTitle.classList.remove("title-pressed");
}

function clearItemSelection() {
  items.forEach((item) => {
    item.classList.remove("selected-item");
  });
}

function processingSelectedItem() {
  menuTitle.innerText = this.innerText;
  clearItemSelection();
  this.classList.add("selected-item");
  input.value = this.dataset.value;
  closeMenu();
}

menuTitle.addEventListener("click", openMenu);

items.forEach((listItem) => {
  listItem.addEventListener("click", processingSelectedItem);
});

const menuTitle = document.querySelector(".dropdawn-menu__title");
const menuList = document.querySelector(".dropdawn-menu__list");
const items = document.querySelectorAll(".dropdawn-menu__item");
const input = document.querySelector(".dropdawn-menu__input");

function openMenu() {
  menuList.classList.toggle("open-menu");
}

function closeMenu() {
  menuList.classList.remove("open-menu");
}

function getValue() {
  menuTitle.innerText = this.innerText;
  input.value = this.dataset.value;
  closeMenu();
}

menuTitle.addEventListener("click", openMenu);

items.forEach((listItem) => {
  listItem.addEventListener("click", getValue);
});

const dropdawns = document.querySelectorAll(".dropdawn-menu");

dropdawns.forEach((dropdawnWrapper) => {
  const menuTitle = dropdawnWrapper.querySelector(".dropdawn-menu__title");
  const menuList = dropdawnWrapper.querySelector(".dropdawn-menu__list");
  const listItems = menuList.querySelectorAll(".dropdawn-menu__item");
  const dropdawnInput = dropdawnWrapper.querySelector(".dropdawn-menu__input");

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
    closeDropdawnMenu();
  }

  function clearItemSelection() {
    listItems.forEach((item) => {
      item.classList.remove("selected-item");
    });
  }

  function closeDropdawnMenu() {
    menuList.classList.remove("open-menu");
    menuTitle.classList.remove("title-pressed");
  }

  function clickOutsideDropdawn(evant) {
    if (evant.target !== menuTitle) {
      closeDropdawnMenu();
    }
  }

  function keyboardActions(evant) {
    if (evant.key === "Tab" || evant.key === "Escape") {
      closeDropdawnMenu();
    }
  }

  menuTitle.addEventListener("click", openMenu);

  listItems.forEach((listItem) => {
    listItem.addEventListener("click", processingSelectedItem);
  });

  document.addEventListener("click", clickOutsideDropdawn);

  document.addEventListener("keydown", keyboardActions);
});

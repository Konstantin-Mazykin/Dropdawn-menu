const dropdawns = document.querySelectorAll(".dropdawn-menu");

dropdawns.forEach((dropdawnWrapper) => {
  const menuTitle = dropdawnWrapper.querySelector(".dropdawn-menu__title");
  const menuList = dropdawnWrapper.querySelector(".dropdawn-menu__list");
  const listItems = menuList.querySelectorAll(".dropdawn-menu__item");
  const dropdawnInput = dropdawnWrapper.querySelector(".dropdawn-menu__input");

  function openMenu() {
    menuList.classList.toggle("open-menu");
    menuTitle.classList.toggle("title-pressed");

    if (menuTitle.classList.contains("title-pressed")) {
      menuTitle.setAttribute("aria-expanded", "true");
      menuList.setAttribute("aria-hidden", "false");
      listItems.forEach((item) => item.setAttribute("aria-selected", "true"));
    } else {
      menuTitle.setAttribute("aria-expanded", "false");
      menuList.setAttribute("aria-hidden", "true");
      listItems.forEach((item) => item.setAttribute("aria-selected", "false"));
    }
  }

  function processingSelectedItem(evant) {
    evant.stopPropagation();
    menuTitle.innerText = evant.target.innerText;
    markItem(evant.target);
    gettingValue(evant.target);
    closeDropdawnMenu();
  }

  function markItem(item) {
    clearItemSelection();
    item.classList.add("selected-item");
    item.setAttribute("aria-selected", "true");
  }

  function clearItemSelection() {
    listItems.forEach((item) => {
      item.classList.remove("selected-item");
      item.setAttribute("aria-selected", "false");
    });
  }

  function gettingValue(item) {
    dropdawnInput.value = item.dataset.value;
  }

  function closeDropdawnMenu() {
    menuList.classList.remove("open-menu");
    menuTitle.classList.remove("title-pressed");
    menuTitle.setAttribute("aria-expanded", "false");
    menuList.setAttribute("aria-hidden", "true");
    listItems.forEach((item) => item.setAttribute("aria-selected", "false"));
  }

  function clickOutsideDropdawn(evant) {
    if (evant.target !== menuTitle) {
      closeDropdawnMenu();
    }
  }

  function keyboardActions(evant) {
    if (evant.key === "Enter") {
      processingSelectedItem(evant);
    }
    if (evant.key === "Escape") {
      closeDropdawnMenu();
    }
  }

  menuTitle.addEventListener("click", openMenu);

  listItems.forEach((listItem) => {
    listItem.addEventListener("click", processingSelectedItem);
  });

  document.addEventListener("click", clickOutsideDropdawn);

  dropdawnWrapper.addEventListener("keydown", keyboardActions);
});

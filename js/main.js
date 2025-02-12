const dropdawns = document.querySelectorAll(".dropdawn-menu");

dropdawns.forEach((dropdawnWrapper) => {
  const menuTitle = dropdawnWrapper.querySelector(".dropdawn-menu__title");
  const menuList = dropdawnWrapper.querySelector(".dropdawn-menu__list");
  const listItems = menuList.querySelectorAll(".dropdawn-menu__item");

  let chooseElement;

  function openCloseMenu() {
    chooseElement = -1;
    menuList.classList.toggle("open-menu");
    menuTitle.classList.toggle("title-pressed");

    setAriaHeaderAttributes()
  }

  function setAriaHeaderAttributes() {
    if (menuTitle.classList.contains("title-pressed")) {
      menuTitle.setAttribute("aria-expanded", "true");
      menuList.setAttribute("aria-hidden", "false");
    } else {
      menuTitle.setAttribute("aria-expanded", "false");
      menuList.setAttribute("aria-hidden", "true");
    }
  }

  function processingSelectedItem(event) {
    event.stopPropagation();
    menuTitle.innerText = event.target.innerText;
    markItem(event.target);
    closeDropdawnMenu();
  }

  function markItem(item) {
    clearItemSelection();
    item.classList.add("selected-item");
    item.setAttribute("aria-checked", "true");
  }

  function clearItemSelection() {
    listItems.forEach((item) => {
      item.classList.remove("selected-item");
      item.setAttribute("aria-checked", "false");
    });
  }

  function closeDropdawnMenu() {
    menuList.classList.remove("open-menu");
    menuTitle.classList.remove("title-pressed", "selected-item");
    setAriaHeaderAttributes()
  }

  function clickOutsideDropdawn(event) {
    if (event.target !== menuTitle) {
      closeDropdawnMenu();
    }
  }

  function keyboardActions(event) {
    if (event.key === "Enter") {
      processingSelectedItem(event);
    }
    if (event.key === "Escape") {
      closeDropdawnMenu();
    }
  }

  function navigationUpDown(event) {
    if (!menuList.classList.contains("open-menu")) return;

    event.preventDefault();

    if ((event.key === "ArrowDown") && (chooseElement < listItems.length - 1)) {
      chooseElement++;
      listItems[chooseElement].focus();
    }
    if ((event.key === "ArrowUp") && chooseElement) {
      chooseElement--;
      listItems[chooseElement].focus();
    }
  }

  menuTitle.addEventListener("click", openCloseMenu);

  listItems.forEach((listItem) => {
    listItem.addEventListener("click", processingSelectedItem);
  });

  document.addEventListener("click", clickOutsideDropdawn);

  dropdawnWrapper.addEventListener("keydown", keyboardActions);

  dropdawnWrapper.addEventListener("keydown", navigationUpDown);
});

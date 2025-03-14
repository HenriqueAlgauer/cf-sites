const menuParents = document.querySelectorAll(".menu-parent");

menuParents.forEach((parent) => {
  const submenu = parent.querySelector(".submenu");

  parent.addEventListener("mouseenter", () => {
    submenu.style.maxHeight = submenu.scrollHeight + "px";
  });

  parent.addEventListener("mouseleave", () => {
    submenu.style.maxHeight = "0px";
  });
});

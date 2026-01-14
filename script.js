document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger");
  const dropmenu = document.querySelector(".dropmenu");
  const menuIcon = document.querySelector(".menu");

  if (!burgerIcon || !dropmenu || !menuIcon) return;

  burgerIcon.addEventListener("click", function () {
    const isOpen = dropmenu.classList.toggle("show");
    menuIcon.classList.toggle("active");
    burgerIcon.setAttribute("aria-expanded", isOpen);
  });

  dropmenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropmenu.classList.remove("show");
      menuIcon.classList.remove("active");
    });
  });

  dropmenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      dropmenu.classList.remove("show");
      menuIcon.classList.remove("active");
    }
  });
});

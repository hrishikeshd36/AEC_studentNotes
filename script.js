// side bar toggle
const menu_toggle = document.querySelector(".menu-toggle");
const menu_toggle2 = document.querySelector(".menu-toggle-2");
const sidebar = document.querySelector(".sidebar");
const cross_toggle = document.querySelector(".cross-toggle");
const mob_ham = document.querySelector(".mob-ham");
const mob_ham_scroll = document.querySelector(".mob-ham-scroll");

menu_toggle.addEventListener("click", () => {
  menu_toggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});
cross_toggle.addEventListener("click", () => {
  cross_toggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});
menu_toggle2.addEventListener("click", () => {
  menu_toggle2.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});
mob_ham.addEventListener("click", () => {
  mob_ham.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});
mob_ham_scroll.addEventListener("click", () => {
  mob_ham_scroll.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});


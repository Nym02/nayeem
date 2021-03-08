const burger = document.getElementById("burger-menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const sideMenu = document.querySelector(".sidemenu");

burger.addEventListener("click", () => {
  //   bar1.classList.toggle("bar11");
  //   bar2.classList.toggle("bar22");
  //   bar3.classList.toggle("bar33");
  getSideMenu();
});

const getSideMenu = () => {
  sideMenu.style.right = "0px";
};

const closeBtn = document.querySelector("#sidebarCloseBtn");

closeBtn.addEventListener("click", () => {
  removeSideMenu();
});

const removeSideMenu = () => (sideMenu.style.right = "-32rem");

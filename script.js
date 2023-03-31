const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const listNavMenu = document.querySelectorAll("li");

listNavMenu.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    console.log(navItem.innerText);
  });
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

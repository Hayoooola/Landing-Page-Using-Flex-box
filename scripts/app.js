const mobileMenuBtn = document.querySelector(".mobile-menu").children[0];
const mobileMenu = document.querySelector(".main-menu");

mobileMenuBtn.addEventListener("click", openMobileMenu);

function openMobileMenu() {
  if (mobileMenuBtn.classList.contains("fa-bars")) {
    mobileMenu.style.right = "0";
    mobileMenuBtn.classList = `fa fa-times`;
    mobileMenuBtn.parentElement.style = `position: fixed; right:0; top:0; margin:2rem;`;
  } else {
    mobileMenu.style.right = "-50%";
    mobileMenuBtn.classList = `fa fa-bars`;
    mobileMenuBtn.parentElement.style = `position: relative;`;
  }
}

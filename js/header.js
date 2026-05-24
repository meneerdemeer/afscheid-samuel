const header = document.querySelector(".header");

function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

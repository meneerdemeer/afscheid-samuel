const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__img");
const btnClose = lightbox.querySelector(".lightbox__close");
const btnPrev = lightbox.querySelector(".lightbox__prev");
const btnNext = lightbox.querySelector(".lightbox__next");

let currentGallery = "";
let currentIndex = 0;

function show(gallery, index) {
  const photos = window.galleryPhotos?.[gallery];
  if (!photos?.length) return;

  currentGallery = gallery;
  currentIndex = (index + photos.length) % photos.length;
  lightboxImg.src = photos[currentIndex];
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function hide() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".gallery__grid").forEach((grid) => {
  grid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (!item) return;
    show(item.dataset.gallery, Number(item.dataset.index));
  });
});

btnClose.addEventListener("click", hide);
btnPrev.addEventListener("click", () => show(currentGallery, currentIndex - 1));
btnNext.addEventListener("click", () => show(currentGallery, currentIndex + 1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) hide();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") hide();
  if (e.key === "ArrowLeft") show(currentGallery, currentIndex - 1);
  if (e.key === "ArrowRight") show(currentGallery, currentIndex + 1);
});

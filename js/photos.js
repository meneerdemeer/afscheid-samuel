const PHOTOS = [
  "345.jpeg",
  "WhatsApp Image 2026-01-07 at 20.25.54.jpeg",
  "WhatsApp Image 2026-05-24 at 14.43.49.jpeg",
  "WhatsApp Image 2026-05-24 at 14.43.56.jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (1).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (2).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (3).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (4).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (5).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (6).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (7).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (8).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11 (9).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.11.jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.12 (1).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.12 (3).jpeg",
  "WhatsApp Image 2026-05-24 at 17.44.12.jpeg",
  "WhatsApp Image 2026-05-24 at 18.05.09.jpeg",
  "WhatsApp Image 2026-05-24 at 18.05.52.jpeg",
  "WhatsApp Image 2026-05-24 at 20.39.10.jpeg",
  "WhatsApp Image 2026-05-24 at 20.46.46.jpeg"
];

function photoSrc(name) {
  return "fotocolage/" + encodeURIComponent(name);
}

const collage = document.getElementById("collage");

PHOTOS.forEach((entry, index) => {
  const src = photoSrc(entry);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "gallery__item";
  button.setAttribute("role", "listitem");
  button.dataset.index = String(index);
  button.setAttribute("aria-label", `Foto ${index + 1}`);

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Samuel — foto ${index + 1}`;
  img.loading = index < 4 ? "eager" : "lazy";

  button.appendChild(img);
  collage.appendChild(button);
});

window.memorialPhotos = PHOTOS.map(photoSrc);

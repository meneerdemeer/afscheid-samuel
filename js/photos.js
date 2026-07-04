const PHOTOS_AFSCHEID = [
  "WhatsApp Image 2026-07-03 at 19.18.10.jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (1).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (10).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (11).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (12).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (13).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (14).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (15).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (16).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (17).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (18).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (19).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (2).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (20).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (21).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (22).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (3).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (4).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (5).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (6).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (7).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (8).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11 (9).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.11.jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (1).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (10).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (11).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (12).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (2).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (3).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (4).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (5).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (6).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (7).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (8).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12 (9).jpeg",
  "WhatsApp Image 2026-07-03 at 19.18.12.jpeg"
];

const PHOTOS_HERINNERINGEN = [
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
  "WhatsApp Image 2026-05-24 at 20.39.11.jpeg",
  "WhatsApp Image 2026-05-24 at 20.46.46.jpeg",
  "WhatsApp Image 2026-05-24 at 22.24.125.jpeg",
  "WhatsApp Image 2026-05-24 at 22.24.15.jpeg",
  "WhatsApp Image 2026-05-24 at 22.24.75616.jpeg",
  "WhatsApp Image 2026-05-24 at 22.244.15.jpeg",
  "WhatsApp Image 2026-05-24 at 22.25.39.jpeg",
  "WhatsApp Image 2026-05-24 at 22.65725.38.jpeg",
  "WhatsApp Image 2026-05-24 at 2265.24.15.jpeg",
  "WhatsApp Image 2026-05-24 at 2r2.24.15.jpeg",
  "WhatsApp Image 2026-05-25 at 16.21.17.jpeg",
  "WhatsApp Image 2026-05-25 at 16.21.172.jpeg"
];

function photoSrc(folder, name) {
  return folder + "/" + encodeURIComponent(name);
}

function buildGallery(containerId, folder, photos, galleryId, altPrefix) {
  const collage = document.getElementById(containerId);
  if (!collage) return;

  photos.forEach((entry, index) => {
    const src = photoSrc(folder, entry);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery__item";
    button.setAttribute("role", "listitem");
    button.dataset.gallery = galleryId;
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `${altPrefix} — foto ${index + 1}`);

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${altPrefix} — foto ${index + 1}`;
    img.loading = index < 4 ? "eager" : "lazy";

    button.appendChild(img);
    collage.appendChild(button);
  });
}

buildGallery("collage-afscheid", "fotocolage_afscheid", PHOTOS_AFSCHEID, "afscheid", "Het afscheid");
buildGallery("collage-herinneringen", "fotocolage", PHOTOS_HERINNERINGEN, "herinneringen", "Samuel");

window.galleryPhotos = {
  afscheid: PHOTOS_AFSCHEID.map((name) => photoSrc("fotocolage_afscheid", name)),
  herinneringen: PHOTOS_HERINNERINGEN.map((name) => photoSrc("fotocolage", name))
};

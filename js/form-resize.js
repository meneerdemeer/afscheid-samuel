const iframe = document.getElementById("condoleance-form");
if (!iframe) return;

function setFormHeight(height) {
  const h = Math.max(800, Math.ceil(Number(height)));
  if (!Number.isFinite(h)) return;
  iframe.style.height = `${h}px`;
}

window.addEventListener("message", (event) => {
  if (event.origin !== "https://docs.google.com") return;

  const { data } = event;

  if (typeof data === "number") {
    setFormHeight(data);
    return;
  }

  if (typeof data === "string") {
    const direct = parseInt(data, 10);
    if (direct > 0) {
      setFormHeight(direct);
      return;
    }

    const colon = data.match(/setHeight[:\s]+(\d+)/i);
    if (colon) {
      setFormHeight(colon[1]);
      return;
    }

    try {
      const parsed = JSON.parse(data);
      if (parsed.height) setFormHeight(parsed.height);
      if (parsed.args?.[1]) setFormHeight(parsed.args[1]);
    } catch (_) {
      /* not JSON */
    }
  }

  if (data && typeof data === "object" && data.height) {
    setFormHeight(data.height);
  }
});

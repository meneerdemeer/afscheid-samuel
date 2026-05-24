const iframe = document.getElementById("condoleance-form");
if (!iframe) return;

const MOBILE_QUERY = "(max-width: 480px)";
const MIN_HEIGHT_DESKTOP = 950;
const MIN_HEIGHT_MOBILE = 1650;
const HEIGHT_BUFFER = 64;

function isMobile() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function minHeight() {
  return isMobile() ? MIN_HEIGHT_MOBILE : MIN_HEIGHT_DESKTOP;
}

function setFormHeight(height) {
  const reported = Math.ceil(Number(height));
  if (!Number.isFinite(reported) || reported < 400) return;
  const h = Math.max(reported + HEIGHT_BUFFER, minHeight());
  iframe.style.height = `${h}px`;
  iframe.style.minHeight = `${h}px`;
}

function applyFallbackHeight() {
  const h = minHeight();
  iframe.style.height = `${h}px`;
  iframe.style.minHeight = `${h}px`;
}

applyFallbackHeight();
window.matchMedia(MOBILE_QUERY).addEventListener("change", applyFallbackHeight);

window.addEventListener("message", (event) => {
  if (event.origin !== "https://docs.google.com") return;

  const { data } = event;

  if (typeof data === "number") {
    setFormHeight(data);
    return;
  }

  if (typeof data === "string") {
    if (data.includes("::")) {
      const h = parseInt(data.split("::").pop(), 10);
      if (h > 0) setFormHeight(h);
      return;
    }

    const colon = data.match(/setHeight[:\s]+(\d+)/i);
    if (colon) {
      setFormHeight(colon[1]);
      return;
    }

    const direct = parseInt(data, 10);
    if (direct > 0) {
      setFormHeight(direct);
      return;
    }

    try {
      const parsed = JSON.parse(data);
      if (parsed.type === "setHeight" && parsed.args?.[0]) {
        setFormHeight(parsed.args[0]);
        return;
      }
      if (parsed.height) setFormHeight(parsed.height);
      if (parsed.args?.[1]) setFormHeight(parsed.args[1]);
    } catch (_) {
      /* not JSON */
    }
    return;
  }

  if (data && typeof data === "object") {
    if (data.type === "setHeight" && data.args?.[0]) {
      setFormHeight(data.args[0]);
      return;
    }
    if (data.height) setFormHeight(data.height);
    if (data.args?.[1]) setFormHeight(data.args[1]);
  }
});

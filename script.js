(() => {
  "use strict";

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  const lineLinks = document.querySelectorAll("[data-line-cta]");

  lineLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const position = link.dataset.lineCta;

      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "line_cta_click",
          cta_position: position,
        });
      }

      try {
        sessionStorage.setItem("lastLineCta", position);
      } catch {
        // Storage may be unavailable in privacy-focused browsing modes.
      }
    });
  });
})();

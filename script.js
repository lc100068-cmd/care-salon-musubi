/**
 * Care salon 結 -musubi- LP
 * - 追従LINEボタンの表示制御（ヒーローを過ぎたら表示、最終CTA表示中は隠す）
 * - LINE CTAのクリック計測
 */
(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  const floatingCta = document.querySelector(".floating-cta");
  const heroPanel = document.querySelector(".lp-panel");
  const finalPanel = document.getElementById("line-cta");

  /* ---- 追従ボタンの表示制御 ---- */
  if (floatingCta && heroPanel && finalPanel && "IntersectionObserver" in window) {
    const state = { heroVisible: true, finalVisible: false };

    const sync = () => {
      floatingCta.hidden = state.heroVisible || state.finalVisible;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroPanel) {
            state.heroVisible = entry.isIntersecting;
          } else if (entry.target === finalPanel) {
            state.finalVisible = entry.isIntersecting;
          }
        });
        sync();
      },
      { threshold: 0.08 }
    );

    observer.observe(heroPanel);
    observer.observe(finalPanel);
    sync();
  }

  /* ---- CTAクリック計測 ---- */
  document.querySelectorAll("[data-line-cta]").forEach((link) => {
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
        // プライベートブラウズ等でストレージが使えない場合は何もしない
      }
    });
  });
})();

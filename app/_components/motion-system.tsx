"use client";

import { useLayoutEffect } from "react";

type MotionVariant = "hero" | "fade-up" | "scale" | "line";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function MotionSystem() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      root.classList.add("motion-reduced");
      return () => root.classList.remove("motion-reduced");
    }

    const animated = new Set<HTMLElement>();

    const register = (selector: string, variant: MotionVariant, step = 70) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        if (element.dataset.motion) return;
        element.dataset.motion = variant;
        element.style.setProperty("--motion-delay", `${Math.min(index * step, 420)}ms`);
        animated.add(element);
      });
    };

    register(".hero-copy > *", "hero", 90);
    register(".route-hero-layout > *, .product-hero-layout > *", "hero", 110);
    register(".systems-visual, .brand-visual, .product-spec, .identity-mark, .not-found-mark", "scale");
    register(".hero-foot > span", "line", 80);
    register(
      ".section-heading > *, .industries-heading > *, .route-section-heading > *, .company-layout > *, .build-layout > *, .portfolio-layout > *, .detail-intro-layout > *, .lifecycle-layout > *, .engagement-layout > *, .context-layout > *, .identity-layout > *, .company-model-layout > *, .cta-layout > *, .route-cta-layout > *",
      "fade-up",
      85,
    );
    register(
      ".product-row, .capability-item, .industry-list article, .build-steps article, .catalogue-row, .feature-grid article, .lifecycle-list article, .engagement-columns article, .sector-list article, .principle-list article, .cta-links > a, .system-node, .spec-flow > div, .model-flow > span",
      "fade-up",
      65,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    animated.forEach((element) => observer.observe(element));
    root.classList.add("motion-ready");

    const header = document.querySelector<HTMLElement>(".global-header");
    const hero = document.querySelector<HTMLElement>(".hero-shell, .subpage-hero");
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>(".systems-visual, .brand-visual, .product-spec, .identity-mark"),
    );

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;
      const pageHeight = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      const pageProgress = clamp(window.scrollY / pageHeight);

      root.style.setProperty("--page-progress", pageProgress.toFixed(4));
      if (header) header.dataset.scrolled = window.scrollY > 24 ? "true" : "false";

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const heroProgress = clamp(-rect.top / Math.max(rect.height, 1));
        hero.style.setProperty("--hero-progress", heroProgress.toFixed(4));
        hero.style.setProperty("--hero-shift", `${(heroProgress * -24).toFixed(2)}px`);
        hero.style.setProperty("--hero-scale", (1 - heroProgress * 0.035).toFixed(4));
      }

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerDelta = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const parallax = clamp(centerDelta, -1, 1);
        element.style.setProperty("--parallax", parallax.toFixed(4));
        element.style.setProperty("--parallax-y", `${(parallax * -14).toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}

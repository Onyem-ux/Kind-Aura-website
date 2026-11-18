"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";
import Tabs from "@/components/Tabs";
import ContactForm from "@/components/ContactForm";
import { counties, faqs, groups, services, site } from "@/lib/content";

// Lets the <style jsx global> below render on the server (no flash of unstyled content). You don't need to edit this.
function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
  const [registry] = useState(() => createStyleRegistry());
  useServerInsertedHTML(() => {
    const styles = registry.styles();
    registry.flush();
    return <>{styles}</>;
  });
  return <StyleRegistry registry={registry}>{children}</StyleRegistry>;
}

export default function Home() {
  return (
    <StyledJsxRegistry>
      <PageContent />
    </StyledJsxRegistry>
  );
}

// Scroll animation: each item below fades up as it scrolls into view.
// Each row is [what to animate, start delay in seconds, extra delay for each next item].
const REVEAL: [string, number, number][] = [
  [".mission blockquote", 0, 0],
  [".mission h2", 0, 0],
  [".mission p", 0.1, 0.1],
  [".banner img", 0, 0],
  [".services h2", 0, 0],
  [".services .lead", 0.08, 0],
  [".services .card", 0.12, 0.1],
  [".serve h2", 0, 0],
  [".serve .lead", 0.08, 0],
  [".serve .tabs", 0.16, 0],
  [".family img", 0, 0],
  [".family h2", 0.08, 0],
  [".family .pts > div", 0.16, 0.12],
  [".area h2", 0, 0],
  [".area .lead", 0.08, 0],
  [".area .chips li", 0.14, 0.05],
  [".contact h2", 0, 0],
  [".contact .grid > div > p", 0.08, 0],
  [".contact address", 0.16, 0],
  [".contact form", 0.1, 0],
  ["footer .copy", 0, 0],
];

function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            seen.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    const added: HTMLElement[] = [];
    REVEAL.forEach(([selector, delay, step]) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen: leave it alone
        el.style.setProperty("--delay", `${delay + i * step}s`);
        el.classList.add("reveal");
        seen.observe(el);
        added.push(el);
      });
    });
    return () => {
      seen.disconnect();
      added.forEach((el) => el.classList.remove("reveal", "in"));
    };
  }, []);
}

function PageContent() {
  useReveal();
  return (
    <>
      <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap");

      /* ==========================================================================
         KIND AURA HEALTHCARE SERVICES: STYLES
         Every element has its own rule, scoped to its section. Text elements list
         font, size, weight, line height, letter spacing and colour one per line.
         Sections: 1 Colours | 2 Global | 3 Navigation | 4 Hero | 5 Mission |
                   6 Services | 7 Who We Serve | 8 Family | 9 Service Areas |
                   10 Contact | 11 Footer | 12 Responsive
         ========================================================================== */
      /* ==========================================================================
         1. COLOUR SETTINGS
         Change a colour here to change it everywhere it is used.
         Note: --deep is your brand teal (#038490); --teal is the darker teal.
         ========================================================================== */
      :root {
        --deep:#038490;      /* brand teal: headings, buttons, labels */
        --teal:#0f4a56;      /* dark teal: hovers, quote text */
        --mist:#dcedf0;      /* soft blue-grey backgrounds */
        --paper:#f9fbfb;     /* page background */
        --amber:#e3a02f;     /* gold accent */
        --sage:#5aa3a4;      /* soft green-teal accent */
        --navy:#0b2f3a;      /* dark navy: contact section */
        --text:#2b4045;      /* body text */
        --line:#cfe2e5;     /* borders and dividers */
        /* Fonts (loaded in layout.tsx) */
       --font-editorial: "Cormorant Garamond", Georgia, serif;
--serif: var(--font-editorial);
--sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      /* ==========================================================================
         2. GLOBAL SETTINGS
         ========================================================================== */
      * {
        box-sizing: border-box;
        margin: 0;
      }
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 84px;
      }
      body {
        font-family: var(--sans);
        color: var(--text);
        background: var(--paper);
        line-height: 1.7;
        font-size: 17px;
      }
      a {
        color: inherit;
      }
      img {
        display: block;
        max-width: 100%;
      }
      :focus-visible {
        outline: 3px solid var(--amber);
        outline-offset: 3px;
      }
      .wrap {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 24px;
      }
      /* ==========================================================================
         3. NAVIGATION
         ========================================================================== */
      header {
        position: sticky;
        top: 0;
        z-index: 20;
        background: rgba(249,251,251,.95);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid var(--line);
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 8px 24px;
        max-width: 1120px;
        margin: 0 auto;
      }
      .nav img {
        height: 54px;
        width: auto;
      }
      .nav nav {
        display: flex;
        gap: 26px;
        align-items: center;
        font-weight: 500;
      }
      .nav nav a:not(.btn) {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 500;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--text);

        text-decoration: none;
      }
      .nav nav a:not(.btn):hover {
        color: var(--teal);
      }
      /* "Contact us" button */
      .nav .btn {
        font-family: var(--sans);
        font-size: 1rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: normal;
        color: #fff;

        display: inline-block;
        background: var(--deep);
        text-decoration: none;
        padding: 11px 22px;
        border-radius: 999px;
        border: 0;
        cursor: pointer;
        transition: background .2s;
      }
      .nav .btn:hover {
        background: var(--teal);
      }
      /* ==========================================================================
         4. HERO  (full-width photo with text on top)
         ========================================================================== */
      .hero {
        position: relative;
        display: flex;
        align-items: center;
        /* fills the screen below the 71px header; change 71px if the header height changes */
        min-height: calc(100vh - 71px);
        min-height: calc(100svh - 71px);
        padding: 96px 0 112px;
        overflow: hidden;
        /* Shows when there is no photo. Remove it once you add one if you like. */
        background: linear-gradient(115deg, var(--navy) 0%, var(--teal) 60%, var(--deep) 100%);
      }
      /* The photo. Change object-position to move which part of the photo shows. */
      .hero .photo {
        object-fit: cover;
        object-position: center top;
      }
      /* Dark teal fade on the left so the text is readable. Lower the .9 / .75 / .2 numbers for a lighter fade. */
      .hero .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(11,47,58,.9) 0%, rgba(11,47,58,.75) 42%, rgba(11,47,58,.2) 100%);
      }
      .hero .wrap {
        position: relative;
        z-index: 1;
        width: 100%;
      }
      .hero .content {
        max-width: 600px;
      }
      .hero h1 {
        font-family: var(--sans);
        font-size: clamp(2.9rem,5vw,4.6rem);
        font-weight: 500;
        line-height: 1.1;
        letter-spacing: -.03em;
        color: #fff;

        margin-bottom: 22px;
      }
      .hero h1 em {
        font-family: var(--sans);
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.035em;
      }
      .hero p {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: rgba(255,255,255,.92);

        max-width: 52ch;
        margin-bottom: 32px;
      }
      .hero .cta {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      /* Solid button ("Request care") */
      .hero .btn {
        font-family: var(--sans);
        font-size: 1rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: normal;
        color: #fff;

        display: inline-block;
        background: var(--deep);
        text-decoration: none;
        padding: 15px 30px;
        border-radius: 999px;
        border: 0;
        cursor: pointer;
        transition: background .2s;
      }
      .hero .btn:hover {
        background: #05a3b2;
      }
      /* Outline button ("Call 470-416-5544") */
      .hero .btn.alt {
        background: transparent;
        color: #fff;
        box-shadow: inset 0 0 0 2px #fff;
      }
      .hero .btn.alt:hover {
        background: #fff;
        color: var(--teal);
      }
      /* ==========================================================================
         5. MISSION  (includes the team photo banner beneath it)
         ========================================================================== */
      .mission {
        padding: 84px 0;
      }
      .mission .wrap {
        display: grid;
        grid-template-columns: .8fr 1.2fr;
        gap: 56px;
      }
      .mission blockquote {
        font-family: var(--serif);
        font-size: clamp(1.7rem,3vw,2.2rem);
        font-weight: 500;
        line-height: 1.3;
        letter-spacing: normal;
        color: var(--teal);

        border-left: 4px solid var(--amber);
        padding-left: 24px;
        align-self: start;
      }
      .mission h2 {
        font-family: var(--serif);
        font-size: clamp(2.1rem,4.5vw,3rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 16px;
      }
      .mission p {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--text);

        max-width: 62ch;
      }
      .mission p + p {
        margin-top: 14px;
      }
      .banner {
        padding: 0 0 84px;
      }
      .banner img {
        width: 100%;
        height: clamp(240px,38vw,430px);
        object-fit: cover;
        object-position: center 30%;
        border-radius: 20px;
      }
      /* ==========================================================================
         6. SERVICES
         ========================================================================== */
      .services {
        background: #fff;
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        padding: 84px 0;
      }
      .services h2 {
        font-family: var(--serif);
        font-size: clamp(2.1rem,4.5vw,3rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 16px;
      }
      .services .lead {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #44595e;

        max-width: 62ch;
      }
      .services .cards {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 22px;
        margin-top: 40px;
      }
      /* Cards */
      .services .card {
        background: var(--paper);
        border-top: 4px solid var(--deep);
        padding: 28px 24px 30px;
        border-radius: 0 0 12px 12px;
        /* the first two items fade in on scroll (with their delay); the last two are the hover animation */
        transition: opacity var(--speed) var(--ease) var(--delay, 0s), translate var(--speed) var(--ease) var(--delay, 0s), transform .35s var(--ease), box-shadow .35s var(--ease), background .35s var(--ease);
      }
      .services .card:nth-child(2) {
        border-color: var(--amber);
      }
      .services .card:nth-child(3) {
        border-color: var(--sage);
      }
      .services .card:nth-child(4) {
        border-color: var(--navy);
      }
      .services .card svg {
        width: 30px;
        height: 30px;
        stroke: var(--deep);
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
        margin-bottom: 16px;
        transition: transform .35s var(--ease);
      }
      /* Hover: card lifts, gets a soft shadow, and the icon pops */
      .services .card:hover {
        transform: translateY(-8px);
        background: #fff;
        box-shadow: 0 22px 40px -22px rgba(15,74,86,.45);
      }
      .services .card:hover svg {
        transform: scale(1.18) rotate(-6deg);
      }
      .services .card h3 {
        font-family: var(--serif);
        font-size: 1.55rem;
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 8px;
      }
      .services .card p {
        font-family: var(--sans);
        font-size: .98rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--text);
      }
      /* ==========================================================================
         7. WHO WE SERVE  (tabs and panels)
         ========================================================================== */
      .serve {
        background: var(--navy);
        color: #d3e8eb;
        padding: 84px 0;
      }
      .serve h2 {
        font-family: var(--serif);
        font-size: clamp(2.1rem,4.5vw,3rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: #fff;

        margin-bottom: 16px;
      }
      .serve .lead {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #9e9fa0;

        max-width: 62ch;
      }
      /* Tab buttons (Children / Teenagers / Adults) */
      .serve .tabs {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 30px;
      }
      .serve .tab {
        font-family: var(--sans);
        font-size: 1rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: normal;
        color: var(--deep);

        padding: 13px 28px;
        border-radius: 14px 14px 0 0;
        border: 0;
        background: #c3dde1;
        cursor: pointer;
      }
      .serve .tab[aria-selected=true] {
        background: #fff;
        color: var(--teal);
      }
      /* Panel under the tabs */
      .serve .panel {
        background: #fff;
        border-radius: 0 20px 20px 20px;
        padding: 40px;
        display: grid;
        grid-template-columns: 1.1fr .9fr;
        gap: 20px 48px;
      }
      .serve .panel[hidden] {
        display: none;
      }
      .serve .panel .intro {
        grid-column: 1/-1;
        max-width: 78ch;
      }
      .serve .panel h3 {
        font-family: var(--serif);
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 12px;
      }
      .serve .panel .intro p {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--text);

        max-width: 62ch;
      }
      /* Bulleted service list */
      .serve .list {
        list-style: none;
        padding: 0;
        display: grid;
        gap: 14px;
        grid-column: 1/-1;
        grid-template-columns: repeat(2,1fr);
        column-gap: 40px;
      }
      .serve .list li {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--text);

        padding-left: 28px;
        position: relative;
      }
      .serve .list li::before {
        content: "";
        position: absolute;
        left: 0;
        top: .62em;
        width: 11px;
        height: 11px;
        border-radius: 50% 50% 50% 0;
        background: var(--amber);
        transform: rotate(-45deg);
      }
      .serve .list b {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 600;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--deep);
      }
      /* ==========================================================================
         8. FAMILY
         ========================================================================== */
      .family {
        padding: 84px 0;
      }
      .family .wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }
      .family img {
        width: 100%;
        aspect-ratio: 1 / .82;
        object-fit: cover;
        border-radius: 20px;
      }
      .family h2 {
        font-family: var(--serif);
        font-size: clamp(2.1rem,4.5vw,3rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 16px;
      }
      .family .pts {
        display: grid;
        gap: 22px;
        margin-top: 26px;
      }
      .family .pts div {
        border-left: 2px solid var(--line);
        padding-left: 20px;
      }
      .family .pts h4 {
        font-family: var(--sans);
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.3;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 2px;
      }
      .family .pts p {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--text);

        max-width: 62ch;
      }
      .family .btn {
        font-family: var(--sans);
        font-size: 1rem;
        font-weight: 600;
        line-height: normal;
        color: #fff;
        display: inline-block;
        margin-top: 30px;
        padding: 14px 28px;
        border-radius: 999px;
        background: var(--deep);
        text-decoration: none;
        transition: background .2s;
      }
      .family .btn:hover {
        background: var(--teal);
      }
      /* ==========================================================================
         9. SERVICE AREAS
         ========================================================================== */
      .area {
        background: var(--paper);
        padding: 0 0 84px;
      }
      .area h2 {
        font-family: var(--serif);
        font-size: clamp(2.1rem,4.5vw,3rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: var(--deep);

        margin-bottom: 16px;
      }
      .area .lead {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #44595e;

        max-width: 62ch;
      }
      .area .chips {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        margin-top: 30px;
        list-style: none;
        padding: 0;
        border-top: 1px solid rgba(0,0,0,.13);
        border-left: 1px solid rgba(0,0,0,.13);
      }
      .area .chips li {
        position: relative;
        display: flex;
        align-items: flex-end;
        min-height: 132px;
        padding: 42px 18px 17px;
        overflow: hidden;
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: normal;
        color: #111;
        background: #fff;
        border: 0;
        border-right: 1px solid rgba(0,0,0,.13);
        border-bottom: 1px solid rgba(0,0,0,.13);
        border-radius: 0;
        cursor: default;
        transition: background-color .25s ease, transform .25s ease, box-shadow .25s ease;
      }
      .area .chips li:hover {
        background: #f1f1ee;
        transform: translateY(-3px);
        box-shadow: 0 8px 18px rgba(0,0,0,.06);
        z-index: 2;
      }
      .area .county-number {
        position: absolute;
        top: 2px;
        left: 13px;
        font-family: var(--serif);
        font-size: 3.4rem;
        font-weight: 500;
        line-height: 1;
        color: #111;
        opacity: .12;
        pointer-events: none;
        transition: opacity .25s ease, transform .25s ease;
      }
      .area .chips li:hover .county-number {
        opacity: .22;
        transform: translate(2px, -1px);
      }
      .area .county-name {
        position: relative;
        z-index: 1;
      }

      /* CTA chip in the service-area grid (3rd row, 3rd column on desktop) */
      .area .chips li.cta-chip {
        background: var(--deep);
        color: #fff;
        padding: 0;
        min-height: 132px;
        cursor: pointer;
        transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
      }
      .area .chips li.cta-chip:hover {
        background: var(--teal);
        transform: translateY(-3px);
        box-shadow: 0 8px 18px rgba(15,74,86,.25);
        z-index: 2;
      }
      .area .chips .cta-link {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        padding: 42px 18px 17px;
        text-decoration: none;
        color: inherit;
      }
      .area .chips .cta-label {
        font-family: var(--serif);
        font-size: 1.35rem;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.01em;
      }
      .area .chips .cta-sub {
        font-family: var(--sans);
        font-size: .95rem;
        font-weight: 500;
        opacity: .9;
        margin-top: 4px;
      }

      /* ==========================================================================
         10. CONTACT
         ========================================================================== */
      .contact {
        background: var(--navy);
        color: #d3e8eb;
        padding: 84px 0;
      }
      .contact .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 56px;
      }
      .contact h2 {
        font-family: var(--serif);
        font-size: clamp(2.1rem,4.5vw,3rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: normal;
        color: #fff;

        margin-bottom: 16px;
      }
      .contact .grid > div > p {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #d3e8eb;

        max-width: 62ch;
      }
      /* Address, phone, email */
      .contact address {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #d3e8eb;

        font-style: normal;
        display: grid;
        gap: 14px;
        margin-top: 24px;
      }
      .contact address span {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #d3e8eb;
      }
      .contact address a {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #fff;

        text-decoration: underline;
        text-decoration-color: var(--amber);
        text-underline-offset: 5px;
        overflow-wrap: anywhere;
      }
      /* Form */
      .contact form {
        background: #fff;
        border-radius: 20px;
        padding: 30px;
        display: grid;
        gap: 14px;
        color: var(--text);
      }
      .contact form label {
        font-family: var(--sans);
        font-size: .95rem;
        font-weight: 600;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--deep);

        display: grid;
        gap: 6px;
      }
      .contact form input {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #000;

        padding: 12px 14px;
        border: 1px solid #b6d1d4;
        border-radius: 12px;
        width: 100%;
        background: #fff;
      }
      .contact form select {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #000;

        padding: 12px 14px;
        border: 1px solid #b6d1d4;
        border-radius: 12px;
        width: 100%;
        background: #fff;
      }
      .contact form textarea {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #000;

        padding: 12px 14px;
        border: 1px solid #b6d1d4;
        border-radius: 12px;
        width: 100%;
        background: #fff;
        min-height: 110px;
        resize: vertical;
      }
      /* "Send message" button */
      .contact form .btn {
        font-family: var(--sans);
        font-size: 1rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: normal;
        color: #fff;

        display: inline-block;
        background: var(--deep);
        text-decoration: none;
        padding: 15px 30px;
        border-radius: 999px;
        border: 0;
        cursor: pointer;
        transition: background .2s;
      }
      .contact form .btn:hover {
        background: var(--teal);
      }
      /* Success and error messages after sending */
      .contact form .note {
        font-family: var(--sans);
        font-size: 17px;
        font-weight: 600;
        line-height: 1.7;
        letter-spacing: normal;
        color: var(--deep);

        padding: 12px 14px;
        border-radius: 12px;
        background: var(--mist);
      }
      .contact form .note.err {
        background: #fde8e6;
        color: #8a1f14;
      }
      /* ==========================================================================
         11. FOOTER  (copyright line + big gradient "KIND AURA" that fades out at the bottom)
         ========================================================================== */
      footer {
        background: #08232b;
        text-align: center;
        padding: 32px 24px;
      }
      footer .copy {
        font-family: var(--sans);
        font-size: .9rem;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: normal;
        color: #9fc0c4;
      }
      /* ==========================================================================
         12. ANIMATION
         Hero text fades up when the page loads. Everything else fades up as you scroll to it.
         --rise = how far items slide (px). --speed = how long it takes. Set --rise: 0px for a fade only.
         ========================================================================== */
      :root {
        --rise: 28px;
        --speed: .7s;
        --ease: cubic-bezier(.2,.7,.2,1);
      }
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(var(--rise));
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      /* Hero: plays once on page load, one after another */
      .hero h1 {
        animation: fadeUp calc(var(--speed) + .2s) var(--ease) .1s both;
      }
      .hero p {
        animation: fadeUp calc(var(--speed) + .2s) var(--ease) .25s both;
      }
      .hero .cta {
        animation: fadeUp calc(var(--speed) + .2s) var(--ease) .4s both;
      }
      /* Everything else: the code in useReveal adds .reveal, then .in when it scrolls into view */
      .reveal {
        opacity: 0;
        translate: 0 var(--rise);
        transition: opacity var(--speed) var(--ease), translate var(--speed) var(--ease);
        transition-delay: var(--delay, 0s);
      }
      .reveal.in {
        opacity: 1;
        translate: none;
      }
      /* Tab panels fade up each time you switch tabs */
      .serve .panel {
        animation: fadeUp .6s var(--ease) both;
      }
      /* People who ask their device for less motion see no animation */
      @media (prefers-reduced-motion: reduce) {
        .hero h1,
        .hero p,
        .hero .cta,
        .serve .panel {
          animation: none;
        }
        .reveal {
          opacity: 1;
          translate: none;
          transition: none;
        }
        .services .card,
        .services .card svg {
          transition: none;
        }
        .services .card:hover,
        .services .card:hover svg {
          transform: none;
        }
      }
      /* ==========================================================================
         13. RESPONSIVE SETTINGS  (tablet and phone layouts, widest to narrowest)
         Selectors match the ones above exactly so these rules take over on small screens.
         ========================================================================== */
      /* Tablet landscape: up to 980px */
      @media (max-width:980px) {
        .services .cards {
          grid-template-columns: repeat(2,1fr);
        }
        .area .chips {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      /* Tablet: up to 900px */
      @media (max-width:900px) {
        .nav nav a:not(.btn) {
          font-family: var(--sans);
          font-size: 17px;
          font-weight: 500;
          line-height: 1.7;
          letter-spacing: normal;
          color: var(--text);

          display: none;
        }
        /* only the Contact button stays in the header */
      }
      /* Tablet portrait: up to 860px */
      @media (max-width:860px) {
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 72px 0 40px;
        }
        .hero .photo {
          object-position: 80% top;
        }
        .hero .overlay {
          background: rgba(11,47,58,.78);
        }

        .mission .wrap {
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .family .wrap {
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .contact .grid {
          grid-template-columns: 1fr;
          gap: 36px;
        }
      }
      /* Large phone: up to 760px */
      @media (max-width:760px) {
        .serve .list {
          grid-template-columns: 1fr;
        }
        .serve .panel {
          padding: 28px 22px;
        }
      }
      /* Phone: up to 560px */
      @media (max-width:560px) {
        .services .cards {
          grid-template-columns: 1fr;
        }
        .area .chips {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .area .chips li {
          min-height: 112px;
          padding: 38px 13px 14px;
        }
        .area .chips li.cta-chip {
          min-height: 112px;
        }
        .area .chips .cta-link {
          padding: 38px 13px 14px;
        }
      }
      `}</style>

      <header>
        <div className="nav">
          <a href="#top" aria-label="Kind Aura Healthcare Services home">
            <Image src="/images/logo.png" alt="Kind Aura Healthcare Services" width={290} height={332} priority />
          </a>
          <nav>
            <a href="#about">About</a><a href="#services">Services</a><a href="#serve">Who we serve</a><a href="#faq">FAQs</a>
            <a className="btn" href="#contact">Contact us</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          {/* Hero background image – place the file at public/images/hero.jpg */}
          <Image
            className="photo"
            src="/images/hero.jpg"
            alt="Compassionate caregiver supporting an elderly client at home"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="overlay" />
          <div className="wrap">
            <div className="content">
              <h1>Excellence in <em>care</em>, rooted in <em>compassion.</em></h1>
              <p>Dependable, person-centered in-home care for children, teenagers and adults, so your loved one stays comfortable in the place they call home.</p>
              <div className="cta">
                <a className="btn" href="#contact">Request care</a>
                <a className="btn alt" href={site.phoneHref}>Call {site.phone}</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mission">
          <div className="wrap">
            <blockquote>We are more than caregivers. We are partners in care.</blockquote>
            <div>
              <h2>Our mission</h2>
              <p>Our mission is to bring peace of mind to families and help every client experience the warmth, compassion and personalized attention they deserve.</p>
              <p>We believe quality care begins with compassion, dignity and respect. Our caregivers offer friendly companionship and personalized help with everyday activities, so clients feel safe, supported and connected, and every person is met with kindness, patience and respect.</p>
            </div>
          </div>
        </section>

        <div className="banner"><div className="wrap">
          <Image src="/images/care-team.jpg" alt="Smiling caregivers and clients standing together in a bright room" width={1300} height={780} />
        </div></div>

        <section id="services" className="services">
          <div className="wrap">
            <h2>Our services</h2>
            <p className="lead">Every care plan is shaped around the client and the family. Choose one service or combine several as needs change.</p>
            <div className="cards">
              {services.map((s) => (
                <div className="card" key={s.title}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={s.icon} /></svg>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="serve" className="serve">
          <div className="wrap">
            <h2>Who we serve</h2>
            <p className="lead">We provide personal care support and companion/sitter services for children, teenagers and adults. Choose an age group to see what we offer.</p>
            <Tabs groups={groups} />
          </div>
        </section>

        <section className="family">
          <div className="wrap">
            <Image src="/images/family.jpg" alt="Three generations of a family smiling together with an older woman" width={944} height={850} />
            <div>
              <h2>Care that includes the whole family</h2>
              <div className="pts">
                <div><h4>At home</h4><p>Familiar surroundings support comfort, routine and independence.</p></div>
                <div><h4>Person-centered</h4><p>Every plan reflects the individual&apos;s needs, preferences and daily rhythm.</p></div>
                <div><h4>Family-focused</h4><p>We work alongside you and respect your role in your loved one&apos;s care.</p></div>
              </div>
              <a className="btn" href="#contact">Let&apos;s talk about care</a>
            </div>
          </div>
        </section>

        <section className="area">
          <div className="wrap">
            <h2>Where we serve</h2>
            <p className="lead">We provide in-home care across metro Atlanta and these Georgia counties.</p>
            <ul className="chips">
              {counties.slice(0, 10).map((c, i) => (
                <li key={c}>
                  <span className="county-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="county-name">{c}</span>
                </li>
              ))}

              {/* CTA – 3rd row, 3rd column on desktop (4-col grid). Also appears on mobile. */}
              <li className="cta-chip">
                <a href="#contact" className="cta-link">
                  <span className="cta-label">Request care</span>
                  <span className="cta-sub">in your area →</span>
                </a>
              </li>

              {counties.slice(10).map((c, i) => (
                <li key={c}>
                  <span className="county-number" aria-hidden="true">{String(i + 11).padStart(2, "0")}</span>
                  <span className="county-name">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap grid">
            <div>
              <h2>Let&apos;s talk about your family&apos;s needs</h2>
              <p>Call or send a message and we will get back to you.</p>
              <address>
                <span>{site.address[0]}<br />{site.address[1]}</span>
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </address>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <p className="copy">&copy; {new Date().getFullYear()} Kind Aura Healthcare Services LLC. Snellville, GA.</p>
      </footer>
    </>
  );
}
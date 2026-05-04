import puppeteer from 'puppeteer-core';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, '../Progressive-Interiors-Content.pdf');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Progressive Interiors — Website Content Review</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --gold: #B8973A;
    --gold-light: #D4AF5A;
    --deep: #1A1F2E;
    --ivory: #F8F4EF;
    --ivory-dark: #EDE8E0;
    --text: #2C2C2C;
    --muted: #6B6B6B;
    --border: #DDD6CB;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 10pt;
    color: var(--text);
    background: #fff;
    line-height: 1.6;
  }

  /* ── COVER PAGE ── */
  .cover {
    width: 100%;
    min-height: 100vh;
    background: var(--deep);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 60px;
    page-break-after: always;
    position: relative;
  }
  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 60% 40%, rgba(184,151,58,0.15) 0%, transparent 60%);
  }
  .cover-logo {
    width: 80px;
    height: 80px;
    border: 2px solid var(--gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 32px;
    position: relative;
  }
  .cover-logo span {
    font-family: 'Playfair Display', serif;
    font-size: 28pt;
    color: var(--gold);
    font-weight: 700;
  }
  .cover-overline {
    font-size: 8pt;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
    position: relative;
  }
  .cover h1 {
    font-family: 'Playfair Display', serif;
    font-size: 34pt;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 24px;
    position: relative;
  }
  .cover-rule {
    width: 60px;
    height: 2px;
    background: var(--gold);
    margin: 0 auto 24px;
    position: relative;
  }
  .cover-sub {
    font-size: 11pt;
    color: rgba(255,255,255,0.65);
    max-width: 480px;
    line-height: 1.7;
    position: relative;
    margin-bottom: 60px;
  }
  .cover-meta {
    position: relative;
    font-size: 8.5pt;
    color: rgba(255,255,255,0.4);
    letter-spacing: 1px;
  }
  .cover-meta span { color: var(--gold); margin: 0 8px; }

  /* ── TOC PAGE ── */
  .toc-page {
    padding: 70px 70px 60px;
    page-break-after: always;
    background: var(--ivory);
  }
  .toc-page h2 {
    font-family: 'Playfair Display', serif;
    font-size: 22pt;
    color: var(--deep);
    margin-bottom: 8px;
  }
  .toc-rule {
    width: 40px;
    height: 2px;
    background: var(--gold);
    margin-bottom: 36px;
  }
  .toc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 40px;
  }
  .toc-item {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 1px dotted var(--border);
  }
  .toc-num {
    font-size: 8pt;
    font-weight: 600;
    color: var(--gold);
    min-width: 22px;
  }
  .toc-label { font-size: 9.5pt; color: var(--text); }

  /* ── SECTION WRAPPER ── */
  .section {
    padding: 60px 70px;
    page-break-inside: avoid;
  }
  .section + .section {
    border-top: 1px solid var(--border);
  }
  .section.break { page-break-before: always; }

  /* ── SECTION HEADER ── */
  .sec-num {
    font-size: 7.5pt;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 6px;
  }
  .sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 20pt;
    color: var(--deep);
    margin-bottom: 6px;
    line-height: 1.2;
  }
  .sec-rule {
    width: 32px;
    height: 2px;
    background: var(--gold);
    margin-bottom: 28px;
  }

  /* ── INFO TABLE ── */
  .info-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9.5pt;
  }
  .info-table tr:nth-child(odd) td { background: var(--ivory); }
  .info-table tr:nth-child(even) td { background: #fff; }
  .info-table td {
    padding: 9px 14px;
    vertical-align: top;
  }
  .info-table td:first-child {
    font-weight: 600;
    color: var(--muted);
    width: 34%;
    font-size: 8.5pt;
    letter-spacing: 0.3px;
  }
  .info-table td:last-child {
    color: var(--text);
  }

  /* ── DATA TABLE (full-width) ── */
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9pt;
    margin-top: 8px;
  }
  .data-table thead tr {
    background: var(--deep);
  }
  .data-table thead th {
    color: #fff;
    padding: 9px 14px;
    text-align: left;
    font-size: 7.5pt;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .data-table tbody tr:nth-child(odd) td { background: var(--ivory); }
  .data-table tbody tr:nth-child(even) td { background: #fff; }
  .data-table tbody td {
    padding: 8px 14px;
    vertical-align: top;
    color: var(--text);
    border-bottom: 1px solid var(--border);
  }
  .data-table td.label {
    font-weight: 600;
    color: var(--muted);
    font-size: 8.5pt;
  }

  /* ── GOLD BADGE ── */
  .badge {
    display: inline-block;
    background: var(--gold);
    color: #fff;
    font-size: 7pt;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 2px 9px;
    border-radius: 2px;
  }

  /* ── STAT GRID ── */
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 4px;
  }
  .stat-card {
    background: var(--ivory);
    border-left: 3px solid var(--gold);
    padding: 16px 14px;
  }
  .stat-value {
    font-family: 'Playfair Display', serif;
    font-size: 17pt;
    color: var(--deep);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 7.5pt;
    color: var(--muted);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  /* ── SERVICE CARD ── */
  .service-card {
    background: var(--ivory);
    border: 1px solid var(--border);
    padding: 24px 24px 20px;
    margin-bottom: 18px;
    page-break-inside: avoid;
  }
  .service-card:last-child { margin-bottom: 0; }
  .service-name {
    font-family: 'Playfair Display', serif;
    font-size: 14pt;
    color: var(--deep);
    margin-bottom: 2px;
  }
  .service-tagline {
    font-size: 8.5pt;
    color: var(--gold);
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .service-desc {
    font-size: 9.5pt;
    color: var(--text);
    line-height: 1.65;
    margin-bottom: 14px;
  }
  .service-inc-title {
    font-size: 8pt;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .service-inc li {
    font-size: 9pt;
    color: var(--text);
    margin-bottom: 4px;
    padding-left: 14px;
    position: relative;
    list-style: none;
  }
  .service-inc li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--gold);
    font-size: 8pt;
  }

  /* ── PROCESS STEPS ── */
  .steps-row {
    display: grid;
    gap: 14px;
  }
  .step {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    background: var(--ivory);
    padding: 16px 18px;
    border-bottom: 2px solid transparent;
  }
  .step-num {
    font-family: 'Playfair Display', serif;
    font-size: 22pt;
    color: var(--gold);
    font-weight: 700;
    line-height: 1;
    min-width: 30px;
  }
  .step-body {}
  .step-name {
    font-weight: 600;
    font-size: 10pt;
    color: var(--deep);
    margin-bottom: 2px;
  }
  .step-desc { font-size: 9pt; color: var(--muted); }

  /* ── TEAM CARDS ── */
  .team-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .team-card {
    background: var(--ivory);
    border: 1px solid var(--border);
    padding: 20px;
    page-break-inside: avoid;
  }
  .team-name {
    font-family: 'Playfair Display', serif;
    font-size: 12pt;
    color: var(--deep);
    margin-bottom: 2px;
  }
  .team-role {
    font-size: 7.5pt;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 4px;
  }
  .team-exp {
    font-size: 8pt;
    color: var(--muted);
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }
  .team-bio { font-size: 8.5pt; color: var(--text); line-height: 1.6; }

  /* ── TESTIMONIAL ── */
  .testimonial {
    background: var(--ivory);
    border-left: 3px solid var(--gold);
    padding: 18px 20px;
    margin-bottom: 12px;
    page-break-inside: avoid;
  }
  .test-stars { color: var(--gold); font-size: 10pt; margin-bottom: 8px; }
  .test-quote {
    font-family: 'Playfair Display', serif;
    font-size: 10.5pt;
    color: var(--deep);
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  .test-name { font-size: 8.5pt; font-weight: 600; color: var(--text); }
  .test-project { font-size: 8pt; color: var(--muted); }

  /* ── PROJECT CARD ── */
  .project-card {
    border: 1px solid var(--border);
    margin-bottom: 18px;
    page-break-inside: avoid;
  }
  .project-header {
    background: var(--deep);
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .project-title {
    font-family: 'Playfair Display', serif;
    font-size: 13pt;
    color: #fff;
  }
  .project-tagline {
    font-size: 8.5pt;
    color: rgba(255,255,255,0.55);
    margin-top: 2px;
  }
  .project-badges { display: flex; flex-direction: column; gap: 4px; align-items: flex-end; }
  .project-body { padding: 18px 20px; background: #fff; }
  .project-meta {
    display: flex;
    gap: 24px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .project-meta-item { font-size: 8.5pt; }
  .project-meta-item strong { color: var(--muted); text-transform: uppercase; font-size: 7.5pt; letter-spacing: 0.5px; display: block; margin-bottom: 2px; }
  .project-desc { font-size: 9pt; color: var(--text); line-height: 1.65; }

  /* ── FAQ ── */
  .faq-item {
    border-bottom: 1px solid var(--border);
    padding: 16px 0;
    page-break-inside: avoid;
  }
  .faq-q {
    font-weight: 600;
    font-size: 10pt;
    color: var(--deep);
    margin-bottom: 6px;
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }
  .faq-q span { color: var(--gold); min-width: 16px; }
  .faq-a { font-size: 9.5pt; color: var(--text); line-height: 1.65; padding-left: 26px; }

  /* ── VALUES ── */
  .values-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .value-card {
    background: var(--ivory);
    border: 1px solid var(--border);
    padding: 18px;
  }
  .value-title {
    font-weight: 600;
    font-size: 10pt;
    color: var(--deep);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .value-title::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--gold);
    border-radius: 50%;
    flex-shrink: 0;
  }
  .value-desc { font-size: 9pt; color: var(--text); line-height: 1.6; }

  /* ── MISSION VISION ── */
  .mv-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  .mv-card {
    padding: 18px;
    border: 1px solid var(--border);
  }
  .mv-card.mission { background: var(--deep); }
  .mv-card.vision { background: var(--gold); }
  .mv-card.promise { background: var(--ivory); }
  .mv-label {
    font-size: 7.5pt;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .mv-card.mission .mv-label { color: var(--gold); }
  .mv-card.vision .mv-label { color: rgba(255,255,255,0.7); }
  .mv-card.promise .mv-label { color: var(--gold); }
  .mv-title {
    font-family: 'Playfair Display', serif;
    font-size: 10.5pt;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  .mv-card.mission .mv-title { color: #fff; }
  .mv-card.vision .mv-title { color: #fff; }
  .mv-card.promise .mv-title { color: var(--deep); }
  .mv-body { font-size: 8.5pt; line-height: 1.6; }
  .mv-card.mission .mv-body { color: rgba(255,255,255,0.65); }
  .mv-card.vision .mv-body { color: rgba(255,255,255,0.85); }
  .mv-card.promise .mv-body { color: var(--muted); }

  /* ── HERO TABLE ── */
  .hero-card {
    background: var(--ivory);
    border-left: 4px solid var(--gold);
    padding: 20px 22px;
    margin-bottom: 16px;
    page-break-inside: avoid;
  }
  .hero-page-name {
    font-size: 7.5pt;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 6px;
  }
  .hero-heading {
    font-family: 'Playfair Display', serif;
    font-size: 13pt;
    color: var(--deep);
    margin-bottom: 4px;
  }
  .hero-body { font-size: 9pt; color: var(--muted); line-height: 1.6; margin-bottom: 8px; }
  .cta-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .cta-pill {
    background: var(--deep);
    color: #fff;
    font-size: 7.5pt;
    padding: 4px 12px;
    font-weight: 500;
  }
  .cta-pill.secondary {
    background: transparent;
    border: 1px solid var(--deep);
    color: var(--deep);
  }

  /* ── IMAGE ASSET TABLE ── */
  .asset-row td:first-child { font-family: monospace; font-size: 8pt; }

  /* ── FOOTER ── */
  .doc-footer {
    background: var(--deep);
    padding: 30px 70px;
    text-align: center;
    page-break-before: always;
  }
  .doc-footer-brand {
    font-family: 'Playfair Display', serif;
    font-size: 18pt;
    color: #fff;
    margin-bottom: 6px;
  }
  .doc-footer-tagline {
    font-size: 9pt;
    color: rgba(255,255,255,0.5);
    margin-bottom: 20px;
  }
  .doc-footer-contact {
    font-size: 9pt;
    color: rgba(255,255,255,0.7);
    line-height: 1.8;
  }
  .doc-footer-contact strong { color: var(--gold); }
  .doc-footer-note {
    margin-top: 24px;
    font-size: 7.5pt;
    color: rgba(255,255,255,0.3);
  }

  /* ── PRINT ── */
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>

<!-- ══ COVER ══ -->
<div class="cover">
  <div class="cover-logo"><span>PI</span></div>
  <div class="cover-overline">Website Content Review Document</div>
  <h1>Progressive<br/>Interiors</h1>
  <div class="cover-rule"></div>
  <p class="cover-sub">A complete overview of all website content — brand identity, services, team, projects, testimonials, and more — prepared for client review and approval.</p>
  <p class="cover-meta">Prepared May 2026 <span>·</span> Hyderabad, India <span>·</span> hello@progressiveinteriors.in</p>
</div>

<!-- ══ TABLE OF CONTENTS ══ -->
<div class="toc-page">
  <h2>Table of Contents</h2>
  <div class="toc-rule"></div>
  <div class="toc-grid">
    <div class="toc-item"><span class="toc-num">01</span><span class="toc-label">Brand Identity</span></div>
    <div class="toc-item"><span class="toc-num">02</span><span class="toc-label">Contact Information</span></div>
    <div class="toc-item"><span class="toc-num">03</span><span class="toc-label">Navigation & Social Media</span></div>
    <div class="toc-item"><span class="toc-num">04</span><span class="toc-label">Key Statistics</span></div>
    <div class="toc-item"><span class="toc-num">05</span><span class="toc-label">Hero Sections</span></div>
    <div class="toc-item"><span class="toc-num">06</span><span class="toc-label">Services</span></div>
    <div class="toc-item"><span class="toc-num">07</span><span class="toc-label">Design Process</span></div>
    <div class="toc-item"><span class="toc-num">08</span><span class="toc-label">Mission, Vision & Promise</span></div>
    <div class="toc-item"><span class="toc-num">09</span><span class="toc-label">Design Philosophy</span></div>
    <div class="toc-item"><span class="toc-num">10</span><span class="toc-label">Company Story</span></div>
    <div class="toc-item"><span class="toc-num">11</span><span class="toc-label">Core Values</span></div>
    <div class="toc-item"><span class="toc-num">12</span><span class="toc-label">Team Members</span></div>
    <div class="toc-item"><span class="toc-num">13</span><span class="toc-label">Projects Portfolio</span></div>
    <div class="toc-item"><span class="toc-num">14</span><span class="toc-label">Client Testimonials</span></div>
    <div class="toc-item"><span class="toc-num">15</span><span class="toc-label">Frequently Asked Questions</span></div>
    <div class="toc-item"><span class="toc-num">16</span><span class="toc-label">Contact Form</span></div>
    <div class="toc-item"><span class="toc-num">17</span><span class="toc-label">Call-to-Action Buttons</span></div>
    <div class="toc-item"><span class="toc-num">18</span><span class="toc-label">Image Assets</span></div>
    <div class="toc-item"><span class="toc-num">19</span><span class="toc-label">Color & Typography</span></div>
    <div class="toc-item"><span class="toc-num">20</span><span class="toc-label">Legal Pages</span></div>
  </div>
</div>

<!-- ══ 01 BRAND ══ -->
<div class="section break">
  <div class="sec-num">Section 01</div>
  <div class="sec-title">Brand Identity</div>
  <div class="sec-rule"></div>
  <table class="info-table">
    <tr><td>Brand Name</td><td>Progressive Interiors</td></tr>
    <tr><td>Short Name</td><td>PI</td></tr>
    <tr><td>Main Tagline</td><td>Designing Spaces That Reflect You</td></tr>
    <tr><td>Sub-tagline</td><td>Bespoke interiors crafted with a focus on tranquility, functionality, and timeless elegance.</td></tr>
    <tr><td>Footer Description</td><td>Refining the art of living through sustainable, minimalist design. Based in Hyderabad, serving clients nationwide.</td></tr>
    <tr><td>Logo File</td><td><code>/logo.png</code></td></tr>
    <tr><td>Copyright Line</td><td>© 2025 Progressive Interiors. All rights reserved.</td></tr>
  </table>
</div>

<!-- ══ 02 CONTACT ══ -->
<div class="section">
  <div class="sec-num">Section 02</div>
  <div class="sec-title">Contact Information</div>
  <div class="sec-rule"></div>
  <table class="info-table">
    <tr><td>Email</td><td>hello@progressiveinteriors.in</td></tr>
    <tr><td>Phone</td><td>+91 90525 25249</td></tr>
    <tr><td>WhatsApp URL</td><td>https://wa.me/919052525249</td></tr>
    <tr><td>Business Hours</td><td>Mon–Sat, 10 AM – 7 PM IST</td></tr>
    <tr><td>Studio Address</td><td>2nd Floor, Brindavan Colony, Lakshmipuram Colony, Rukminipuri Colony,<br/>A. S. Rao Nagar, Hyderabad, Secunderabad, Telangana 500062</td></tr>
    <tr><td>City</td><td>Hyderabad, India</td></tr>
  </table>
</div>

<!-- ══ 03 NAV & SOCIAL ══ -->
<div class="section">
  <div class="sec-num">Section 03</div>
  <div class="sec-title">Navigation & Social Media</div>
  <div class="sec-rule"></div>

  <table class="data-table" style="margin-bottom:20px">
    <thead><tr><th>#</th><th>Nav Label</th><th>Route</th><th>Used In</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Home</td><td>/</td><td>Header, Footer</td></tr>
      <tr><td>2</td><td>About Us</td><td>/about</td><td>Header, Footer</td></tr>
      <tr><td>3</td><td>Our Services</td><td>/services</td><td>Header, Footer</td></tr>
      <tr><td>4</td><td>Our Projects</td><td>/projects</td><td>Header, Footer</td></tr>
      <tr><td>5</td><td>Contact</td><td>/contact</td><td>Header, Footer</td></tr>
      <tr><td>6</td><td>Privacy Policy</td><td>/privacy-policy</td><td>Footer (legal)</td></tr>
      <tr><td>7</td><td>Terms &amp; Conditions</td><td>/terms-and-conditions</td><td>Footer (legal)</td></tr>
    </tbody>
  </table>

  <table class="data-table">
    <thead><tr><th>Platform</th><th>URL</th></tr></thead>
    <tbody>
      <tr><td>Facebook</td><td>https://www.facebook.com/people/Progressive-Interiors/61579745137532/</td></tr>
      <tr><td>Instagram</td><td>https://www.instagram.com/progressiveinteriors.in/</td></tr>
      <tr><td>LinkedIn</td><td>https://www.linkedin.com/company/progressiveinteriors/</td></tr>
    </tbody>
  </table>
</div>

<!-- ══ 04 STATS ══ -->
<div class="section break">
  <div class="sec-num">Section 04</div>
  <div class="sec-title">Key Statistics</div>
  <div class="sec-rule"></div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">Home Page</p>
  <div class="stat-grid" style="margin-bottom:24px">
    <div class="stat-card"><div class="stat-value">15</div><div class="stat-label">Years Experience</div></div>
    <div class="stat-card"><div class="stat-value">450+</div><div class="stat-label">Projects Delivered</div></div>
    <div class="stat-card"><div class="stat-value">99%</div><div class="stat-label">Client Satisfaction</div></div>
    <div class="stat-card"><div class="stat-value">12</div><div class="stat-label">Design Experts</div></div>
  </div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">About Page</p>
  <div class="stat-grid" style="margin-bottom:24px">
    <div class="stat-card"><div class="stat-value">150+</div><div class="stat-label">Projects Completed</div></div>
    <div class="stat-card"><div class="stat-value">6+</div><div class="stat-label">Cities Served</div></div>
    <div class="stat-card"><div class="stat-value">40+</div><div class="stat-label">Design Awards</div></div>
    <div class="stat-card"><div class="stat-value">100%</div><div class="stat-label">Commitment</div></div>
  </div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">Services Page</p>
  <div class="stat-grid">
    <div class="stat-card"><div class="stat-value">150+</div><div class="stat-label">Projects Delivered</div></div>
    <div class="stat-card"><div class="stat-value">12+</div><div class="stat-label">Years Experience</div></div>
    <div class="stat-card"><div class="stat-value">98%</div><div class="stat-label">Client Satisfaction</div></div>
    <div class="stat-card"><div class="stat-value">40+</div><div class="stat-label">Design Awards</div></div>
  </div>
</div>

<!-- ══ 05 HEROES ══ -->
<div class="section break">
  <div class="sec-num">Section 05</div>
  <div class="sec-title">Hero Sections</div>
  <div class="sec-rule"></div>

  <div class="hero-card">
    <div class="hero-page-name">Home Page</div>
    <div class="hero-heading">Designing Spaces That Reflect You</div>
    <div class="hero-body">Bespoke interiors crafted with a focus on tranquility, functionality, and timeless elegance.</div>
    <div class="cta-row">
      <div class="cta-pill">View Our Portfolio → /projects</div>
      <div class="cta-pill secondary">Book Consultation → /contact</div>
    </div>
  </div>

  <div class="hero-card">
    <div class="hero-page-name">About Page</div>
    <div class="hero-heading">Designing Spaces, Building Stories</div>
    <div class="hero-body">Progressive Interiors is a Hyderabad-based design studio that transforms ordinary spaces into extraordinary experiences. With over 15 years of combined expertise, we bring vision, craft, and heart to every project.</div>
  </div>

  <div class="hero-card">
    <div class="hero-page-name">Services Page</div>
    <div class="hero-heading">Crafting Spaces That Inspire</div>
    <div class="hero-body">From concept to final reveal, we offer a complete spectrum of interior design services tailored to your lifestyle. Every project is a unique collaboration between vision, craft, and the art of refined living.</div>
  </div>

  <div class="hero-card">
    <div class="hero-page-name">Projects Page</div>
    <div class="hero-heading">Spaces We've Brought to Life</div>
    <div class="hero-body">Each project is a unique narrative — a collaboration between vision, craft, and the art of living well. Explore our curated collection of interiors.</div>
  </div>

  <div class="hero-card" style="margin-bottom:0">
    <div class="hero-page-name">Contact Page</div>
    <div class="hero-heading">Let's Create Something Beautiful</div>
    <div class="hero-body">Whether you have a clear vision or need help discovering one, we'd love to hear from you. Let's start the conversation.</div>
  </div>
</div>

<!-- ══ 06 SERVICES ══ -->
<div class="section break">
  <div class="sec-num">Section 06</div>
  <div class="sec-title">Services</div>
  <div class="sec-rule"></div>

  <div class="service-card">
    <div class="service-name">Residential Design</div>
    <div class="service-tagline">Complete Home Transformations</div>
    <div class="service-desc">From heritage homes to modern apartments, we create living spaces that balance beauty with practicality. Our residential design service covers every aspect of your home — from architectural detailing to the final cushion placement.</div>
    <div class="service-inc-title">What's Included</div>
    <ul class="service-inc">
      <li>Space planning &amp; layout optimization</li>
      <li>Custom furniture design &amp; sourcing</li>
      <li>Lighting design &amp; automation</li>
      <li>Color palette &amp; material selection</li>
      <li>Art curation &amp; styling</li>
    </ul>
  </div>

  <div class="service-card">
    <div class="service-name">Space Planning &amp; Renovation</div>
    <div class="service-tagline">Optimized Layouts &amp; Structural Upgrades</div>
    <div class="service-desc">Great design starts with great bones. We analyze your space's potential and develop intelligent floor plans that enhance flow, maximize utility, and respect the original architecture — whether it's a compact city flat or a sprawling bungalow.</div>
    <div class="service-inc-title">What's Included</div>
    <ul class="service-inc">
      <li>Architectural floor plan redesign</li>
      <li>Structural modification consultation</li>
      <li>Kitchen &amp; bathroom layout planning</li>
      <li>Storage solutions &amp; built-ins</li>
      <li>Contractor coordination &amp; project management</li>
    </ul>
  </div>

  <div class="service-card">
    <div class="service-name">Material &amp; Decor Curation</div>
    <div class="service-tagline">Hand-Picked Finishes &amp; Furnishings</div>
    <div class="service-desc">Every surface, fabric, and fixture tells a story. We source materials from trusted artisans across India and the world — handwoven textiles, locally quarried stone, sustainably harvested timber, and bespoke hardware — to create interiors with soul.</div>
    <div class="service-inc-title">What's Included</div>
    <ul class="service-inc">
      <li>Fabric, tile &amp; stone selection</li>
      <li>Artisan &amp; vendor sourcing</li>
      <li>Furniture procurement &amp; custom orders</li>
      <li>Textile &amp; upholstery curation</li>
      <li>Sustainability-focused material alternatives</li>
    </ul>
  </div>
</div>

<!-- ══ 07 PROCESS ══ -->
<div class="section break">
  <div class="sec-num">Section 07</div>
  <div class="sec-title">Design Process</div>
  <div class="sec-rule"></div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Home Page — The PI Way (4 Steps)</p>
  <div class="steps-row" style="grid-template-columns:1fr 1fr;margin-bottom:30px">
    <div class="step"><div class="step-num">01</div><div class="step-body"><div class="step-name">Inquiry</div><div class="step-desc">Understanding your vision and the spatial possibilities.</div></div></div>
    <div class="step"><div class="step-num">02</div><div class="step-body"><div class="step-name">Concept</div><div class="step-desc">Moodboards, material selection, and structural layouts.</div></div></div>
    <div class="step"><div class="step-num">03</div><div class="step-body"><div class="step-name">Design</div><div class="step-desc">3D Visualizations and technical drawings for production.</div></div></div>
    <div class="step"><div class="step-num">04</div><div class="step-body"><div class="step-name">Reveal</div><div class="step-desc">Final styling and the keys to your new sanctuary.</div></div></div>
  </div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Services Page — Full Process (5 Steps)</p>
  <div class="steps-row" style="grid-template-columns:1fr 1fr">
    <div class="step"><div class="step-num">01</div><div class="step-body"><div class="step-name">Discovery</div><div class="step-desc">We listen to your vision, study the space, and understand your lifestyle and aspirations.</div></div></div>
    <div class="step"><div class="step-num">02</div><div class="step-body"><div class="step-name">Concept</div><div class="step-desc">Moodboards, material samples, and spatial layouts bring the vision to life on paper.</div></div></div>
    <div class="step"><div class="step-num">03</div><div class="step-body"><div class="step-name">Design Development</div><div class="step-desc">3D visualizations, technical drawings, and detailed specifications for every element.</div></div></div>
    <div class="step"><div class="step-num">04</div><div class="step-body"><div class="step-name">Execution</div><div class="step-desc">Our trusted craftsmen and contractors bring the design to reality with precision.</div></div></div>
    <div class="step" style="grid-column:1/-1"><div class="step-num">05</div><div class="step-body"><div class="step-name">Reveal</div><div class="step-desc">Final styling, walk-through, and the keys to your beautifully transformed space.</div></div></div>
  </div>
</div>

<!-- ══ 08 MISSION VISION ══ -->
<div class="section break">
  <div class="sec-num">Section 08</div>
  <div class="sec-title">Mission, Vision &amp; Promise</div>
  <div class="sec-rule"></div>
  <div class="mv-grid">
    <div class="mv-card mission">
      <div class="mv-label">Mission</div>
      <div class="mv-title">Elevating Everyday Living Through Thoughtful Design</div>
      <div class="mv-body">We believe that great design isn't just about aesthetics — it's about how a space makes you feel. Our mission is to create interiors that are not only visually stunning but also deeply functional, sustainable, and reflective of the people who inhabit them.</div>
    </div>
    <div class="mv-card vision">
      <div class="mv-label">Vision</div>
      <div class="mv-title">India's Most Trusted Interior Design Studio</div>
      <div class="mv-body">To be India's most trusted interior design studio, known for creating spaces that inspire, endure, and tell authentic stories.</div>
    </div>
    <div class="mv-card promise">
      <div class="mv-label">Our Promise</div>
      <div class="mv-title">Transparent. On-Time. Collaborative.</div>
      <div class="mv-body">Transparent pricing, on-time delivery, and a collaborative process that puts your comfort and satisfaction first.</div>
    </div>
  </div>
</div>

<!-- ══ 09 PHILOSOPHY ══ -->
<div class="section">
  <div class="sec-num">Section 09</div>
  <div class="sec-title">Design Philosophy</div>
  <div class="sec-rule"></div>

  <div style="margin-bottom:20px;padding:20px 22px;background:var(--ivory);border-left:4px solid var(--gold)">
    <div style="font-weight:600;font-size:10.5pt;color:var(--deep);margin-bottom:8px">Rooted in Indian Craft, Refined by Modern Vision</div>
    <p style="font-size:9pt;color:var(--text);line-height:1.65;margin-bottom:8px">We believe great interiors emerge from a dialogue between heritage and modernity. Our designs draw on India's rich traditions of craftsmanship — block printing, stone carving, handloom weaving — and reinterpret them through a contemporary lens.</p>
    <p style="font-size:9pt;color:var(--text);line-height:1.65">Sustainability is not an afterthought; it's woven into every material choice. We prioritize locally sourced, low-impact materials and work with artisan communities across India to bring authenticity and soul to every project.</p>
  </div>

  <div style="padding:20px 22px;background:var(--ivory);border-left:4px solid var(--deep)">
    <div style="font-weight:600;font-size:10.5pt;color:var(--deep);margin-bottom:8px">Client-First Process: Collaborative, Transparent, Tailored</div>
    <p style="font-size:9pt;color:var(--text);line-height:1.65;margin-bottom:8px">Every project begins with listening. We invest time understanding not just your aesthetic preferences, but how you live, work, and entertain. The result is a space that feels intuitively yours from the moment you step in.</p>
    <p style="font-size:9pt;color:var(--text);line-height:1.65">Our process is completely transparent — from budgets to timelines. You'll have a dedicated project manager, regular progress updates, and full visibility into every decision. No surprises, just beautiful spaces delivered on time.</p>
  </div>
</div>

<!-- ══ 10 STORY ══ -->
<div class="section">
  <div class="sec-num">Section 10</div>
  <div class="sec-title">Company Story</div>
  <div class="sec-rule"></div>
  <p style="font-weight:600;font-size:11pt;color:var(--deep);font-family:'Playfair Display',serif;margin-bottom:12px">Born from a Passion for Purposeful Design</p>
  <p style="font-size:9.5pt;color:var(--text);line-height:1.7;margin-bottom:12px">Progressive Interiors was founded with a simple belief — that every space has the potential to inspire. From our studio in Hyderabad, we've grown into a team of designers, planners, and craftsmen who share a deep commitment to quality and client satisfaction.</p>
  <p style="font-size:9.5pt;color:var(--text);line-height:1.7">What started as a small residential design practice has evolved into a full-service interior design studio serving clients across India. From luxury homes and modern apartments to corporate offices and retail spaces, we bring the same passion and precision to every project — no matter the scale.</p>
</div>

<!-- ══ 11 VALUES ══ -->
<div class="section">
  <div class="sec-num">Section 11</div>
  <div class="sec-title">Core Values</div>
  <div class="sec-rule"></div>
  <div class="values-grid">
    <div class="value-card">
      <div class="value-title">Client-Centric Design</div>
      <div class="value-desc">Every space begins with listening. We design around your lifestyle, preferences, and aspirations — not trends.</div>
    </div>
    <div class="value-card">
      <div class="value-title">Craftsmanship First</div>
      <div class="value-desc">We partner with skilled artisans across India, valuing handmade quality and attention to detail in every element.</div>
    </div>
    <div class="value-card">
      <div class="value-title">Sustainable Choices</div>
      <div class="value-desc">From locally sourced materials to energy-efficient planning, sustainability is woven into every design decision.</div>
    </div>
    <div class="value-card">
      <div class="value-title">End-to-End Excellence</div>
      <div class="value-desc">From the first sketch to the final cushion, we manage every detail so you can enjoy the journey, not just the result.</div>
    </div>
  </div>
</div>

<!-- ══ 12 TEAM ══ -->
<div class="section break">
  <div class="sec-num">Section 12</div>
  <div class="sec-title">Team Members</div>
  <div class="sec-rule"></div>
  <div class="team-grid">
    <div class="team-card">
      <div class="team-name">Syam Chopra</div>
      <div class="team-role">Director</div>
      <div class="team-exp">15 Years Experience</div>
      <div class="team-bio">Recognized for strong leadership and client-centric collaboration, Syam Chopra thrives in dynamic environments, working closely with architects, contractors, and stakeholders to achieve outstanding results. He brings a strategic approach, sharp attention to detail, and a passion for elevating built environments.</div>
    </div>
    <div class="team-card">
      <div class="team-name">E. Hanock Moses</div>
      <div class="team-role">Marketing Director</div>
      <div class="team-exp">8 Years Experience</div>
      <div class="team-bio">With 8 years of hands-on experience in interior design and construction, E. Hanock Moses is known for blending creativity with technical precision. Specializing in residential, commercial, and retail projects, he transforms client visions into reality through innovative design and meticulous planning.</div>
    </div>
    <div class="team-card">
      <div class="team-name">Bh. Pavan Kumar</div>
      <div class="team-role">Marketing Director</div>
      <div class="team-exp">10+ Years Experience</div>
      <div class="team-bio">An effective team leader adept at coordinating between architects, engineers, vendors, and clients. Known for attention to detail and commitment to client satisfaction, he delivers projects on time, within budget, and above expectations — staying current with the latest trends and sustainable practices.</div>
    </div>
  </div>
</div>

<!-- ══ 13 PROJECTS ══ -->
<div class="section break">
  <div class="sec-num">Section 13</div>
  <div class="sec-title">Projects Portfolio</div>
  <div class="sec-rule"></div>

  <div class="project-card">
    <div class="project-header">
      <div><div class="project-title">Ananda Villa</div><div class="project-tagline">A spa-inspired sanctuary blending natural stone with warm wood</div></div>
      <div class="project-badges"><span class="badge">Residential</span></div>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <div class="project-meta-item"><strong>Location</strong>Bangalore, India</div>
        <div class="project-meta-item"><strong>Scope</strong>Full Interior Design &amp; Landscaping</div>
        <div class="project-meta-item"><strong>Slug</strong>ananda-villa</div>
      </div>
      <div class="project-desc">Nestled in the lush outskirts of Bangalore, Ananda Villa is a testament to our philosophy of harmonizing nature with refined living. Every element — from the hand-selected Rajasthani sandstone cladding to the custom-milled teak wood joinery — was chosen to evoke a sense of calm and permanence. The open floor plan flows seamlessly between indoor and outdoor spaces, with floor-to-ceiling glass walls framing the garden and pool beyond. We curated a palette of warm creams, mineral greys, and sage greens to create an atmosphere that breathes tranquility.</div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <div><div class="project-title">Kala Loft</div><div class="project-tagline">Industrial heritage meets modern comfort in this transformed warehouse space</div></div>
      <div class="project-badges"><span class="badge">Residential</span></div>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <div class="project-meta-item"><strong>Location</strong>Mumbai, India</div>
        <div class="project-meta-item"><strong>Scope</strong>Adaptive Reuse &amp; Interior Design</div>
        <div class="project-meta-item"><strong>Slug</strong>kala-loft</div>
      </div>
      <div class="project-desc">What was once a century-old textile warehouse in Mumbai's Lower Parel has been reimagined as a stunning contemporary loft. Kala Loft celebrates the raw beauty of exposed brick and original cast-iron columns while introducing modern warmth through bespoke walnut cabinetry, handwoven dhurrie rugs, and statement brass lighting. The double-height living space, anchored by a monumental bookshelf wall, serves as both a living area and a gallery for the client's contemporary Indian art collection.</div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <div><div class="project-title">Samudra Retreat</div><div class="project-tagline">Bright, breezy coastal living with natural textures and ocean-inspired palette</div></div>
      <div class="project-badges"><span class="badge">Residential</span></div>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <div class="project-meta-item"><strong>Location</strong>Goa, India</div>
        <div class="project-meta-item"><strong>Scope</strong>Interior Design &amp; Custom Furniture</div>
        <div class="project-meta-item"><strong>Slug</strong>samudra-retreat</div>
      </div>
      <div class="project-desc">Perched on the Goa coastline, Samudra Retreat captures the essence of relaxed coastal luxury. The design draws inspiration from the surrounding sea and sky — whitewashed lime-plastered walls, reclaimed driftwood accents, and hand-loomed cotton textiles in indigo and ivory. We designed each room to frame the ocean view, using wide verandahs, sliding folding doors, and carefully positioned mirrors to bring the outdoors in. The result is a home that feels like a permanent holiday.</div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <div><div class="project-title">Vanam Studio</div><div class="project-tagline">A creative workspace where nature and design coexist harmoniously</div></div>
      <div class="project-badges"><span class="badge">Commercial</span></div>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <div class="project-meta-item"><strong>Location</strong>Chennai, India</div>
        <div class="project-meta-item"><strong>Scope</strong>Commercial Interior Design</div>
        <div class="project-meta-item"><strong>Slug</strong>vanam-studio</div>
      </div>
      <div class="project-desc">Vanam Studio was born from the belief that a workspace surrounded by greenery fosters sharper creativity and deeper focus. Located in a converted bungalow in Chennai's Adyar neighborhood, this design studio features a central atrium with a living tree, moss walls, and an abundance of trailing plants. We balanced the biophilic vision with functional workspaces — soundproofed meeting pods, adjustable-height desks, and a curated material library — all in a palette of warm terracotta, deep greens, and natural pine.</div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <div><div class="project-title">Dharohar Manor</div><div class="project-tagline">Timeless elegance restored with contemporary functionality</div></div>
      <div class="project-badges"><span class="badge">Residential</span></div>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <div class="project-meta-item"><strong>Location</strong>Jaipur, India</div>
        <div class="project-meta-item"><strong>Scope</strong>Heritage Restoration &amp; Interior Design</div>
        <div class="project-meta-item"><strong>Slug</strong>dharohar-manor</div>
      </div>
      <div class="project-desc">Dharohar Manor is a loving restoration of a colonial-era estate in Jaipur. We preserved the original arched doorways, ornate jali screens, and vintage terrazzo floors while introducing contemporary Indian design — Channapatna-turned furniture legs, block-printed cushions from local artisans, and custom brass light fixtures inspired by traditional diyas. The grand dining hall, with its 14-foot ceilings and restored crystal chandelier, sits alongside a modern Italian kitchen — a dialogue between heritage and today.</div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <div><div class="project-title">Shanti Suite</div><div class="project-tagline">Zen-inspired tranquility for a boutique hotel experience</div></div>
      <div class="project-badges"><span class="badge">Hospitality</span></div>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <div class="project-meta-item"><strong>Location</strong>Rishikesh, India</div>
        <div class="project-meta-item"><strong>Scope</strong>Hospitality Interior Design</div>
        <div class="project-meta-item"><strong>Slug</strong>shanti-suite</div>
      </div>
      <div class="project-desc">Designed for a boutique wellness resort in Rishikesh, Shanti Suite draws on the meditative spirit of the Himalayas. Each room is a study in restraint — low platform beds in reclaimed sal wood, hand-plastered clay walls, and floor-to-ceiling windows framing the Ganges valley. We introduced subtle luxury through handwoven Pashmina throws, hammered copper basin sinks, and a private meditation alcove with ambient candlelight. The design invites guests to disconnect and rediscover stillness.</div>
    </div>
  </div>
</div>

<!-- ══ 14 TESTIMONIALS ══ -->
<div class="section break">
  <div class="sec-num">Section 14</div>
  <div class="sec-title">Client Testimonials</div>
  <div class="sec-rule"></div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Home Page</p>
  <div class="testimonial">
    <div class="test-stars">★★★★★</div>
    <div class="test-quote">"The level of detail and the serene atmosphere they created in our beach house is simply unmatched."</div>
    <div class="test-name">Elena Richardson</div>
    <div class="test-project">Malibu Residency</div>
  </div>
  <div class="testimonial">
    <div class="test-stars">★★★★★</div>
    <div class="test-quote">"Working with PI was a dream. They understood my need for minimalism without losing the cozy soul of a home."</div>
    <div class="test-name">Marcus Chen</div>
    <div class="test-project">Skyline Apartment</div>
  </div>
  <div class="testimonial" style="margin-bottom:24px">
    <div class="test-stars">★★★★★</div>
    <div class="test-quote">"Professional, intuitive, and highly talented. Our office feels like a wellness retreat now."</div>
    <div class="test-name">Sarah Jenkins</div>
    <div class="test-project">Bloom HQ</div>
  </div>

  <p style="font-size:8pt;font-weight:600;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Services Page</p>
  <div class="testimonial">
    <div class="test-stars">★★★★★</div>
    <div class="test-quote">"Progressive Interiors transformed our family home in Bangalore into something out of a design magazine. Their attention to Indian craftsmanship is unparalleled."</div>
    <div class="test-name">Priya &amp; Arjun Sharma</div>
    <div class="test-project">Ananda Villa, Bangalore</div>
  </div>
  <div class="testimonial">
    <div class="test-stars">★★★★★</div>
    <div class="test-quote">"Working with PI was effortless. They understood our need for a modern workspace that still felt warm and green. Our team productivity has actually increased!"</div>
    <div class="test-name">Kavitha Rajan</div>
    <div class="test-project">Vanam Studio, Chennai</div>
  </div>
  <div class="testimonial">
    <div class="test-stars">★★★★★</div>
    <div class="test-quote">"From the first mood board to the final reveal, the process was transparent and exciting. Our guests now think they're staying at a luxury boutique hotel."</div>
    <div class="test-name">Rahul Mehta</div>
    <div class="test-project">Shanti Suite, Rishikesh</div>
  </div>
</div>

<!-- ══ 15 FAQ ══ -->
<div class="section break">
  <div class="sec-num">Section 15</div>
  <div class="sec-title">Frequently Asked Questions</div>
  <div class="sec-rule"></div>

  <div class="faq-item">
    <div class="faq-q"><span>Q1</span>How much does an interior design project cost?</div>
    <div class="faq-a">Every project is unique. Our fees depend on the scope, size, and complexity of the work. We offer a free initial consultation to understand your needs and provide a tailored quote. Residential projects typically start from ₹8 lakhs for a single room and scale based on the full scope.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q"><span>Q2</span>What is your typical project timeline?</div>
    <div class="faq-a">A typical residential project takes 8–16 weeks from concept to reveal, depending on the scale. Space planning and renovation projects may take 12–20 weeks if structural work is involved. We provide a detailed timeline during the concept phase so you always know what to expect.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q"><span>Q3</span>Do you offer a free consultation?</div>
    <div class="faq-a">Yes! We offer a complimentary 30-minute discovery call where we discuss your vision, space, and budget. This helps us understand if we're the right fit for each other before committing to a full engagement.</div>
  </div>
  <div class="faq-item" style="border-bottom:none">
    <div class="faq-q"><span>Q4</span>Do you work outside Hyderabad?</div>
    <div class="faq-a">Absolutely. While our studio is based in Hyderabad, we work with clients across India. We have completed projects in Bangalore, Mumbai, Goa, Chennai, Jaipur, and Rishikesh. For out-of-city projects, we schedule regular site visits and use video conferencing for seamless collaboration.</div>
  </div>
</div>

<!-- ══ 16 CONTACT FORM ══ -->
<div class="section break">
  <div class="sec-num">Section 16</div>
  <div class="sec-title">Contact Form</div>
  <div class="sec-rule"></div>
  <table class="data-table" style="margin-bottom:20px">
    <thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Options / Notes</th></tr></thead>
    <tbody>
      <tr><td>Full Name</td><td>text</td><td>Yes</td><td>—</td></tr>
      <tr><td>Email Address</td><td>email</td><td>Yes</td><td>—</td></tr>
      <tr><td>Phone Number</td><td>tel</td><td>No</td><td>—</td></tr>
      <tr><td>Service Interested In</td><td>select</td><td>No</td><td>Residential Design · Space Planning &amp; Renovation · Material &amp; Decor Curation · Other / Not Sure</td></tr>
      <tr><td>Your Message</td><td>textarea</td><td>Yes</td><td>—</td></tr>
    </tbody>
  </table>
  <table class="info-table">
    <tr><td>Submit Button Label</td><td>Send Message</td></tr>
    <tr><td>Success Message</td><td>Thank You! We've received your message and will get back to you within 24 hours.</td></tr>
  </table>
</div>

<!-- ══ 17 CTAs ══ -->
<div class="section">
  <div class="sec-num">Section 17</div>
  <div class="sec-title">Call-to-Action Buttons</div>
  <div class="sec-rule"></div>
  <table class="data-table">
    <thead><tr><th>Button Label</th><th>Destination / Action</th></tr></thead>
    <tbody>
      <tr><td>View Our Portfolio</td><td>/projects</td></tr>
      <tr><td>Book Consultation</td><td>/contact</td></tr>
      <tr><td>Book a Free Discovery Call</td><td>/contact</td></tr>
      <tr><td>Start Your Project</td><td>/contact</td></tr>
      <tr><td>View All Projects</td><td>/projects</td></tr>
      <tr><td>Book a Free Consultation</td><td>/contact</td></tr>
      <tr><td>Browse Services</td><td>/services</td></tr>
      <tr><td>Discover Our Story →</td><td>/about</td></tr>
      <tr><td>View Our Work</td><td>/projects</td></tr>
      <tr><td>Explore Our Work</td><td>/projects</td></tr>
      <tr><td>Back to Home</td><td>/</td></tr>
      <tr><td>Chat on WhatsApp</td><td>https://wa.me/919052525249</td></tr>
      <tr><td>Call Us Directly</td><td>tel:+919052525249</td></tr>
      <tr><td>Send Message</td><td>Form submit</td></tr>
    </tbody>
  </table>
</div>

<!-- ══ 18 IMAGE ASSETS ══ -->
<div class="section break">
  <div class="sec-num">Section 18</div>
  <div class="sec-title">Image Assets</div>
  <div class="sec-rule"></div>
  <table class="data-table asset-row">
    <thead><tr><th>File</th><th>Used In</th><th>Alt Text</th></tr></thead>
    <tbody>
      <tr><td>hero-living-room.webp</td><td>HomePage hero</td><td>Luxury Interior</td></tr>
      <tr><td>projects-hero-collage.webp</td><td>ProjectsPage hero</td><td>Our Projects</td></tr>
      <tr><td>service-residential-design.webp</td><td>ServicesPage hero, HomePage services</td><td>Residential Interior Design / Our Services</td></tr>
      <tr><td>service-space-planning.webp</td><td>ServicesPage</td><td>Space Planning &amp; Renovation</td></tr>
      <tr><td>service-material-curation.webp</td><td>ServicesPage</td><td>Material &amp; Decor Curation</td></tr>
      <tr><td>brand-studio-workspace.png</td><td>AboutPage (story, philosophy, process)</td><td>Studio Space / Our Studio / Design Philosophy</td></tr>
      <tr><td>project-serene-haven.webp</td><td>ProjectsPage, ProjectDetailPage (Ananda Villa)</td><td>Ananda Villa</td></tr>
      <tr><td>detail-serene-haven-1.webp</td><td>ProjectDetailPage (Ananda Villa)</td><td>Ananda Villa detail</td></tr>
      <tr><td>detail-serene-haven-2.webp</td><td>ProjectDetailPage (Ananda Villa)</td><td>Ananda Villa detail</td></tr>
      <tr><td>project-urban-loft.webp</td><td>ProjectsPage, ProjectDetailPage (Kala Loft)</td><td>Kala Loft</td></tr>
      <tr><td>detail-urban-loft-1.webp</td><td>ProjectDetailPage (Kala Loft)</td><td>Kala Loft detail</td></tr>
      <tr><td>detail-urban-loft-2.webp</td><td>ProjectDetailPage (Kala Loft)</td><td>Kala Loft detail</td></tr>
      <tr><td>project-coastal-retreat.webp</td><td>ProjectsPage (Samudra Retreat)</td><td>Samudra Retreat</td></tr>
      <tr><td>project-botanical-studio.webp</td><td>ProjectsPage (Vanam Studio)</td><td>Vanam Studio</td></tr>
      <tr><td>project-heritage-manor.webp</td><td>ProjectsPage (Dharohar Manor)</td><td>Dharohar Manor</td></tr>
      <tr><td>project-zen-garden-suite.webp</td><td>ProjectsPage (Shanti Suite)</td><td>Shanti Suite</td></tr>
      <tr><td>/logo.png</td><td>Header, Footer</td><td>Progressive Interiors</td></tr>
    </tbody>
  </table>
</div>

<!-- ══ 19 COLORS ══ -->
<div class="section">
  <div class="sec-num">Section 19</div>
  <div class="sec-title">Color &amp; Typography</div>
  <div class="sec-rule"></div>
  <table class="data-table" style="margin-bottom:16px">
    <thead><tr><th>Token</th><th>Role</th><th>Swatch</th></tr></thead>
    <tbody>
      <tr><td>deep-blue</td><td>Primary dark / background / headers</td><td><span style="display:inline-block;width:16px;height:16px;background:#1A1F2E;border:1px solid #ccc;vertical-align:middle"></span></td></tr>
      <tr><td>warm-gold</td><td>Accent / highlight / CTAs</td><td><span style="display:inline-block;width:16px;height:16px;background:#B8973A;border:1px solid #ccc;vertical-align:middle"></span></td></tr>
      <tr><td>ivory</td><td>Primary light / section backgrounds</td><td><span style="display:inline-block;width:16px;height:16px;background:#F8F4EF;border:1px solid #ccc;vertical-align:middle"></span></td></tr>
    </tbody>
  </table>
  <table class="data-table">
    <thead><tr><th>Element</th><th>Font</th><th>Style</th></tr></thead>
    <tbody>
      <tr><td>Headings / Display</td><td>Serif (font-serif)</td><td>Playfair Display or similar</td></tr>
      <tr><td>Body / UI</td><td>Sans-serif</td><td>Regular / Medium weight</td></tr>
      <tr><td>Labels / Overlines</td><td>Sans-serif</td><td>Uppercase + tracking-wide</td></tr>
    </tbody>
  </table>
</div>

<!-- ══ 20 LEGAL ══ -->
<div class="section">
  <div class="sec-num">Section 20</div>
  <div class="sec-title">Legal Pages</div>
  <div class="sec-rule"></div>
  <table class="data-table">
    <thead><tr><th>Page</th><th>Route</th><th>Last Updated</th><th>Sections</th></tr></thead>
    <tbody>
      <tr>
        <td>Privacy Policy</td>
        <td>/privacy-policy</td>
        <td>March 2025</td>
        <td>Introduction · Information We Collect · How We Use Your Information · Data Sharing &amp; Disclosure · Data Security · Your Rights · Cookies · Third-Party Links · Changes to This Policy · Contact Us</td>
      </tr>
      <tr>
        <td>Terms &amp; Conditions</td>
        <td>/terms-and-conditions</td>
        <td>March 2025</td>
        <td>Agreement to Terms · Services · Client Obligations · Payments &amp; Billing · Design Revisions · Intellectual Property · Cancellation &amp; Refunds · Warranties &amp; Limitations · Liability · Portfolio &amp; Photography · Governing Law · Contact Us</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ══ DOCUMENT FOOTER ══ -->
<div class="doc-footer">
  <div class="doc-footer-brand">Progressive Interiors</div>
  <div class="doc-footer-tagline">Designing Spaces That Reflect You</div>
  <div class="doc-footer-contact">
    <strong>hello@progressiveinteriors.in</strong> &nbsp;·&nbsp; +91 90525 25249<br/>
    2nd Floor, Brindavan Colony, A. S. Rao Nagar, Hyderabad, Telangana 500062<br/>
    Mon–Sat, 10 AM – 7 PM IST
  </div>
  <div class="doc-footer-note">© 2025 Progressive Interiors. All rights reserved. · Confidential — for client review only.</div>
</div>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`PDF saved to: ${outputPath}`);
})();

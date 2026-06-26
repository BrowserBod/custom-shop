/* ============================================================
   Custom Shop — Design Tokens
   Palette: warm parchment + saddle leather + brass foil accent
   Type: Fraunces (display, letterpress character) + Inter (body/UI)
   ============================================================ */

:root {
  /* Color tokens */
  --color-parchment: #FBF6EE;
  --color-parchment-deep: #F3EAD9;
  --color-leather: #4A2E22;
  --color-leather-deep: #342016;
  --color-brass: #B8862E;
  --color-brass-light: #D4A84E;
  --color-terracotta: #C97B63;
  --color-ink: #2B2622;
  --color-ink-soft: #5C5248;
  --color-cream-card: #FFFDF8;
  --color-line: rgba(74, 46, 34, 0.14);
  --color-success: #5B7553;
  --color-error: #A8472E;

  /* Type */
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-utility: 'IBM Plex Mono', monospace;

  /* Spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 0.875rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;

  /* Radii — soft, hand-finished, not sharp e-commerce defaults */
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 22px;

  /* Shadows — warm-toned, low contrast, like soft studio light */
  --shadow-card: 0 4px 16px rgba(74, 46, 34, 0.08), 0 1px 3px rgba(74, 46, 34, 0.06);
  --shadow-raised: 0 8px 28px rgba(74, 46, 34, 0.14), 0 2px 6px rgba(74, 46, 34, 0.08);
  --shadow-stamp-press: inset 0 2px 6px rgba(74, 46, 34, 0.22), inset 0 1px 1px rgba(74, 46, 34, 0.3);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  margin: 0;
  background: var(--color-parchment);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  color: var(--color-leather);
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.01em;
}

a {
  color: var(--color-leather);
  text-decoration: none;
}

button {
  font-family: var(--font-body);
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

:focus-visible {
  outline: 2px solid var(--color-brass);
  outline-offset: 3px;
  border-radius: 4px;
}

.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* ============================================================
   Header / Nav
   ============================================================ */

.site-header {
  background: var(--color-parchment);
  border-bottom: 1px solid var(--color-line);
  position: sticky;
  top: 0;
  z-index: 50;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-sm) 0;
}

.site-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-leather);
  letter-spacing: -0.01em;
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
}

.site-logo span {
  font-family: var(--font-utility);
  font-size: 0.6rem;
  font-weight: 500;
  color: var(--color-brass);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  position: relative;
  top: -0.6rem;
}

.site-nav {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

.site-nav a {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: color 0.15s ease;
}

.site-nav a:hover {
  color: var(--color-leather);
}

.cart-pill {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--color-leather);
  color: var(--color-parchment);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
}

/* ============================================================
   Breadcrumb
   ============================================================ */

.breadcrumb {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  font-size: 0.82rem;
  color: var(--color-ink-soft);
  padding: var(--space-md) 0 0;
}

.breadcrumb a {
  color: var(--color-ink-soft);
}

.breadcrumb a:hover {
  color: var(--color-leather);
}

.breadcrumb .sep {
  opacity: 0.5;
}

/* ============================================================
   Product Detail Layout
   ============================================================ */

.product-detail {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-xl);
  padding: var(--space-lg) 0 var(--space-2xl);
  align-items: start;
}

@media (max-width: 860px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}

/* --- Image / Preview side (the "stamp" signature element lives here) --- */

.product-media {
  position: sticky;
  top: 88px;
}

@media (max-width: 860px) {
  .product-media {
    position: static;
  }
}

.product-media__frame {
  background: var(--color-cream-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  aspect-ratio: 1 / 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-media__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-media__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-ink-soft);
  padding: var(--space-lg);
  text-align: center;
}

.product-media__placeholder svg {
  width: 48px;
  height: 48px;
  opacity: 0.4;
}

/* Stamp-impression overlay: triggers briefly when a personalization
   field changes, to visually "press" the choice into the product */
.stamp-impression {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.stamp-impression.is-active {
  animation: stamp-press 0.55s ease-out;
}

@keyframes stamp-press {
  0% {
    opacity: 0;
    box-shadow: inset 0 0 0 rgba(74, 46, 34, 0);
  }
  35% {
    opacity: 1;
    box-shadow: var(--shadow-stamp-press);
  }
  100% {
    opacity: 0;
    box-shadow: inset 0 0 0 rgba(74, 46, 34, 0);
  }
}

.preview-text-overlay {
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  color: var(--color-leather);
  background: rgba(251, 246, 238, 0.88);
  padding: 0.3rem 1rem;
  border-radius: var(--radius-sm);
  max-width: 80%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.2s ease;
}

.product-media__thumbs {
  display: flex;
  gap: 0.6rem;
  margin-top: var(--space-sm);
}

.product-media__thumb {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-sm);
  background: var(--color-cream-card);
  border: 2px solid transparent;
  overflow: hidden;
  cursor: pointer;
}

.product-media__thumb.is-active {
  border-color: var(--color-brass);
}

/* --- Info / form side --- */

.product-info__category {
  font-family: var(--font-utility);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-brass);
  font-weight: 600;
}

.product-info__title {
  font-size: 2.1rem;
  margin-top: 0.5rem;
  line-height: 1.15;
}

.product-info__price {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-leather);
  margin-top: var(--space-sm);
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}

.product-info__price .price-note {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-ink-soft);
  font-weight: 400;
}

.product-info__description {
  margin-top: var(--space-md);
  color: var(--color-ink-soft);
  font-size: 0.98rem;
  max-width: 46ch;
}

/* ============================================================
   Form sections (variants, personalization, add-ons)
   ============================================================ */

.form-section {
  margin-top: var(--space-lg);
  border-top: 1px solid var(--color-line);
  padding-top: var(--space-md);
}

.form-section__label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-leather);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--space-sm);
}

.form-section__label .selected-value {
  font-weight: 400;
  color: var(--color-ink-soft);
  font-family: var(--font-utility);
  font-size: 0.78rem;
}

.required-mark {
  color: var(--color-terracotta);
  margin-left: 0.2rem;
}

/* --- Swatch / option pickers --- */

.option-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.option-chip {
  border: 1.5px solid var(--color-line);
  background: var(--color-cream-card);
  color: var(--color-ink);
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
  transition: border-color 0.15s ease, background 0.15s ease, transform 0.1s ease;
}

.option-chip:hover {
  border-color: var(--color-brass-light);
}

.option-chip.is-selected {
  background: var(--color-leather);
  border-color: var(--color-leather);
  color: var(--color-parchment);
}

.option-chip.is-disabled {
  opacity: 0.35;
  text-decoration: line-through;
  cursor: not-allowed;
}

.swatch-chip {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--color-line);
  padding: 0;
  position: relative;
  transition: border-color 0.15s ease, transform 0.1s ease;
}

.swatch-chip.is-selected {
  border-color: var(--color-brass);
  transform: scale(1.08);
}

.swatch-chip.is-selected::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.85rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.4);
}

/* --- Text inputs / personalization fields --- */

.field-help {
  font-size: 0.78rem;
  color: var(--color-ink-soft);
  margin-top: 0.35rem;
}

.field-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--color-line);
  border-radius: var(--radius-sm);
  background: var(--color-cream-card);
  color: var(--color-ink);
  transition: border-color 0.15s ease;
}

.field-input:focus {
  border-color: var(--color-brass);
}

.field-input.has-error {
  border-color: var(--color-error);
}

textarea.field-input {
  resize: vertical;
  min-height: 80px;
}

.char-counter {
  font-family: var(--font-utility);
  font-size: 0.72rem;
  color: var(--color-ink-soft);
  text-align: right;
  margin-top: 0.25rem;
}

.char-counter.is-near-limit {
  color: var(--color-terracotta);
}

.error-text {
  font-size: 0.78rem;
  color: var(--color-error);
  margin-top: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

/* --- Dropdown (font choice etc) --- */

select.field-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234A2E22' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

/* --- Image upload dropzone --- */

.upload-dropzone {
  border: 1.5px dashed var(--color-line);
  border-radius: var(--radius-md);
  background: var(--color-cream-card);
  padding: var(--space-lg) var(--space-md);
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.upload-dropzone:hover,
.upload-dropzone.is-dragover {
  border-color: var(--color-brass);
  background: var(--color-parchment-deep);
}

.upload-dropzone svg {
  width: 32px;
  height: 32px;
  color: var(--color-brass);
  margin-bottom: 0.5rem;
}

.upload-dropzone__text {
  font-size: 0.9rem;
  color: var(--color-ink-soft);
}

.upload-dropzone__text strong {
  color: var(--color-leather);
}

.upload-preview {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--color-cream-card);
  border: 1.5px solid var(--color-line);
  border-radius: var(--radius-md);
  padding: 0.75rem;
}

.upload-preview img {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  object-fit: cover;
}

.upload-preview__name {
  font-size: 0.85rem;
  color: var(--color-ink);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.upload-remove {
  background: none;
  border: none;
  color: var(--color-terracotta);
  font-size: 0.8rem;
  font-weight: 600;
}

/* --- Add-ons (tiered upsells) --- */

.addon-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--color-line);
}

.addon-row:last-child {
  border-bottom: none;
}

.addon-checkbox {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1.5px solid var(--color-line);
  background: var(--color-cream-card);
  flex-shrink: 0;
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.addon-checkbox.is-checked {
  background: var(--color-brass);
  border-color: var(--color-brass);
}

.addon-checkbox.is-checked::after {
  content: '✓';
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
}

.addon-row__body {
  flex: 1;
}

.addon-row__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;
}

.addon-row__label {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-ink);
}

.addon-row__price {
  font-family: var(--font-utility);
  font-size: 0.85rem;
  color: var(--color-brass);
  font-weight: 600;
}

.addon-row__description {
  font-size: 0.82rem;
  color: var(--color-ink-soft);
  margin-top: 0.2rem;
}

.addon-row__input {
  margin-top: 0.65rem;
}

/* ============================================================
   Sticky add-to-cart bar
   ============================================================ */

.add-to-cart-bar {
  margin-top: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.qty-stepper {
  display: flex;
  align-items: center;
  border: 1.5px solid var(--color-line);
  border-radius: var(--radius-sm);
  background: var(--color-cream-card);
}

.qty-stepper button {
  width: 38px;
  height: 44px;
  background: none;
  border: none;
  font-size: 1.1rem;
  color: var(--color-leather);
}

.qty-stepper input {
  width: 36px;
  text-align: center;
  border: none;
  background: none;
  font-size: 0.95rem;
  font-family: var(--font-utility);
}

.btn-primary {
  flex: 1;
  background: var(--color-leather);
  color: var(--color-parchment);
  border: none;
  border-radius: var(--radius-sm);
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.15s ease, transform 0.08s ease;
}

.btn-primary:hover {
  background: var(--color-leather-deep);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary .total-price {
  font-family: var(--font-utility);
  opacity: 0.85;
  font-size: 0.9rem;
}

/* ============================================================
   Stock / status badges
   ============================================================ */

.stock-note {
  font-size: 0.82rem;
  margin-top: var(--space-sm);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.stock-note.low-stock {
  color: var(--color-terracotta);
}

.stock-note.in-stock {
  color: var(--color-success);
}

.stock-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

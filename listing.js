/* ============================================================
   Listing Page — Hero + Product Grid
   ============================================================ */

.is-active-nav {
  color: var(--color-leather) !important;
  font-weight: 700;
}

/* --- Hero --- */

.hero {
  position: relative;
  background: var(--color-parchment-deep);
  border-bottom: 1px solid var(--color-line);
  overflow: hidden;
}

.hero__inner {
  padding: var(--space-2xl) var(--space-md) var(--space-xl);
  max-width: 640px;
}

.hero__eyebrow {
  font-family: var(--font-utility);
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-brass);
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.hero__title {
  font-size: 3.1rem;
  line-height: 1.08;
  letter-spacing: -0.015em;
}

.hero__subtitle {
  margin-top: var(--space-md);
  font-size: 1.08rem;
  color: var(--color-ink-soft);
  max-width: 42ch;
}

/* The signature element: a wax-seal / stamp impression mark, rotated
   slightly as if pressed onto the page at an angle -- ties the engraving/
   foil-stamping subject matter directly into the page's own visual identity */
.hero__stamp-mark {
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%) rotate(-8deg);
  color: var(--color-leather);
  opacity: 0.16;
  width: 220px;
  height: 220px;
}

@media (max-width: 860px) {
  .hero__title {
    font-size: 2.2rem;
  }
  .hero__stamp-mark {
    display: none;
  }
}

/* --- Toolbar --- */

.catalog-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-sm);
  padding: var(--space-lg) 0 var(--space-md);
}

.category-pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category-pill {
  border: 1.5px solid var(--color-line);
  background: var(--color-cream-card);
  color: var(--color-ink-soft);
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 500;
  transition: all 0.15s ease;
}

.category-pill:hover {
  border-color: var(--color-brass-light);
  color: var(--color-leather);
}

.category-pill.is-active {
  background: var(--color-leather);
  border-color: var(--color-leather);
  color: var(--color-parchment);
}

.result-count {
  font-family: var(--font-utility);
  font-size: 0.78rem;
  color: var(--color-ink-soft);
}

/* --- Product Grid --- */

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-md);
  padding-bottom: var(--space-2xl);
}

.product-card {
  background: var(--color-cream-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  display: block;
  color: var(--color-ink);
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-raised);
}

.product-card__image {
  aspect-ratio: 1 / 1;
  background: var(--color-parchment-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-ink-soft);
  position: relative;
  overflow: hidden;
}

.product-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card__image svg {
  width: 36px;
  height: 36px;
  opacity: 0.35;
}

.product-card__featured-tag {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  background: var(--color-brass);
  color: white;
  font-family: var(--font-utility);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
}

.product-card__body {
  padding: var(--space-sm) var(--space-sm) var(--space-md);
}

.product-card__category {
  font-family: var(--font-utility);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brass);
  font-weight: 600;
}

.product-card__title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--color-leather);
  margin-top: 0.3rem;
  line-height: 1.3;
}

.product-card__price {
  font-family: var(--font-utility);
  font-size: 0.92rem;
  color: var(--color-ink);
  margin-top: 0.5rem;
  font-weight: 600;
}

.product-card__price .from-label {
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--color-ink-soft);
  font-size: 0.78rem;
}

/* --- Empty state --- */

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
  color: var(--color-ink-soft);
}

.empty-state h3 {
  margin-bottom: 0.5rem;
}

/* --- Footer --- */

.site-footer {
  background: var(--color-parchment-deep);
  border-top: 1px solid var(--color-line);
  padding: var(--space-lg) 0;
  margin-top: var(--space-xl);
}

.site-footer__inner {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.site-footer__note {
  font-size: 0.82rem;
  color: var(--color-ink-soft);
  margin: 0;
}

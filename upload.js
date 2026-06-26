/**
 * Listing Page Logic
 *
 * In production: GET /api/products (optionally ?category=slug)
 * and GET /api/categories
 * For now: mocked with data shaped like your real imported catalog
 * (see scripts/products_real.csv) so the swap to live data is trivial.
 */

const API_BASE = "https://api.yourshop.example.com"; // replace with your deployed Worker URL

const MOCK_CATEGORIES = [
  { id: 1, slug: "keychains", name: "Keychains" },
  { id: 2, slug: "passport-holders", name: "Passport Holders" },
  { id: 3, slug: "luggage-tags", name: "Luggage Tags" },
  { id: 4, slug: "gift-sets", name: "Gift Sets" },
  { id: 5, slug: "candle-tins", name: "Candle Tins" },
];

const MOCK_PRODUCTS = [
  { id: 1, slug: "engraved-leather-keychain", title: "Personalized Engraved Leather Keychain", base_price_cents: 1600, primary_image_url: null, technique: "engraving", featured: 1, category_slug: "keychains", category_name: "Keychains" },
  { id: 2, slug: "occupational-engraved-keychain", title: "Occupational Engraved Keychain", base_price_cents: 1600, primary_image_url: null, technique: "engraving", featured: 0, category_slug: "keychains", category_name: "Keychains" },
  { id: 3, slug: "foil-stamped-passport-holder", title: "Foil-Stamped Leather Passport Holder", base_price_cents: 2600, primary_image_url: null, technique: "foil_stamp", featured: 1, category_slug: "passport-holders", category_name: "Passport Holders" },
  { id: 4, slug: "leather-luggage-tag", title: "Personalized Leather Luggage Tag", base_price_cents: 1800, primary_image_url: null, technique: "uv_print", featured: 1, category_slug: "luggage-tags", category_name: "Luggage Tags" },
  { id: 5, slug: "passport-luggage-tag-set", title: "Passport Holder + Luggage Tag Gift Set", base_price_cents: 4000, primary_image_url: null, technique: "foil_stamp", featured: 1, category_slug: "gift-sets", category_name: "Gift Sets" },
  { id: 6, slug: "uv-printed-candle-tin", title: "UV-Printed Personalized Candle Tin", base_price_cents: 1500, primary_image_url: null, technique: "uv_print", featured: 1, category_slug: "candle-tins", category_name: "Candle Tins" },
  { id: 7, slug: "memorial-engraved-keychain", title: "Memorial Engraved Keychain", base_price_cents: 1800, primary_image_url: null, technique: "engraving", featured: 0, category_slug: "keychains", category_name: "Keychains" },
];

let allProducts = [];
let activeCategory = "";

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

function placeholderIconFor(technique) {
  // Subtle per-technique icon so even placeholder cards hint at the craft
  const icons = {
    engraving: `<path d="M3 17l6-6m0 0l4-4 4 4-4 4m-4-4l-6 6"/><circle cx="19" cy="5" r="1.5"/>`,
    foil_stamp: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>`,
    uv_print: `<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"/>`,
  };
  return icons[technique] || icons.engraving;
}

async function loadCatalog() {
  // Real implementation:
  // const [productsRes, categoriesRes] = await Promise.all([
  //   fetch(`${API_BASE}/api/products`), fetch(`${API_BASE}/api/categories`)
  // ]);
  // allProducts = (await productsRes.json()).products;
  // const categories = (await categoriesRes.json()).categories;
  allProducts = MOCK_PRODUCTS;
  renderCategoryPills(MOCK_CATEGORIES);

  const params = new URLSearchParams(window.location.search);
  activeCategory = params.get("category") || "";
  renderGrid();
}

function renderCategoryPills(categories) {
  const container = document.getElementById("categoryPills");
  const allBtn = container.querySelector('[data-category=""]');

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-pill";
    btn.dataset.category = cat.slug;
    btn.textContent = cat.name;
    btn.addEventListener("click", () => {
      activeCategory = cat.slug;
      updateActivePill();
      renderGrid();
      history.pushState({}, "", `?category=${cat.slug}`);
    });
    container.appendChild(btn);
  });

  allBtn.addEventListener("click", () => {
    activeCategory = "";
    updateActivePill();
    renderGrid();
    history.pushState({}, "", window.location.pathname);
  });

  updateActivePill();
}

function updateActivePill() {
  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.category === activeCategory);
  });
}

function renderGrid() {
  const grid = document.getElementById("productGrid");
  const resultCount = document.getElementById("resultCount");
  grid.innerHTML = "";

  const filtered = activeCategory
    ? allProducts.filter((p) => p.category_slug === activeCategory)
    : allProducts;

  resultCount.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>Nothing here yet</h3>
        <p>Check back soon, or browse another category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement("a");
    card.href = `product.html?slug=${product.slug}`;
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-card__image">
        ${product.featured ? '<span class="product-card__featured-tag">Popular</span>' : ""}
        ${
          product.primary_image_url
            ? `<img src="${product.primary_image_url}" alt="${product.title}">`
            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${placeholderIconFor(product.technique)}</svg>`
        }
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category_name}</div>
        <div class="product-card__title">${product.title}</div>
        <div class="product-card__price"><span class="from-label">From</span> ${formatPrice(product.base_price_cents)}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

loadCatalog();

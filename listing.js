<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maker & Mark — Personalized Leather Goods, Engraved &amp; Stamped</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/listing.css">
</head>
<body>

<header class="site-header">
  <div class="container site-header__inner">
    <a href="index.html" class="site-logo">Maker <span>EST.</span> &amp; Mark</a>
    <nav class="site-nav">
      <a href="index.html" class="is-active-nav">Shop</a>
      <a href="index.html?category=keychains">Keychains</a>
      <a href="index.html?category=passport-holders">Passport Holders</a>
      <a href="index.html?category=gift-sets">Gift Sets</a>
    </nav>
    <button class="cart-pill" id="cartButton">
      🛍 Cart <span id="cartCount">0</span>
    </button>
  </div>
</header>

<section class="hero">
  <div class="container hero__inner">
    <div class="hero__eyebrow">Engraved · Foil Stamped · UV Printed</div>
    <h1 class="hero__title">Every piece carries<br>a mark of its own.</h1>
    <p class="hero__subtitle">
      Leather goods and keepsakes, personalized one at a time — your name,
      your initials, your story, pressed in.
    </p>
  </div>
  <div class="hero__stamp-mark" aria-hidden="true">
    <svg viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="56" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="60" cy="60" r="44" stroke="currentColor" stroke-width="1"/>
      <text x="60" y="56" text-anchor="middle" font-family="Fraunces, serif" font-size="13" fill="currentColor">PERSONALIZED</text>
      <text x="60" y="72" text-anchor="middle" font-family="Fraunces, serif" font-size="13" fill="currentColor">BY HAND</text>
    </svg>
  </div>
</section>

<main class="container">
  <div class="catalog-toolbar">
    <div class="category-pills" id="categoryPills">
      <button class="category-pill is-active" data-category="">All</button>
      <!-- populated from /api/categories -->
    </div>
    <div class="result-count" id="resultCount"></div>
  </div>

  <div class="product-grid" id="productGrid">
    <!-- populated by listing.js -->
  </div>
</main>

<footer class="site-footer">
  <div class="container site-footer__inner">
    <div class="site-logo">Maker <span>EST.</span> &amp; Mark</div>
    <p class="site-footer__note">Personalized leather goods, engraved and stamped by hand. Placeholder shop name — final name pending.</p>
  </div>
</footer>

<script src="js/listing.js"></script>
</body>
</html>

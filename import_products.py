-- ============================================================
-- Custom Shop D1 Schema
-- Personalized products: engraving, foil stamping, UV printing
-- ============================================================

-- Categories (Keychains, Passport Holders, Candle Tins, etc.)
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,          -- 'keychains'
    name TEXT NOT NULL,                  -- 'Keychains'
    sort_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Core products
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,           -- 'engraved-leather-keychain'
    title TEXT NOT NULL,
    description TEXT,
    category_id INTEGER REFERENCES categories(id),
    technique TEXT,                       -- 'engraving' | 'foil_stamp' | 'uv_print'
    base_price_cents INTEGER NOT NULL,    -- store money as integer cents
    primary_image_url TEXT,
    gallery_images TEXT,                  -- JSON array of URLs
    active INTEGER DEFAULT 1,             -- 1 = visible on site, 0 = hidden/draft
    featured INTEGER DEFAULT 0,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(active);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- Variant option types per product, e.g. "Color", "Size"
-- This lets each product define its OWN set of variant dimensions
CREATE TABLE IF NOT EXISTS variant_option_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    name TEXT NOT NULL,                   -- 'Color', 'Leather Color', 'Size'
    sort_order INTEGER DEFAULT 0
);

-- The actual choices for each option type, e.g. Color -> Black, Brown, Tan
CREATE TABLE IF NOT EXISTS variant_option_values (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    option_type_id INTEGER NOT NULL REFERENCES variant_option_types(id) ON DELETE CASCADE,
    value TEXT NOT NULL,                  -- 'Black'
    swatch_hex TEXT,                      -- '#1a1a1a' (optional, for color swatches)
    sort_order INTEGER DEFAULT 0
);

-- Concrete purchasable variants = a specific combination of option values
-- e.g. {Color: Black, Size: Large} -> SKU, price modifier, stock
CREATE TABLE IF NOT EXISTS variants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    sku TEXT UNIQUE,
    option_values TEXT NOT NULL,          -- JSON: {"Color": "Black", "Size": "Large"}
    price_modifier_cents INTEGER DEFAULT 0,  -- added to base_price_cents
    stock_count INTEGER,                  -- NULL = not tracked / unlimited
    low_stock_threshold INTEGER DEFAULT 5,
    image_url TEXT,                       -- optional variant-specific image
    active INTEGER DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_variants_product ON variants(product_id);
CREATE INDEX IF NOT EXISTS idx_variants_sku ON variants(sku);

-- Personalization fields per product (what the customer fills in)
CREATE TABLE IF NOT EXISTS personalization_fields (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    field_key TEXT NOT NULL,              -- 'engraved_name' (used internally)
    label TEXT NOT NULL,                  -- 'Name to Engrave'
    field_type TEXT NOT NULL,             -- 'text' | 'textarea' | 'image_upload' | 'dropdown' | 'font_choice'
    required INTEGER DEFAULT 1,
    max_length INTEGER,                   -- for text fields
    help_text TEXT,                       -- 'Max 20 characters, letters and numbers only'
    options TEXT,                         -- JSON array, for 'dropdown' type e.g. fonts
    sort_order INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_personalization_product ON personalization_fields(product_id);

-- Optional paid add-ons / upsells per product (e.g. "Add Back Engraving +$5",
-- "Add Gift Box +$4"). Distinct from variants (which are required choices
-- like Color/Size) and from personalization_fields (which capture input
-- text/images). An add-on is a customer-toggled checkbox that changes price
-- and optionally requires its own personalization input.
CREATE TABLE IF NOT EXISTS add_ons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    add_on_key TEXT NOT NULL,             -- 'back_engraving', 'gift_box'
    label TEXT NOT NULL,                  -- 'Add Back Engraving'
    description TEXT,                     -- 'Add a short message or date to the back'
    price_cents INTEGER NOT NULL DEFAULT 0,
    -- If this add-on requires its own input when selected (e.g. back engraving
    -- needs its own text field), define it inline here rather than forcing a
    -- join -- one add-on, one optional captured field, kept simple:
    requires_input INTEGER DEFAULT 0,     -- 1 = show an input when toggled on
    input_type TEXT,                      -- 'text' | 'textarea' | 'image_upload'
    input_label TEXT,                     -- 'Back Engraving Text'
    input_max_length INTEGER,
    sort_order INTEGER DEFAULT 0,
    active INTEGER DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_addons_product ON add_ons(product_id);

-- Temporary holding spot for cart contents between checkout creation and
-- Stripe webhook confirmation. Avoids Stripe's 500-char metadata limit,
-- which personalization text + image URLs can easily exceed.
-- Rows can be purged periodically (e.g. anything older than 24h with no order).
CREATE TABLE IF NOT EXISTS pending_carts (
    token TEXT PRIMARY KEY,
    cart_json TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Orders (created after successful Stripe checkout)
CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    stripe_session_id TEXT UNIQUE,
    customer_email TEXT,
    customer_name TEXT,
    shipping_address TEXT,                -- JSON
    total_cents INTEGER,
    status TEXT DEFAULT 'paid',           -- 'paid' | 'in_production' | 'shipped' | 'cancelled'
    created_at TEXT DEFAULT (datetime('now'))
);

-- Line items per order, carrying the personalization data + chosen variant
CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id),
    variant_id INTEGER REFERENCES variants(id),
    quantity INTEGER DEFAULT 1,
    unit_price_cents INTEGER NOT NULL,
    personalization_data TEXT,            -- JSON: {"engraved_name": "Sarah", "image_url": "https://..."}
    selected_add_ons TEXT,                -- JSON array: [{"add_on_key": "back_engraving", "label": "Add Back Engraving", "price_cents": 500, "input_value": "Est. 2020"}]
    fulfillment_status TEXT DEFAULT 'pending'  -- 'pending' | 'in_progress' | 'done'
);

CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);

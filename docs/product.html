/**
 * Product Detail Page Logic
 *
 * In production this fetches from:
 *   GET /api/products/:slug
 * and renders the real product, option_types, variants, personalization_fields,
 * and add_ons returned by the Worker API (see worker/routes/products.js).
 *
 * For now this uses a MOCK_PRODUCT object shaped EXACTLY like that API response,
 * so swapping in the real fetch later is a one-line change (see loadProduct()).
 */

const API_BASE = "https://api.yourshop.example.com"; // replace with your deployed Worker URL

const MOCK_PRODUCT = {
  product: {
    id: 1,
    slug: "engraved-leather-keychain",
    title: "Personalized Engraved Leather Keychain",
    description: "Full-grain leather keychain, custom engraved with a name, initials, or short message. A simple everyday gift that always lands.",
    category_name: "Keychains",
    technique: "engraving",
    base_price_cents: 1600,
    primary_image_url: null,
    gallery_images: [],
  },
  option_types: [
    {
      id: 1, name: "Color", sort_order: 0,
      values: [
        { id: 1, value: "Black", swatch_hex: "#2b2622" },
        { id: 2, value: "Brown", swatch_hex: "#6b4226" },
        { id: 3, value: "Tan", swatch_hex: "#c8a36a" },
        { id: 4, value: "Navy", swatch_hex: "#283449" },
      ],
    },
    {
      id: 2, name: "Shape", sort_order: 1,
      values: [
        { id: 5, value: "Round" },
        { id: 6, value: "Rectangle" },
      ],
    },
  ],
  variants: [
    { id: 1, sku: "KEY-BLK-RND", option_values: { Color: "Black", Shape: "Round" }, price_modifier_cents: 0, stock_count: 25 },
    { id: 2, sku: "KEY-BLK-RECT", option_values: { Color: "Black", Shape: "Rectangle" }, price_modifier_cents: 0, stock_count: 25 },
    { id: 3, sku: "KEY-BRN-RND", option_values: { Color: "Brown", Shape: "Round" }, price_modifier_cents: 0, stock_count: 25 },
    { id: 4, sku: "KEY-BRN-RECT", option_values: { Color: "Brown", Shape: "Rectangle" }, price_modifier_cents: 0, stock_count: 25 },
    { id: 5, sku: "KEY-TAN-RND", option_values: { Color: "Tan", Shape: "Round" }, price_modifier_cents: 0, stock_count: 20 },
    { id: 6, sku: "KEY-TAN-RECT", option_values: { Color: "Tan", Shape: "Rectangle" }, price_modifier_cents: 0, stock_count: 20 },
    { id: 7, sku: "KEY-NVY-RND", option_values: { Color: "Navy", Shape: "Round" }, price_modifier_cents: 0, stock_count: 4 },
    { id: 8, sku: "KEY-NVY-RECT", option_values: { Color: "Navy", Shape: "Rectangle" }, price_modifier_cents: 0, stock_count: 0 },
  ],
  personalization_fields: [
    {
      id: 1, field_key: "engraved_name", label: "Name or Text to Engrave",
      field_type: "text", required: 1, max_length: 22,
      help_text: "Letters, numbers, and basic punctuation only", options: null, sort_order: 0,
    },
  ],
  add_ons: [
    {
      id: 1, add_on_key: "back_engraving", label: "Add Back Engraving",
      description: "Add a date, short message, or second name on the back",
      price_cents: 500, requires_input: 1, input_type: "text",
      input_label: "Back Engraving Text", input_max_length: 22, sort_order: 0,
    },
    {
      id: 2, add_on_key: "gift_box", label: "Add Gift Box",
      description: "Arrives wrapped in a kraft gift box, ready to give",
      price_cents: 400, requires_input: 0, input_type: null,
      input_label: null, input_max_length: null, sort_order: 1,
    },
  ],
};

// ---- State ----
let productData = null;
let selectedOptions = {};      // { Color: "Black", Shape: "Round" }
let personalizationValues = {}; // { engraved_name: "Sarah" }
let selectedAddOns = {};       // { back_engraving: { input_value: "Est. 2020" }, gift_box: {} }
let quantity = 1;
let uploadedFiles = {};        // { field_key: File }

async function loadProduct() {
  // Real implementation:
  // const slug = new URLSearchParams(window.location.search).get("slug");
  // const res = await fetch(`${API_BASE}/api/products/${slug}`);
  // productData = await res.json();
  productData = MOCK_PRODUCT;

  // default-select the first value of every option type
  productData.option_types.forEach((opt) => {
    selectedOptions[opt.name] = opt.values[0].value;
  });

  renderAll();
}

function findMatchingVariant() {
  return productData.variants.find((v) =>
    Object.entries(selectedOptions).every(([k, val]) => v.option_values[k] === val)
  );
}

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

function calculateTotal() {
  const variant = findMatchingVariant();
  const variantPrice = variant
    ? productData.product.base_price_cents + variant.price_modifier_cents
    : productData.product.base_price_cents;

  const addOnsTotal = Object.entries(selectedAddOns).reduce((sum, [key]) => {
    const addOn = productData.add_ons.find((a) => a.add_on_key === key);
    return sum + (addOn ? addOn.price_cents : 0);
  }, 0);

  return (variantPrice + addOnsTotal) * quantity;
}

// ---- Rendering ----

function renderAll() {
  const { product } = productData;
  document.title = `${product.title} — Maker & Mark`;
  document.getElementById("productCategory").textContent =
    `${product.category_name} · ${capitalize(product.technique?.replace("_", " ") || "")}`;
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("breadcrumbProduct").textContent = product.title;
  document.getElementById("productDescription").textContent = product.description;

  renderOptions();
  renderPersonalizationFields();
  renderAddOns();
  renderPriceAndStock();
  renderPreviewText();
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function renderOptions() {
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  productData.option_types.forEach((opt) => {
    const section = document.createElement("div");
    section.className = "form-section";

    const isColorLike = opt.values.some((v) => v.swatch_hex);

    section.innerHTML = `
      <div class="form-section__label">
        <span>${opt.name}</span>
        <span class="selected-value">${selectedOptions[opt.name] || ""}</span>
      </div>
      <div class="option-row" data-option-name="${opt.name}"></div>
    `;

    const row = section.querySelector(".option-row");
    opt.values.forEach((val) => {
      const chip = document.createElement("button");
      chip.type = "button";

      // check if this value, combined with currently selected others, has any in-stock variant
      const wouldBeOptions = { ...selectedOptions, [opt.name]: val.value };
      const matchingVariant = productData.variants.find((v) =>
        Object.entries(wouldBeOptions).every(([k, vv]) => v.option_values[k] === vv)
      );
      const isOutOfStock = matchingVariant && matchingVariant.stock_count === 0;

      if (isColorLike) {
        chip.className = "swatch-chip" + (selectedOptions[opt.name] === val.value ? " is-selected" : "");
        chip.style.background = val.swatch_hex;
        chip.title = val.value;
        chip.setAttribute("aria-label", val.value);
      } else {
        chip.className = "option-chip" + (selectedOptions[opt.name] === val.value ? " is-selected" : "");
        chip.textContent = val.value;
      }

      if (isOutOfStock) {
        chip.classList.add("is-disabled");
        chip.disabled = true;
        chip.title = `${val.value} — out of stock`;
      }

      chip.addEventListener("click", () => {
        if (isOutOfStock) return;
        selectedOptions[opt.name] = val.value;
        renderOptions();
        renderPriceAndStock();
        renderPreviewText();
        triggerStampImpression();
      });

      row.appendChild(chip);
    });

    container.appendChild(section);
  });
}

function renderPersonalizationFields() {
  const container = document.getElementById("personalizationContainer");
  container.innerHTML = "";

  productData.personalization_fields.forEach((field) => {
    const section = document.createElement("div");
    section.className = "form-section";

    const requiredMark = field.required ? '<span class="required-mark">*</span>' : "";

    if (field.field_type === "text" || field.field_type === "textarea") {
      const tag = field.field_type === "textarea" ? "textarea" : "input";
      section.innerHTML = `
        <div class="form-section__label"><span>${field.label}${requiredMark}</span></div>
        <${tag} class="field-input" id="field_${field.field_key}"
          placeholder="${field.field_type === "textarea" ? "" : "Type here..."}"
          ${field.max_length ? `maxlength="${field.max_length}"` : ""}></${tag}>
        ${field.help_text ? `<div class="field-help">${field.help_text}</div>` : ""}
        ${field.max_length ? `<div class="char-counter" id="counter_${field.field_key}">0 / ${field.max_length}</div>` : ""}
        <div class="error-text" id="error_${field.field_key}" style="display:none;"></div>
      `;
      container.appendChild(section);

      const input = section.querySelector(`#field_${field.field_key}`);
      input.addEventListener("input", (e) => {
        personalizationValues[field.field_key] = e.target.value;
        if (field.max_length) {
          const counter = section.querySelector(`#counter_${field.field_key}`);
          counter.textContent = `${e.target.value.length} / ${field.max_length}`;
          counter.classList.toggle("is-near-limit", e.target.value.length >= field.max_length - 3);
        }
        renderPreviewText();
        debounceStamp();
      });
    }

    if (field.field_type === "dropdown" || field.field_type === "font_choice") {
      section.innerHTML = `
        <div class="form-section__label"><span>${field.label}${requiredMark}</span></div>
        <select class="field-input" id="field_${field.field_key}">
          ${(field.options || []).map((o) => `<option value="${o}">${o}</option>`).join("")}
        </select>
        ${field.help_text ? `<div class="field-help">${field.help_text}</div>` : ""}
      `;
      container.appendChild(section);

      const select = section.querySelector(`#field_${field.field_key}`);
      if (field.options && field.options.length) {
        personalizationValues[field.field_key] = field.options[0];
      }
      select.addEventListener("change", (e) => {
        personalizationValues[field.field_key] = e.target.value;
        triggerStampImpression();
      });
    }

    if (field.field_type === "image_upload") {
      section.innerHTML = `
        <div class="form-section__label"><span>${field.label}${requiredMark}</span></div>
        <div class="upload-dropzone" id="dropzone_${field.field_key}" tabindex="0" role="button"
             aria-label="Upload image for ${field.label}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 16V4M12 4l-4 4M12 4l4 4"/>
            <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>
          </svg>
          <div class="upload-dropzone__text"><strong>Click to upload</strong> or drag and drop</div>
        </div>
        <input type="file" id="fileinput_${field.field_key}" accept="image/jpeg,image/png,image/webp,image/heic" style="display:none;">
        ${field.help_text ? `<div class="field-help">${field.help_text}</div>` : ""}
        <div class="error-text" id="error_${field.field_key}" style="display:none;"></div>
      `;
      container.appendChild(section);

      const dropzone = section.querySelector(`#dropzone_${field.field_key}`);
      const fileInput = section.querySelector(`#fileinput_${field.field_key}`);

      dropzone.addEventListener("click", () => fileInput.click());
      dropzone.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") fileInput.click();
      });
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) handleFileSelected(field, dropzone, file);
      });
      ["dragover", "dragleave", "drop"].forEach((evt) => {
        dropzone.addEventListener(evt, (e) => {
          e.preventDefault();
          dropzone.classList.toggle("is-dragover", evt === "dragover");
          if (evt === "drop" && e.dataTransfer.files[0]) {
            handleFileSelected(field, dropzone, e.dataTransfer.files[0]);
          }
        });
      });
    }
  });
}

function handleFileSelected(field, dropzoneEl, file) {
  const maxSize = 10 * 1024 * 1024;
  const errorEl = document.getElementById(`error_${field.field_key}`);

  if (file.size > maxSize) {
    errorEl.textContent = "File too large. Max 10MB.";
    errorEl.style.display = "flex";
    return;
  }
  errorEl.style.display = "none";

  uploadedFiles[field.field_key] = file;

  const reader = new FileReader();
  reader.onload = (e) => {
    dropzoneEl.outerHTML = `
      <div class="upload-preview" id="dropzone_${field.field_key}">
        <img src="${e.target.result}" alt="Uploaded preview">
        <span class="upload-preview__name">${file.name}</span>
        <button type="button" class="upload-remove" id="remove_${field.field_key}">Remove</button>
      </div>
    `;
    document.getElementById(`remove_${field.field_key}`).addEventListener("click", () => {
      delete uploadedFiles[field.field_key];
      renderPersonalizationFields();
    });
    renderPreviewText();
    triggerStampImpression();
  };
  reader.readAsDataURL(file);

  // Real implementation: upload immediately to get a stable URL for checkout
  // const formData = new FormData();
  // formData.append("file", file);
  // const res = await fetch(`${API_BASE}/api/upload`, { method: "POST", body: formData });
  // const { url } = await res.json();
  // personalizationValues[field.field_key] = url;
}

function renderAddOns() {
  const container = document.getElementById("addOnsContainer");
  container.innerHTML = "";

  if (!productData.add_ons.length) return;

  const section = document.createElement("div");
  section.className = "form-section";
  section.innerHTML = `<div class="form-section__label"><span>Make it extra special</span></div>`;

  productData.add_ons.forEach((addOn) => {
    const row = document.createElement("div");
    row.className = "addon-row";
    const isChecked = !!selectedAddOns[addOn.add_on_key];

    row.innerHTML = `
      <button type="button" class="addon-checkbox ${isChecked ? "is-checked" : ""}"
              id="checkbox_${addOn.add_on_key}" aria-label="Toggle ${addOn.label}"></button>
      <div class="addon-row__body">
        <div class="addon-row__top" id="toggle_${addOn.add_on_key}">
          <span class="addon-row__label">${addOn.label}</span>
          <span class="addon-row__price">+${formatPrice(addOn.price_cents)}</span>
        </div>
        <div class="addon-row__description">${addOn.description || ""}</div>
        <div class="addon-row__input" id="input_${addOn.add_on_key}" style="display:${isChecked && addOn.requires_input ? "block" : "none"};">
          ${addOn.requires_input ? `
            <input type="text" class="field-input" id="addoninput_${addOn.add_on_key}"
              placeholder="${addOn.input_label || ""}"
              maxlength="${addOn.input_max_length || 100}"
              value="${selectedAddOns[addOn.add_on_key]?.input_value || ""}">
          ` : ""}
        </div>
      </div>
    `;
    section.appendChild(row);

    const toggleAddOn = () => {
      if (selectedAddOns[addOn.add_on_key]) {
        delete selectedAddOns[addOn.add_on_key];
      } else {
        selectedAddOns[addOn.add_on_key] = {};
      }
      renderAddOns();
      renderPriceAndStock();
      triggerStampImpression();
    };

    row.querySelector(`#checkbox_${addOn.add_on_key}`).addEventListener("click", toggleAddOn);
    row.querySelector(`#toggle_${addOn.add_on_key}`).addEventListener("click", toggleAddOn);

    if (addOn.requires_input) {
      const inputEl = row.querySelector(`#addoninput_${addOn.add_on_key}`);
      if (inputEl) {
        inputEl.addEventListener("input", (e) => {
          selectedAddOns[addOn.add_on_key] = { input_value: e.target.value };
        });
        inputEl.addEventListener("click", (e) => e.stopPropagation());
      }
    }
  });

  container.appendChild(section);
}

function renderPriceAndStock() {
  const variant = findMatchingVariant();
  const unitPrice = variant
    ? productData.product.base_price_cents + variant.price_modifier_cents
    : productData.product.base_price_cents;

  document.getElementById("currentPrice").textContent = formatPrice(unitPrice);
  document.getElementById("lineTotal").textContent = formatPrice(calculateTotal());

  const stockNote = document.getElementById("stockNote");
  const stockText = document.getElementById("stockText");
  const addToCartBtn = document.getElementById("addToCartBtn");

  if (variant && variant.stock_count !== null) {
    if (variant.stock_count === 0) {
      stockNote.className = "stock-note";
      stockNote.style.color = "var(--color-error)";
      stockText.textContent = "Out of stock";
      addToCartBtn.disabled = true;
    } else if (variant.stock_count <= 5) {
      stockNote.className = "stock-note low-stock";
      stockText.textContent = `Only ${variant.stock_count} left`;
      addToCartBtn.disabled = false;
    } else {
      stockNote.className = "stock-note in-stock";
      stockText.textContent = "In stock";
      addToCartBtn.disabled = false;
    }
  } else {
    stockNote.className = "stock-note in-stock";
    stockText.textContent = "In stock";
    addToCartBtn.disabled = false;
  }
}

function renderPreviewText() {
  const overlay = document.getElementById("previewTextOverlay");
  // Show whatever the primary text personalization field currently holds,
  // so the "preview" feels like it's reflecting the live choice
  const primaryTextField = productData.personalization_fields.find(
    (f) => f.field_type === "text"
  );
  if (primaryTextField && personalizationValues[primaryTextField.field_key]) {
    overlay.textContent = personalizationValues[primaryTextField.field_key];
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

let stampTimeout = null;
function debounceStamp() {
  clearTimeout(stampTimeout);
  stampTimeout = setTimeout(triggerStampImpression, 400);
}

function triggerStampImpression() {
  const el = document.getElementById("stampImpression");
  el.classList.remove("is-active");
  // restart animation
  requestAnimationFrame(() => {
    void el.offsetWidth;
    el.classList.add("is-active");
  });
}

// ---- Quantity stepper ----
document.getElementById("qtyMinus").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    document.getElementById("qtyInput").value = quantity;
    renderPriceAndStock();
  }
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  quantity++;
  document.getElementById("qtyInput").value = quantity;
  renderPriceAndStock();
});

// ---- Add to cart ----
document.getElementById("addToCartBtn").addEventListener("click", () => {
  // Validate required personalization fields
  let hasError = false;
  productData.personalization_fields.forEach((field) => {
    if (field.required && field.field_type !== "image_upload" && !personalizationValues[field.field_key]) {
      const errorEl = document.getElementById(`error_${field.field_key}`);
      if (errorEl) {
        errorEl.textContent = `${field.label} is required`;
        errorEl.style.display = "flex";
      }
      hasError = true;
    }
    if (field.required && field.field_type === "image_upload" && !uploadedFiles[field.field_key]) {
      const errorEl = document.getElementById(`error_${field.field_key}`);
      if (errorEl) {
        errorEl.textContent = `Please upload an image`;
        errorEl.style.display = "flex";
      }
      hasError = true;
    }
  });

  if (hasError) return;

  const variant = findMatchingVariant();
  const cartItem = {
    product_id: productData.product.id,
    variant_id: variant ? variant.id : null,
    quantity,
    personalization: { ...personalizationValues },
    selected_add_on_keys: Object.entries(selectedAddOns).map(([key, data]) => ({
      add_on_key: key,
      input_value: data.input_value || null,
    })),
  };

  console.log("Adding to cart:", cartItem);
  // Real implementation: push to a cart stored in memory/localStorage-equivalent
  // (no localStorage in artifacts -- use a simple cart.js module with in-page state
  // or persist via the Worker if you want cross-device carts)

  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = (parseInt(cartCount.textContent) || 0) + quantity;

  const btn = document.getElementById("addToCartBtn");
  const original = btn.innerHTML;
  btn.innerHTML = "Added ✓";
  setTimeout(() => { btn.innerHTML = original; }, 1200);
});

loadProduct();

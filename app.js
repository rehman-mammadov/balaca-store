/* ==========================================================================
   BALACA STORE — app.js
   Vanilla JS, hash-based client-side router (no build step, no framework).
   Two views: catalog ("#/") and product detail ("#/product/:id").
   --------------------------------------------------------------------------
   TO CUSTOMISE FOR YOUR OWN STORE:
   1. Edit WHATSAPP_NUMBER below to your real WhatsApp Business number.
   2. Edit the PRODUCTS array with your own items, prices and photos.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1) STORE CONFIG
// ---------------------------------------------------------------------------

// WhatsApp number in international format, digits only (no +, no spaces).
// Replace with your real store number before publishing.
const WHATSAPP_NUMBER = "994501234567";

// ---------------------------------------------------------------------------
// 2) PRODUCT CATALOG
//    Each product: id, name, price (AZN), shortDesc (card), description
//    (detail page), specs (key/value), features (bullet list), images
//    (first image = cover), and an optional videoUrl for a preview clip.
// ---------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: "sepia-i",
    name: "Sepia I Mini",
    tagline: "İlk kadrdan xatirəyə dönən klassik",
    price: 89,
    shortDesc: "Yumşaq sepia tonlu, əl ölçüsündə analoq üslubda mini kamera.",
    description:
      "Sepia I Mini, 1970-ci illərin kompakt fotokameralarından ilhamlanaraq hazırlanıb. Konpakt metal korpusu, sadə idarəetməsi və isti tonlu linzası ilə hər kadrı nostaljik bir xatirəyə çevirir. Səyahətə, gündəlik gəzintiyə və ya sadəcə masanızın üzərində gözəl görünmək üçün mükəmməl seçimdir.",
    specs: {
      "Ölçü": "9.8 × 6.2 × 3.4 sm",
      "Çəki": "210 q",
      "Korpus": "Metal + süni dəri kaplama",
      "Linza": "Sabit fokus, geniş açı",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Sepia-Qəhvəyi",
    },
    features: [
      "Retro üslublu barmaq izli deklanşor düyməsi",
      "Yerləşdirilə bilən boyun kəməri daxildir",
      "Yaddaş kartı ilə genişlənən daxili yaddaş",
      "12 aya qədər istehsalçı zəmanəti",
    ],
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "vintage-lens-35",
    name: "Vintage Lens 35",
    tagline: "Klassik obyektivli, cəsarətli sadəlik",
    price: 104,
    shortDesc: "35mm ruhunda linza dizaynı ilə kompakt vintage kamera.",
    description:
      "Vintage Lens 35, klassik 35mm fotokameraların linza formasını kompakt bir korpusa sığdırır. Krom detalları və qara dəri toxuması ilə əl çantanızda da, boynunuzda da zərif görünür. Sadə iki-düymə idarəetməsi sayəsində fotoqrafiya ilə yeni tanış olanlar üçün də əlverişlidir.",
    specs: {
      "Ölçü": "10.1 × 6.5 × 3.6 sm",
      "Çəki": "225 q",
      "Korpus": "Alüminium + krom detallar",
      "Linza": "35mm üslubunda, sabit fokus",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Qara / Krom",
    },
    features: [
      "Klassik dairəvi vizor",
      "Ötürücü çərçivəsi ilə asma kəmər",
      "Aşağı işıqda çəkiliş rejimi",
      "Yüngül alüminium gövdə",
    ],
    images: [
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "seher-xatiresi",
    name: "Şəhər Xatirəsi Mini",
    tagline: "Küçələrin səsini kadrda saxla",
    price: 76,
    shortDesc: "Şəhər gəzintiləri üçün yüngül, cib ölçülü yol yoldaşı.",
    description:
      "Şəhər Xatirəsi Mini, gündəlik gəzintilərinizə asanlıqla qoşula bilən, cib ölçülü bir kameradır. Yüngül korpusu və sürətli işə düşmə vaxtı ilə anı qaçırmadan kadra almağa imkan verir. Xüsusilə küçə fotoqrafiyası həvəskarları üçün nəzərdə tutulub.",
    specs: {
      "Ölçü": "9.2 × 5.8 × 3.0 sm",
      "Çəki": "180 q",
      "Korpus": "Poliкарбоnat, mat üzləmə",
      "Linza": "Geniş açı, sabit fokus",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Toz-Bej",
    },
    features: [
      "1 saniyədən az işə düşmə vaxtı",
      "Cibə rahat sığan nazik korpus",
      "Sərt hava şəraitinə davamlı gövdə",
      "Yüngül çəkisi ilə uzun gəzintilər üçün ideal",
    ],
    images: [
      "https://images.unsplash.com/photo-1590845947676-fa2022ee5162?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533000971552-6a962ab08fef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "qizili-dovr",
    name: "Qızılı Dövr Mini",
    tagline: "Günəşin ilıqlığı, kadrın daxilində",
    price: 118,
    shortDesc: "Qızılı-bürünc tonlarla zəngin, kolleksiyalıq mini kamera.",
    description:
      "Qızılı Dövr Mini, bürünc rəngli metal korpusu və zərif qravür detalları ilə kolleksiyaçılar üçün xüsusi hazırlanıb. Hər detalı əl ilə yığılan bu model, sadəcə çəkiliş aləti deyil, eyni zamanda bir dekorativ əşyadır.",
    specs: {
      "Ölçü": "10.4 × 6.7 × 3.8 sm",
      "Çəki": "245 q",
      "Korpus": "Bürünc kaplı metal",
      "Linza": "Sabit fokus, isti ton filtri",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Qızılı-Bürünc",
    },
    features: [
      "Əl ilə qravürlənmiş ön panel",
      "Kolleksiyaçı qutusunda təqdim olunur",
      "Məhdud say seriyası",
      "İsti ton filtri ilə gün batımı effekti",
    ],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "kolge-ovcusu",
    name: "Kölgə Ovçusu Mini",
    tagline: "Qaranlıq və işığın oyunu",
    price: 95,
    shortDesc: "Kontrastlı qara korpusu ilə gizli, zərif retro dizayn.",
    description:
      "Kölgə Ovçusu Mini, tam qara mat korpusu və incə metal xəttləri ilə minimalist retro həvəskarları üçün hazırlanıb. Gecə şəhər işıqları və kölgə-işıq kontrastları ilə işləmək istəyənlər üçün əla seçimdir.",
    specs: {
      "Ölçü": "9.6 × 6.1 × 3.3 sm",
      "Çəki": "200 q",
      "Korpus": "Mat qara metal",
      "Linza": "Geniş diafraqma, aşağı işıq rejimi",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Tam Qara",
    },
    features: [
      "Aşağı işıqda gücləndirilmiş sensor",
      "Barmaq izi buraxmayan mat üzləmə",
      "İncə metal xətt detalları",
      "Sükunətli deklanşor səsi",
    ],
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533000971552-6a962ab08fef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590845947676-fa2022ee5162?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "nostalji-klub",
    name: "Nostalji Klub Mini",
    tagline: "Dostluğun, gülüşün kadrı",
    price: 69,
    shortDesc: "Əl-çənə rəngli, gündəlik istifadə üçün əyləncəli model.",
    description:
      "Nostalji Klub Mini, canlı krem rəngi və yumşaq künc dizaynı ilə gündəlik əyləncə anlarını çəkmək üçün nəzərdə tutulub. Dostlarla görüşlər, ad günləri və kiçik səyahətlər üçün yüngül, sadə və əlçatan bir seçimdir.",
    specs: {
      "Ölçü": "9.0 × 5.7 × 3.1 sm",
      "Çəki": "175 q",
      "Korpus": "Poliкарбоnat, yumşaq toxunuş",
      "Linza": "Sabit fokus, geniş açı",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Krem-Bej",
    },
    features: [
      "Rəngarəng çiyin kəməri daxildir",
      "Sadə tək-düymə idarəetmə",
      "Uşaq və yeniyetmələr üçün təhlükəsiz dizayn",
      "Yüngül çəkisi ilə səyahət çantasına rahat sığır",
    ],
    images: [
      "https://images.unsplash.com/photo-1533000971552-6a962ab08fef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590845947676-fa2022ee5162?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "sahil-xatireleri",
    name: "Sahil Xatirələri Mini",
    tagline: "Duz qoxusu, mavi üfüq",
    price: 82,
    shortDesc: "Sahil rəngləri ilə işlənmiş, nəm-davamlı gövdəli model.",
    description:
      "Sahil Xatirələri Mini, dəniz kənarı istirahətləri üçün xüsusi hazırlanıb. Nəmə qarşı davamlı örtüyü və mavi-qum tonlu korpusu ilə yay səyahətlərinizin ayrılmaz yoldaşına çevrilir.",
    specs: {
      "Ölçü": "9.4 × 6.0 × 3.2 sm",
      "Çəki": "190 q",
      "Korpus": "Nəmə davamlı örtüklü plastik",
      "Linza": "Sabit fokus, geniş açı",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Mavi-Qum",
    },
    features: [
      "Yüngül nəm və toz qoruması",
      "Üzən çiyin kəməri daxildir",
      "Günəş işığında əks olunmanı azaldan linza örtüyü",
      "Yay kolleksiyasına aid xüsusi qablaşdırma",
    ],
    images: [
      "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "qara-ag-klassik",
    name: "Qara-Ağ Klassik Mini",
    tagline: "Zamansız, sadə, xalis",
    price: 99,
    shortDesc: "Qara-ağ fotoqrafiya ruhunu daşıyan minimalist kamera.",
    description:
      "Qara-Ağ Klassik Mini, rəngdən çox işıq və kompozisiyaya diqqət yetirən fotoqraflar üçün nəzərdə tutulub. Daxili qara-ağ filtr rejimi ilə hər kadrı zamansız bir kadra çevirir. Minimalist dizaynı ilə hər yerə uyğunlaşır.",
    specs: {
      "Ölçü": "9.9 × 6.3 × 3.5 sm",
      "Çəki": "215 q",
      "Korpus": "Alüminium, çərçivəli dizayn",
      "Linza": "Sabit fokus, yüksək kontrast filtr",
      "Batareya": "Doldurulan, USB-C",
      "Rəng": "Qara-Ağ",
    },
    features: [
      "Daxili qara-ağ çəkiliş rejimi",
      "Yüksək kontrastlı linza örtüyü",
      "Zərif çərçivəli metal gövdə",
      "Kolleksiyaçı üçün nömrələnmiş seriya",
    ],
    images: [
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80",
    ],
  },
];

// ---------------------------------------------------------------------------
// 3) HELPERS
// ---------------------------------------------------------------------------

/** Format a number as Azerbaijani manat, e.g. 89 -> "89 ₼" */
function formatPrice(azn) {
  return `${azn} ₼`;
}

/** Find a product by id, or null. */
function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

/** Build a wa.me link pre-filled with an Azerbaijani order message for a product. */
function buildWhatsAppLink(product) {
  const message = `Salam, mən Balaca Store-dan ${product.name} (${formatPrice(product.price)}) məhsulunu sifariş etmək istəyirəm.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Small alternating tilt so the product grid feels like scattered prints, not a rigid grid. */
function tiltFor(index) {
  const angles = [-1.4, 0.8, -0.6, 1.2];
  return angles[index % angles.length];
}

/** Escape helper (defensive — all copy here is our own, but good practice for any future dynamic input). */
function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------------------------
// 4) VIEW: CATALOG (home)
// ---------------------------------------------------------------------------
function renderCatalog() {
  const cards = PRODUCTS.map((p, i) => `
    <a
      href="#/product/${p.id}"
      class="print-frame group block p-3 pb-4"
      style="--tilt:${tiltFor(i)}deg"
      aria-label="${esc(p.name)} — məhsulu aç"
    >
      <div class="print-photo">
        <img src="${p.images[0]}" alt="${esc(p.name)} — retro mini fotokamera" loading="lazy" />
      </div>
      <div class="pt-4 px-1">
        <div class="flex items-baseline justify-between gap-3">
          <h3 class="font-display text-lg text-ink leading-snug">${esc(p.name)}</h3>
          <span class="font-stamp text-sm text-rust shrink-0">${formatPrice(p.price)}</span>
        </div>
        <p class="font-body text-sm text-leather mt-1.5 leading-relaxed">${esc(p.shortDesc)}</p>
      </div>
    </a>
  `).join("");

  return `
    <section class="view-enter pt-10 sm:pt-14">
      <div class="max-w-2xl">
        <p class="stamp-tag inline-block px-2 py-1 text-xs mb-4">8 model mövcuddur</p>
        <h1 class="font-display font-semibold text-4xl sm:text-5xl text-ink leading-[1.05]">
          Cib ölçülü kameralar, böyük xatirələr
        </h1>
        <p class="font-body text-leather text-base sm:text-lg mt-4 leading-relaxed">
          Balaca Store-da hər kamera əl ilə seçilir, diqqətlə yoxlanılır və vintage ruhunu itirmədən sizə çatdırılır.
          Aşağıdakı modellərdən birini seçin və detallarına baxın.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-12 pb-8">
        ${cards}
      </div>
    </section>
  `;
}

// ---------------------------------------------------------------------------
// 5) VIEW: PRODUCT DETAIL
// ---------------------------------------------------------------------------
function renderProductDetail(id) {
  const product = getProduct(id);

  if (!product) {
    return `
      <section class="view-enter py-20 text-center">
        <p class="font-display text-2xl text-ink mb-3">Bu məhsul tapılmadı</p>
        <p class="font-body text-leather mb-6">Axtardığınız kamera artıq mövcud deyil və ya keçid səhvdir.</p>
        <a href="#/" class="font-stamp text-sm text-rust hairline-b border-b pb-0.5">Kataloqa qayıt</a>
      </section>
    `;
  }

  const thumbs = product.images.map((src, i) => `
    <button
      type="button"
      class="thumb ${i === 0 ? "active" : ""} w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden"
      data-thumb-index="${i}"
      aria-label="${esc(product.name)} — şəkil ${i + 1}"
    >
      <img src="${src}" alt="" class="w-full h-full object-cover" />
    </button>
  `).join("");

  const specRows = Object.entries(product.specs).map(([k, v]) => `
    <div class="flex items-baseline justify-between gap-4 py-2.5 hairline-b border-b last:border-b-0">
      <dt class="font-stamp text-sm text-leather">${esc(k)}</dt>
      <dd class="font-body text-sm text-ink text-right">${esc(v)}</dd>
    </div>
  `).join("");

  const featureItems = product.features.map((f) => `
    <li class="flex items-start gap-3 font-body text-ink/90 leading-relaxed">
      <span class="mt-2 w-1.5 h-1.5 rounded-full bg-rust shrink-0"></span>
      <span>${esc(f)}</span>
    </li>
  `).join("");

  return `
    <section class="view-enter pt-8 sm:pt-12 pb-16">
      <a href="#/" class="inline-flex items-center gap-2 font-stamp text-sm text-leather hover:text-ink transition-colors mb-8">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Kataloqa qayıt
      </a>

      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <!-- Gallery -->
        <div>
          <div class="print-frame p-3" style="--tilt:0deg">
            <div class="print-photo" id="mainPhotoWrap">
              <img id="mainPhoto" src="${product.images[0]}" alt="${esc(product.name)}" />
            </div>
          </div>
          <div class="flex gap-3 mt-4" id="thumbRow">
            ${thumbs}
          </div>
        </div>

        <!-- Info -->
        <div>
          <p class="stamp-tag inline-block px-2 py-1 text-xs mb-4">${esc(product.tagline)}</p>
          <h1 class="font-display font-semibold text-3xl sm:text-4xl text-ink leading-tight">${esc(product.name)}</h1>
          <p class="font-stamp text-2xl text-rust mt-3">${formatPrice(product.price)}</p>

          <p class="font-body text-ink/90 leading-relaxed mt-6 max-w-prose">${esc(product.description)}</p>

          <a
            href="${buildWhatsAppLink(product)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-shutter inline-flex items-center gap-3 text-cream font-body font-semibold text-base px-6 py-3.5 mt-8 transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.86 9.86 0 0 0 4.62 1.17h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.03h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.77.82-2.98-.2-.31a8.08 8.08 0 0 1-1.24-4.29c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.21.85 5.75 2.38a8.08 8.08 0 0 1 2.38 5.76c0 4.48-3.65 8.11-8.14 8.11Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/>
            </svg>
            WhatsApp ilə Sifariş Et
          </a>
          <p class="font-body text-xs text-leather mt-3">Sifariş göndərdikdən sonra 24 saat ərzində sizinlə əlaqə saxlanılacaq.</p>

          <div class="mt-10">
            <h2 class="font-display text-xl text-ink mb-3">Xüsusiyyətlər</h2>
            <ul class="space-y-2.5">${featureItems}</ul>
          </div>

          <div class="mt-10">
            <h2 class="font-display text-xl text-ink mb-3">Texniki göstəricilər</h2>
            <dl>${specRows}</dl>
          </div>
        </div>
      </div>
    </section>
  `;
}

// After rendering the detail view, wire up thumbnail clicks to swap the main photo.
function wireGalleryEvents(product) {
  const thumbRow = document.getElementById("thumbRow");
  const mainPhoto = document.getElementById("mainPhoto");
  if (!thumbRow || !mainPhoto) return;

  thumbRow.querySelectorAll("[data-thumb-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-thumb-index"));
      mainPhoto.src = product.images[idx];
      thumbRow.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// ---------------------------------------------------------------------------
// 6) ROUTER
// ---------------------------------------------------------------------------
function router() {
  const app = document.getElementById("app");
  const hash = window.location.hash || "#/";

  const productMatch = hash.match(/^#\/product\/(.+)$/);

  if (productMatch) {
    const id = decodeURIComponent(productMatch[1]);
    app.innerHTML = renderProductDetail(id);
    const product = getProduct(id);
    if (product) wireGalleryEvents(product);
  } else {
    app.innerHTML = renderCatalog();
  }

  // Return to top on every navigation (new "page" should start at the top).
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

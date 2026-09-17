# Balaca Store — Retro Mini Kameralar

Tam funksional, mobil uyğun (responsive), Azərbaycan dilində e-ticarət sayt şablonu.
Tailwind CSS (CDN) + vanilla JavaScript ilə hazırlanıb, heç bir build addımı tələb olunmur.

## Fayl strukturu

```
balaca-store/
├── index.html      → Səhifə skeleti, header/footer, Tailwind konfiqurasiyası, retro CSS
├── app.js          → Məhsul məlumatları, router (kataloq ⇄ məhsul detalı), WhatsApp linki
├── netlify.toml    → Netlify üçün deploy tənzimləməsi (SPA redirect qaydası)
└── README.md       → Bu fayl
```

## Netlify-a deploy etmək (2 üsul)

### A) Sürükləyib-burax (ən sürətli)
1. https://app.netlify.com/drop səhifəsinə daxil olun.
2. Bu qovluğu (və ya ZIP-in içindəkiləri) birbaşa səhifəyə sürüşdürün.
3. Netlify avtomatik olaraq canlı bir keçid (link) verəcək.

### B) Git repozitoriyası ilə
1. Bu qovluğu yeni bir GitHub repozitoriyasına yükləyin.
2. Netlify-da **Add new site → Import an existing project** seçin.
3. Repozitoriyanı seçin. Build əmri tələb olunmur, "Publish directory" olaraq kök qovluğu (`.`) seçin.
4. **Deploy site** düyməsinə basın.

## Sifariş üçün WhatsApp nömrəsini dəyişmək

`app.js` faylının başında bu sətri tapın:

```js
const WHATSAPP_NUMBER = "994501234567";
```

Rəqəmi öz WhatsApp Business nömrənizlə əvəz edin (ölkə kodu ilə, `+` işarəsi və boşluqsuz, məsələn `994501234567`).

## Məhsulları redaktə etmək

`app.js` faylındakı `PRODUCTS` massivinə baxın. Hər məhsul obyekti aşağıdakı sahələrdən ibarətdir:

- `name`, `tagline`, `price` — əsas məlumat
- `shortDesc` — kataloq kartında görünən qısa təsvir
- `description` — detal səhifəsindəki uzun təsvir
- `specs` — açar/dəyər cütləri şəklində texniki göstəricilər
- `features` — xüsusiyyətlərin siyahısı
- `images` — şəkil URL-lərinin massivi (ilk şəkil əsas kart şəkli olur)

Öz şəkillərinizi əlavə etmək üçün `images` massivindəki linkləri öz şəkil URL-lərinizlə (və ya `assets/` qovluğuna yüklədiyiniz fayl yollarıyla) əvəz edin.

## Qeyd

- Demo şəkilləri Unsplash-dan götürülüb və yalnız nümayiş məqsədi daşıyır — canlı saytda öz məhsul şəkillərinizlə əvəz edin.
- Sayt tam responsive-dir: mobil, planşet və masaüstü ekranlarda sınaqdan keçirilib.
- Əlavə kitabxana və ya build vasitəsi tələb olunmur — istənilən statik hosting (Netlify, Vercel, GitHub Pages) üzərində birbaşa işləyir.

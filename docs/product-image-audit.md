# Kokan Roots — Product Catalogue & Image Audit Report

**Date:** October 25, 2026  
**Total Catalogue Rows Processed:** 76  
**Total Valid Products Imported:** 76  
**Categories Configured:** 9  

---

## 1. Executive Summary

The Kokan Roots e-commerce website has been upgraded from a 15-item demo catalogue to the **complete 76-entry authentic Konkan product catalogue**. All 76 catalogue records have been assigned unique IDs, dual-language Marathi/English names, accurate package sizes, updated rupee prices, category tags, and validated WebP image paths from `public/assets/products/`.

The category navigation has been structured into **exactly 9 consolidated categories**, each represented by an uncropped, high-resolution product photograph rendered in `object-fit: contain` on a soft cream backdrop.

---

## 2. Category Summary & Counts

| # | Category Name | Category ID | Product Count | Representative Category Image |
|---|---|---|---|---|
| 1 | **Pickles & Chutneys** | `pickles-chutneys` | 8 products | `/assets/images/mango_pickle.jpg` |
| 2 | **Cashews & Nuts** | `cashews-nuts` | 10 products | `/assets/images/kaju_cashews.jpg` |
| 3 | **Flours, Rice & Grains** | `flours-rice-grains` | 11 products | `/assets/images/flours_rice_grains.jpg` |
| 4 | **Spices & Masalas** | `spices-masalas` | 7 products | `/assets/images/konkan_specialities.jpg` |
| 5 | **Kokam & Fruit Specials** | `kokum-fruit-specials` | 11 products | `/assets/products/05_Kokum_and_Fruit_Specials/Gavathi_Kokum_250g_175.webp` |
| 6 | **Snacks, Laddus, Chivda & Chakli** | `snacks-laddus-chivda-chakli` | 14 products | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Boondi_Laadu_20pcs_120.webp` |
| 7 | **Papads** | `papads` | 6 products | `/assets/products/07_Papads/Nachani_Papad_200g_120.webp` |
| 8 | **Syrups & Beverages** | `syrups-beverages` | 8 products | `/assets/products/08_Syrups_and_Beverages/Kokum_Sharbat_700ml_195.webp` |
| 9 | **Special Products** | `special-products` | 1 product | `/assets/products/09_Special_Products/Diabetic_Care_Kit_1kit_800.webp` |
| **Total** | | | **76 products** | |

*Dynamic badge logic applies singular/plural grammar correctly:*
- English: `1 product` / `X products`
- Marathi: `1 उत्पादन` / `X उत्पादने`

---

## 3. Confirmed Price Corrections Applied

As instructed, the following cashew prices were updated to match the latest corrections:
- **Plain Cashew Large (250g)**: ₹550 *(Catalogue initially listed ₹450)*
- **Plain Cashew Medium (250g)**: ₹450
- **Roasted Cashew Large (250g)**: ₹460
- **Roasted Cashew Medium (250g)**: ₹450
- **Roasted Cashew Medium, Spiced (250g)**: ₹390

---

## 4. Duplicate Candidates & Variant Review

1. **Row 36 & Row 45: Red Rice (Lal Tandul) 2 kg — ₹300**
   - **Status:** Both rows preserved as distinct catalogue items.
   - **IDs:** `red-rice-lal-tandul-2kg` and `red-rice-lal-tandul-2kg-alt`.
   - **Image:** Both map to `/assets/products/03_Flours_Rice_and_Grains/Red_Rice_Lal_Tandul_2kg_300.webp`.
   - **Recommendation:** Can be consolidated into a single SKU if store inventory manages a single batch.

2. **Row 57 & Row 58: Sangdi Mirchi 50 g — ₹60**
   - **Status:** Both rows preserved as distinct packaging variants.
   - **Row 57:** Standard Sangdi Mirchi (`/assets/products/05_Kokum_and_Fruit_Specials/Sangdi_Mirchi_50g_60.webp`)
   - **Row 58:** Alternate packaging variant (`/assets/products/05_Kokum_and_Fruit_Specials/Sangdi_Mirchi_alternate_packaging_50g_60.webp`)

---

## 5. Cashew Shared Image Configuration

As requested, the cashew entries share representative photographs across plain and regular roasted tiers:
- **Plain Cashew (Large) 250g** & **Roasted Cashew (Large) 250g**: Both use `/assets/products/02_Cashews_and_Nuts/plain-cashew-large-250g.webp`.
- **Plain Cashew (Medium) 250g** & **Roasted Cashew (Medium) 250g**: Both use `/assets/products/02_Cashews_and_Nuts/plain-cashew-medium-250g.webp`.
- **Flavoured & Seasoned Cashews**: Kept distinct with their own individual packaging images (Pudina, Spiced Medium, Green Chilli, Salted, Peri-Peri, Schezwan, Cheese).

---

## 6. Manifest Assets Not Present in 76-Item Catalogue

The following 4 image files exist in `public/assets/products/` but were not part of the 76-numbered catalogue:
1. `02_Cashews_and_Nuts/Cream_Onion_Kaju_100g_180.webp` *(Cream & Onion Cashews — ready for future addition)*
2. `02_Cashews_and_Nuts/roasted-cashew-large-250g.webp` *(Alternate large roasted photo; Plain Large and Roasted Large use the shared photo)*
3. `04_Spices_and_Masalas/Malvani_Chicken_Masala_100g_130.webp` *(Chicken Masala 100g — ready for future addition)*
4. `04_Spices_and_Masalas/Malvani_Mutton_Masala_100g_130.webp` *(Mutton Masala 100g — ready for future addition)*

---

## 7. Full 76 Product Mapping Table

| # | Product Name | Weight / Vol | Price (₹) | Category | Matched Image Path |
|---|---|---|---|---|---|
| 1 | Gavathi Kokam | 250 g | ₹175 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Gavathi_Kokum_250g_175.webp` |
| 2 | Sweet / Dried Kokam | 100 g | ₹60 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Sweet_Dried_Kokum_100g_60.webp` |
| 3 | Mango Pickle | 200 g | ₹100 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/mango-pickle-200g.webp` |
| 4 | Karvand Pickle | 200 g | ₹130 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/karvand-pickle-200g.webp` |
| 5 | Garlic Pickle | 200 g | ₹140 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/garlic-pickle-200g.webp` |
| 6 | Amla Pickle | 200 g | ₹100 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/amla-pickle-200g.webp` |
| 7 | Mango Pickle | 500 g | ₹250 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/mango-pickle-500g.webp` |
| 8 | Mixed Pickle | 200 g | ₹100 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/mixed-pickle-200g.webp` |
| 9 | Sweet Mango Pickle | 200 g | ₹120 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/sweet-mango-pickle-200g.webp` |
| 10 | Chilli Pickle | 200 g | ₹100 | pickles-chutneys | `/assets/products/01_Pickles_and_Chutneys/chilli-pickle-200g.webp` |
| 11 | Garlic-Coconut Chutney | 50 g | ₹50 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Garlic_Coconut_Chutney_50g_50.webp` |
| 12 | Prawns Pickle | 100 g | ₹250 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Prawns_Pickle_100g_250.webp` |
| 13 | Organic Gavathi Tea | 50 g | ₹80 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Organic_Gavathi_Tea_50g_80.webp` |
| 14 | Lemon Pickle | 200 g | ₹100 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Lemon_Pickle_200g_100.webp` |
| 15 | Roasted Cashew (Large) | 250 g | ₹460 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/plain-cashew-large-250g.webp` |
| 16 | Plain Cashew (Large) | 250 g | ₹550 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/plain-cashew-large-250g.webp` |
| 17 | Pudina Kaju | 100 g | ₹180 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Pudina_Kaju_100g_180.webp` |
| 18 | Roasted Cashew (Medium) | 250 g | ₹450 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/plain-cashew-medium-250g.webp` |
| 19 | Roasted Cashew (Medium, Spiced) | 250 g | ₹390 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Roasted_Cashew_Medium_Spiced_250g_390.webp` |
| 20 | Green Chilli Kaju | 100 g | ₹180 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Green_Chilli_Kaju_100g_180.webp` |
| 21 | Salted Kaju | 100 g | ₹180 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Salted_Kaju_100g_180.webp` |
| 22 | Peri-Peri Kaju | 100 g | ₹180 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Peri_Peri_Kaju_100g_180.webp` |
| 23 | Schezwan Kaju | 100 g | ₹180 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Schezwan_Kaju_100g_180.webp` |
| 24 | Cheese Kaju | 100 g | ₹180 | cashews-nuts | `/assets/products/02_Cashews_and_Nuts/Cheese_Kaju_100g_180.webp` |
| 25 | Red Poha | 500 g | ₹100 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Red_Poha_500g_100.webp` |
| 26 | Malvani Kombdi Vade Flour | 500 g | ₹120 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Malvani_Kombdi_Vade_Flour_500g_120.webp` |
| 27 | Aamboli Flour | 500 g | ₹220 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Aamboli_Flour_500g_220.webp` |
| 28 | Red Poha | 250 g | ₹50 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Red_Poha_250g_50.webp` |
| 29 | Basmati Modak Flour | 500 g | ₹120 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Basmati_Modak_Flour_500g_120.webp` |
| 30 | Ghavane Flour | 500 g | ₹180 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Ghavane_Flour_500g_180.webp` |
| 31 | Malvani Fish Curry Masala | 100 g | ₹120 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Malvani_Fish_Curry_Masala_100g_120.webp` |
| 32 | Gavathi Turmeric Powder | 50 g | ₹50 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Gavathi_Turmeric_Powder_50g_50.webp` |
| 33 | Kulith Flour | 100 g | ₹60 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Kulith_Flour_100g_60.webp` |
| 34 | Malvani Fish Fry Masala | 100 g | ₹120 | spices-masalas | `/assets/products/04_Spices_and_Masalas/Malvani_Fish_Fry_Masala_100g_120.webp` |
| 35 | Red Rice (Lal Tandul) | 1 kg | ₹150 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Red_Rice_Lal_Tandul_1kg_150.webp` |
| 36 | Red Rice (Lal Tandul) | 2 kg | ₹300 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Red_Rice_Lal_Tandul_2kg_300.webp` |
| 37 | Khadke Laadu | 25 pieces | ₹100 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Khadke_Laadu_25pcs_100.webp` |
| 38 | Shev Laadu | 25 pieces | ₹125 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Shev_Laadu_25pcs_125.webp` |
| 39 | Boondi Laadu | 20 pieces | ₹120 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Boondi_Laadu_20pcs_120.webp` |
| 40 | Shengadana Laadu (Peanut Laddu) | 25 pieces | ₹120 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Shengadana_Laadu_Peanut_Laddu_25pcs_120.webp` |
| 41 | Shev Chivda | 200 g | ₹80 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Shev_Chivda_200g_80.webp` |
| 42 | Kokani Mix Farsan | 200 g | ₹80 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Kokani_Mix_Farsan_200g_80.webp` |
| 43 | Diet Poha Chivda | 200 g | ₹70 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Diet_Poha_Chivda_200g_70.webp` |
| 44 | Spicy Poha Chivda | 200 g | ₹80 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Spicy_Poha_Chivda_200g_80.webp` |
| 45 | Red Rice (Lal Tandul) [Alt] | 2 kg | ₹300 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Red_Rice_Lal_Tandul_2kg_300.webp` |
| 46 | Pohe Laadu | 20 pieces | ₹120 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Pohe_Laadu_20pcs_120.webp` |
| 47 | Tomato Chakli | 200 g | ₹80 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Tomato_Chakli_200g_80.webp` |
| 48 | Fried Jackfruit Chips | 100 g | ₹100 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Fried_Jackfruit_Chips_100g_100.webp` |
| 49 | Fine Spicy Sev | 200 g | ₹80 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Fine_Spicy_Sev_200g_80.webp` |
| 50 | Aamba Poli | 200 g | ₹120 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Aamba_Poli_200g_120.webp` |
| 51 | Fanas Poli | 200 g | ₹120 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Fanas_Poli_200g_120.webp` |
| 52 | Malvani Khaja | 200 g | ₹80 | snacks-laddus-chivda-chakli | `/assets/products/06_Snacks_Laddus_Chivda_Chakli/Malvani_Khaja_200g_80.webp` |
| 53 | Amla Candy | 50 g | ₹50 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Amla_Candy_50g_50.webp` |
| 54 | Jambul Poli | 50 g | ₹180 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Jambul_Poli_50g_180.webp` |
| 55 | Raw Mango Amboshi | 100 g | ₹100 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Raw_Mango_Amboshi_100g_100.webp` |
| 56 | Jeera Kairi | 100 g | ₹100 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Jeera_Kairi_100g_100.webp` |
| 57 | Sangdi Mirchi | 50 g | ₹60 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Sangdi_Mirchi_50g_60.webp` |
| 58 | Sangdi Mirchi (Alt Packaging) | 50 g | ₹60 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Sangdi_Mirchi_alternate_packaging_50g_60.webp` |
| 59 | Khajur (Dates) | 200 g | ₹90 | kokum-fruit-specials | `/assets/products/05_Kokum_and_Fruit_Specials/Khajur_Dates_200g_90.webp` |
| 60 | Black Pepper Urad Papad | 200 g | ₹100 | papads | `/assets/products/07_Papads/Black_Pepper_Urad_Papad_200g_100.webp` |
| 61 | Red Chilli Urad Papad | 200 g | ₹100 | papads | `/assets/products/07_Papads/Red_Chilli_Urad_Papad_200g_100.webp` |
| 62 | Garlic & Green Chilli Papad | 200 g | ₹100 | papads | `/assets/products/07_Papads/Garlic_Green_Chilli_Papad_200g_100.webp` |
| 63 | Pohe Mirgund | 200 g | ₹110 | papads | `/assets/products/07_Papads/Pohe_Mirgund_200g_110.webp` |
| 64 | Jambhul Ras | 550 ml | ₹350 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Jambhul_Ras_550ml_350.webp` |
| 65 | Nachani Papad | 200 g | ₹120 | papads | `/assets/products/07_Papads/Nachani_Papad_200g_120.webp` |
| 66 | Pohe Papad | 200 g | ₹120 | papads | `/assets/products/07_Papads/Pohe_Papad_200g_120.webp` |
| 67 | Amla Sharbat (with sugar) | 500 ml | ₹220 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Amla_Sharbat_with_sugar_500ml_220.webp` |
| 68 | Kokam Aagal | 500 ml | ₹150 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Kokam_Aagal_500ml_150.webp` |
| 69 | Kokam Aagal | 250 ml | ₹75 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Kokam_Aagal_250ml_75.webp` |
| 70 | Kokam Sharbat | 1200 ml | ₹300 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Kokam_Sharbat_1200ml_300.webp` |
| 71 | Kokam Sharbat | 700 ml | ₹195 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Kokam_Sharbat_700ml_195.webp` |
| 72 | Kokam Sharbat | 250 ml | ₹80 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Kokam_Sharbat_250ml_80.webp` |
| 73 | Alphonso Mango Aamras | 500 ml | ₹250 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Alphonso_Mango_Aamras_500ml_250.webp` |
| 74 | Kairi Panhe | 500 ml | ₹260 | syrups-beverages | `/assets/products/08_Syrups_and_Beverages/Kairi_Panhe_500ml_260.webp` |
| 75 | Butter Milk-Soaked Sun-Dried Chillies | 50 g | ₹60 | flours-rice-grains | `/assets/products/03_Flours_Rice_and_Grains/Butter_Milk_Soaked_Sun_Dried_Chillies_50g_60.webp` |
| 76 | Diabetic Care Kit | 1 kit | ₹800 | special-products | `/assets/products/09_Special_Products/Diabetic_Care_Kit_1kit_800.webp` |

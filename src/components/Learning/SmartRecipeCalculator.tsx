import React, { useState } from 'react';

export interface RecipeIngredient {
  name: string;
  baseAmount: number; // base for 1 portion or 1 batch
  unit: 'g' | 'ml' | 'pcs' | 'scoops' | 'pumps' | 'tbsp';
  category: string;
}

export interface RecipeItem {
  id: string;
  name: string;
  category: 'Kitchen (Commis)' | 'Bar (Mixologist)' | 'Kitchen Prep';
  badgeColor: string;
  baseYieldText: string;
  ingredients: RecipeIngredient[];
  equipmentWarning: string;
  assemblySteps: string[];
  cookingTempTime?: string;
}

const CALCULATOR_RECIPES: RecipeItem[] = [
  {
    id: 'r-sistagor',
    name: 'SISTAGOR (Snack Basket XXI)',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Standar Basket',
    cookingTempTime: '170–175°C • 3 Menit 10 Detik (Fryer)',
    equipmentWarning: '⚠️ Perhatian: Gunakan Tray Medium untuk porsi Medium/Large. Goreng dalam deep fryer terkalibrasi.',
    ingredients: [
      { name: 'French Fries Shoestring', baseAmount: 100, unit: 'g', category: 'Frozen Food' },
      { name: 'Sosis Vienna XXI', baseAmount: 2, unit: 'pcs', category: 'Frozen Food' },
      { name: 'Sauce Tomat Sachet', baseAmount: 10, unit: 'g', category: 'Condiment' },
      { name: 'Sauce Chili Sachet', baseAmount: 5, unit: 'g', category: 'Condiment' },
      { name: 'Snack Tray XXI', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Goreng French Fries (100g) dan Sosis Vienna (2 pcs) bersamaan dalam basket deep fryer 175°C.',
      'Tiriskan minyak selama 15 detik di atas draining rack.',
      'Tata French Fries di bagian bawah Snack Tray dan sosis di bagian atas.',
      'Sajikan dengan Sauce Tomat (10g) & Sauce Chili (5g).'
    ]
  },
  {
    id: 'r-burger',
    name: 'BEEF BURGER GOURMET XXI',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Burger Meal',
    cookingTempTime: 'Griddle Flat Top 180°C • 3 Menit Per Sisi',
    equipmentWarning: '⚠️ Thawing Beef Patty di Chiller (1–4°C) minimal 6 jam. Dilarang menekan patty dengan spatula agar juice daging tidak terbuang.',
    ingredients: [
      { name: 'Beef Patty Premium XXI (120g)', baseAmount: 1, unit: 'pcs', category: 'Frozen Meat' },
      { name: 'Burger Bun Brioche Sesame', baseAmount: 1, unit: 'pcs', category: 'Bakery' },
      { name: 'Cheddar Cheese Slice', baseAmount: 1, unit: 'pcs', category: 'Dairy' },
      { name: 'Iceberg Lettuce Cut Fresh', baseAmount: 20, unit: 'g', category: 'Produce' },
      { name: 'Fresh Tomato Slices', baseAmount: 15, unit: 'g', category: 'Produce' },
      { name: 'Signature BBQ Sauce XXI', baseAmount: 20, unit: 'g', category: 'Sauce' },
      { name: 'Unsalted Butter (Toast Bun)', baseAmount: 10, unit: 'g', category: 'Dairy' },
      { name: 'Food Wrap Paper XXI', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Panggang Brioche Bun dengan Unsalted Butter di griddle hingga keemas-emasan (30 detik).',
      'Panggang Beef Patty di griddle 180°C selama 3 menit per sisi. Letakkan Cheddar Cheese Slice di atas patty pada 1 menit terakhir.',
      'Oleskan Signature BBQ Sauce di bun bagian bawah.',
      'Tata Iceberg Lettuce, Tomato Slices, Beef Patty bertumpuk cheese, dan tutup dengan bun atas.',
      'Bungkus rapi dengan Food Wrap Paper XXI.'
    ]
  },
  {
    id: 'r-hotdog',
    name: 'HOTDOG SOSIS JUMBO XXI',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Hotdog Meal',
    cookingTempTime: 'Roller Grill / Hotband 80°C • 8 Menit',
    equipmentWarning: '⚠️ Kerat sosis jumbo maksimal 3 keratan halus. Pastikan roller grill berputar konstan pada temperatur 80°C.',
    ingredients: [
      { name: 'Sosis Beef Jumbo XXI (110g)', baseAmount: 1, unit: 'pcs', category: 'Meat Product' },
      { name: 'Hotdog Bun Soft', baseAmount: 1, unit: 'pcs', category: 'Bakery' },
      { name: 'Mayonnaise Creamy XXI', baseAmount: 15, unit: 'g', category: 'Sauce' },
      { name: 'Chili Sauce XXI', baseAmount: 10, unit: 'g', category: 'Sauce' },
      { name: 'Yellow Mustard Dip', baseAmount: 10, unit: 'g', category: 'Sauce' },
      { name: 'Sweet Pickle Relish', baseAmount: 10, unit: 'g', category: 'Condiment' },
      { name: 'Hotdog Packaging Box XXI', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Panaskan Sosis Beef Jumbo di Roller Grill hingga matang merata (8 menit).',
      'Kukus/Toast Hotdog Bun sebentar selama 20 detik.',
      'Masukkan sosis ke dalam bun, beri toping Sweet Pickle Relish.',
      'Beri zig-zag Mayonnaise, Chili Sauce, dan Yellow Mustard di atas sosis.',
      'Sajikan dalam Hotdog Packaging Box XXI.'
    ]
  },
  {
    id: 'r-tenders',
    name: 'CRISPY CHICKEN TENDERS XXI',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Snack Box (3 Pcs)',
    cookingTempTime: '170–175°C • 4 Menit 15 Detik (Fryer)',
    equipmentWarning: '⚠️ Kebersihan Minyak: Bersihkan endapan tepung berlebih di dasar fryer setiap 5 kali penggorengan untuk mencegah warna hitam.',
    ingredients: [
      { name: 'Chicken Breast Tenders Marinated', baseAmount: 3, unit: 'pcs', category: 'Poultry' },
      { name: 'Seasoned Crispy Flour Mix', baseAmount: 50, unit: 'g', category: 'Dry Mix' },
      { name: 'Honey Mustard Dip Ramekin', baseAmount: 25, unit: 'g', category: 'Sauce' },
      { name: 'Snack Box XXI Medium', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Balur Chicken Tenders beku yang telah thawed ke adonan kering tepung.',
      'Goreng di deep fryer 175°C selama 4 menit 15 detik hingga golden brown.',
      'Tiriskan minyak selama 20 detik di atas draining rack.',
      'Susun 3 pcs Tenders di Snack Box XXI bersama 1 ramekin Honey Mustard Dip.'
    ]
  },
  {
    id: 'r-fishchips',
    name: 'FISH & CHIPS XXI',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Meal Complete',
    cookingTempTime: '175°C • 4 Menit 30 Detik (Fryer)',
    equipmentWarning: '⚠️ Thawing Dory Fillet di Chiller 1–4°C minimal 4 jam. Dilarang keras menggoreng fillet yang masih beku!',
    ingredients: [
      { name: 'Dory Fillet Marinated (120g)', baseAmount: 1, unit: 'pcs', category: 'Seafood' },
      { name: 'Crispy Batter Powder Mix', baseAmount: 45, unit: 'g', category: 'Dry Mix' },
      { name: 'French Fries Side', baseAmount: 150, unit: 'g', category: 'Frozen Food' },
      { name: 'Tar-Tar Sauce XXI', baseAmount: 30, unit: 'g', category: 'Sauce' },
      { name: 'Fresh Lemon Wedge', baseAmount: 1, unit: 'pcs', category: 'Garnish' },
      { name: 'Fish & Chips Tray XXI', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Balur Dory Fillet dengan Crispy Batter Powder basah & kering.',
      'Goreng Dory Fillet 4.5 menit dan French Fries 3.1 menit di deep fryer.',
      'Tiriskan minyak, susun di plate dengan Tar-Tar Sauce di ramekin & Lemon Wedge di samping.'
    ]
  },
  {
    id: 'r-ff',
    name: 'FRENCH FRIES MEDIUM XXI',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Medium (275g)',
    cookingTempTime: '170–175°C • 3 Menit 10 Detik (Fryer)',
    equipmentWarning: '⚠️ Jangan goreng kentang beku yang menggumpal. Tiriskan minyak hingga bersih sebelum disajikan.',
    ingredients: [
      { name: 'French Fries Cut XXI', baseAmount: 275, unit: 'g', category: 'Frozen Food' },
      { name: 'Seasoning Shaker Salt', baseAmount: 3, unit: 'g', category: 'Bumbu' },
      { name: 'Snack Box XXI Medium', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Timbang kentang persis 275g menggunakan timbangan digital.',
      'Masukkan ke minyak goreng panas 170-175°C selama 3 menit 10 detik.',
      'Tiriskan minyak, masukkan ke stainless mixing bowl, taburi 3g seasoning shaker.',
      'Kocok perlahan hingga rata, masukkan ke Snack Box XXI Medium.'
    ]
  },
  {
    id: 'r-nachos',
    name: 'NACHOS CHEESE DIP XXI',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi Tray Compartment',
    cookingTempTime: 'Warmer Cheese Dispenser 65°C',
    equipmentWarning: '⚠️ Jaga kebersihan warmer saus keju. Dilarang mencampur saus baru dengan sisa kemarin untuk menjaga standar hygiene.',
    ingredients: [
      { name: 'Tortilla Chips XXI Crisp', baseAmount: 120, unit: 'g', category: 'Dry Snack' },
      { name: 'Melted Cheddar Cheese Dip', baseAmount: 60, unit: 'ml', category: 'Warm Sauce' },
      { name: 'Pickled Jalapeño Slices', baseAmount: 15, unit: 'g', category: 'Pickles' },
      { name: 'Nachos Divided Tray XXI', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Tuangkan Tortilla Chips (120g) ke kompartemen utama Nachos Tray.',
      'Pompa Melted Cheddar Cheese Dip hangat (60ml) ke kompartemen khusus dip.',
      'Letakkan 3-4 irisan Pickled Jalapeño di atas saus keju.'
    ]
  },
  {
    id: 'r-wings',
    name: 'SPICY CHICKEN WINGETTES',
    category: 'Kitchen (Commis)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    baseYieldText: '1 Porsi (4 Pcs Wings)',
    cookingTempTime: '175°C • 5 Menit 30 Detik (Fryer)',
    equipmentWarning: '⚠️ Pastikan internal temperature daging unggas mencapai minimal 74°C sebelum dilapisi saus.',
    ingredients: [
      { name: 'Chicken Wingettes Marinated', baseAmount: 4, unit: 'pcs', category: 'Poultry' },
      { name: 'Spicy Glaze Sauce XXI', baseAmount: 35, unit: 'g', category: 'Sauce' },
      { name: 'Topped Roasted Sesame Seeds', baseAmount: 2, unit: 'g', category: 'Topping' },
      { name: 'Snack Box XXI Small', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Goreng 4 pcs Chicken Wingettes di deep fryer 175°C selama 5 menit 30 detik.',
      'Pindahkan ke stainless mixing bowl, tuangkan Spicy Glaze Sauce (35g).',
      'Toss/kocok hingga seluruh permukaan sayap terbalur saus sempurna.',
      'Susun di Snack Box XXI dan taburi Roasted Sesame Seeds.'
    ]
  },
  {
    id: 'r-popcorn-caramel',
    name: 'POPCORN CARAMEL (Kettle Batch)',
    category: 'Kitchen Prep',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    baseYieldText: '1 Kettle Batch (5 Porsi Large)',
    cookingTempTime: '210°C • 4 Menit (Kettle Popcorn 32oz)',
    equipmentWarning: '⚠️ Peringatan Kettle: Matikan pemanas kettle segera setelah letupan popcorn melambat untuk mencegah caramel gosong.',
    ingredients: [
      { name: 'Corn Kernels Mushroom XXI', baseAmount: 250, unit: 'g', category: 'Bahan Utama' },
      { name: 'Popcorn Popping Oil', baseAmount: 80, unit: 'ml', category: 'Minyak' },
      { name: 'Caramel Glaze XXI', baseAmount: 150, unit: 'g', category: 'Glaze' }
    ],
    assemblySteps: [
      'Panaskan Kettle Popcorn 32oz hingga mencapai temperatur 210°C.',
      'Tuang Popping Oil (80ml), lalu masukkan Corn Kernels (250g) & Caramel Glaze (150g).',
      'Tutup kettle, biarkan meletup. Putar tuas pemutar kettle untuk mengosongkan popcorn begitu letupan reda.',
      'Ratakan di warmer table dan pisahkan bagian yang menggumpal.'
    ]
  },
  {
    id: 'r-popcorn-butter',
    name: 'POPCORN SALTY BUTTER (Kettle Batch)',
    category: 'Kitchen Prep',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    baseYieldText: '1 Kettle Batch (5 Porsi Large)',
    cookingTempTime: '200°C • 3.5 Menit (Kettle Popcorn 32oz)',
    equipmentWarning: '⚠️ Lap sisa minyak di kettle setiap selesai 3x batch memasak untuk mencegah bau sangit pada popcorn berikutnya.',
    ingredients: [
      { name: 'Corn Kernels Butterfly XXI', baseAmount: 250, unit: 'g', category: 'Bahan Utama' },
      { name: 'Coconut Popping Oil', baseAmount: 80, unit: 'ml', category: 'Minyak' },
      { name: 'Theater Butter Salt XXI', baseAmount: 12, unit: 'g', category: 'Seasoning' }
    ],
    assemblySteps: [
      'Panaskan Kettle Popcorn 32oz ke temperatur 200°C.',
      'Tuang Coconut Popping Oil (80ml) dan Butter Salt (12g).',
      'Masukkan Corn Kernels Butterfly (250g), tutup kettle hingga letupan berhenti.',
      'Kosongkan ke warmer table dan aduk perlahan agar rasa mentega gurih merata.'
    ]
  },
  {
    id: 'r-spicymayo',
    name: 'SAUS SPICY MAYO (Batch Prep Commis)',
    category: 'Kitchen Prep',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    baseYieldText: '1 Batch Standard (10 Porsi / 770g)',
    cookingTempTime: 'Prep 3 Menit (Kitchen Prep)',
    equipmentWarning: '⚠️ Simpan Saus Spicy Mayo di Squeeze Bottle terlabeling tanggal pembuatan FIFO di Chiller (1–4°C). Spoil limit: 3 hari.',
    ingredients: [
      { name: 'Mayonnaise Japanese XXI', baseAmount: 500, unit: 'g', category: 'Base Sauce' },
      { name: 'Chili Sauce XXI Extra', baseAmount: 200, unit: 'g', category: 'Sauce' },
      { name: 'Sriracha Sauce', baseAmount: 50, unit: 'g', category: 'Sauce' },
      { name: 'Lemon Juice Concentrated', baseAmount: 15, unit: 'ml', category: 'Acid' },
      { name: 'Garlic Powder', baseAmount: 5, unit: 'g', category: 'Spice' }
    ],
    assemblySteps: [
      'Campurkan Mayonnaise (500g) dan Chili Sauce (200g) di Stainless Mixing Bowl.',
      'Tambahkan Sriracha (50g), Lemon Juice (15ml), dan Garlic Powder (5g).',
      'Aduk homogen menggunakan Wire Whisk selama 2 menit.',
      'Pindahkan ke Squeeze Bottle, beri stiker tanggal FIFO & simpan di Chiller.'
    ]
  },
  {
    id: 'r-tartar',
    name: 'SAUS TARTAR HOMEMADE (Batch Prep Commis)',
    category: 'Kitchen Prep',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    baseYieldText: '1 Batch Standard (15 Porsi / 450g)',
    cookingTempTime: 'Prep 5 Menit (Cold Prep Station)',
    equipmentWarning: '⚠️ Pastikan pickle dan capers dicincang sangat halus agar tidak menyumbat nozzle squeeze bottle saat di-dispense.',
    ingredients: [
      { name: 'Mayonnaise Base Premium', baseAmount: 350, unit: 'g', category: 'Base Sauce' },
      { name: 'Sweet Pickle Relish Fine', baseAmount: 50, unit: 'g', category: 'Pickles' },
      { name: 'Capers Chopped Fine', baseAmount: 15, unit: 'g', category: 'Pickles' },
      { name: 'Fresh Lemon Juice Pure', baseAmount: 25, unit: 'ml', category: 'Acid' },
      { name: 'Fresh Dill Fine Chopped', baseAmount: 10, unit: 'g', category: 'Herbs' }
    ],
    assemblySteps: [
      'Cincang halus Capers dan Fresh Dill.',
      'Aduk rata bersama Mayonnaise Base, Sweet Pickle Relish, dan Lemon Juice di stainless bowl.',
      'Pindahkan ke container bertutup / squeeze bottle, beri stiker expired FIFO 3 hari.'
    ]
  },
  {
    id: 'r-cheese-sauce',
    name: 'SAUS KEJU MELTED (Batch Prep Commis)',
    category: 'Kitchen Prep',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    baseYieldText: '1 Batch Cooked (1.1 Liter)',
    cookingTempTime: 'Induction Cooker 85°C • 8 Menit',
    equipmentWarning: '⚠️ Aduk konstan menggunakan Wire Whisk saat memasak agar adonan saus keju tidak menggumpal atau gosong di dasar pan.',
    ingredients: [
      { name: 'Premium Cheese Powder XXI', baseAmount: 200, unit: 'g', category: 'Dry Mix' },
      { name: 'Fresh Pasteurized Milk', baseAmount: 800, unit: 'ml', category: 'Dairy' },
      { name: 'Unsalted Butter', baseAmount: 50, unit: 'g', category: 'Dairy' },
      { name: 'Cornstarch Thickener Slurry', baseAmount: 30, unit: 'ml', category: 'Binder' },
      { name: 'Pinch of Sea Salt & Pepper', baseAmount: 5, unit: 'g', category: 'Seasoning' }
    ],
    assemblySteps: [
      'Panaskan Fresh Milk (800ml) dan Unsalted Butter (50g) di sauce pan hingga hangat (70°C).',
      'Tuang Premium Cheese Powder (200g) bertahap sambil diaduk cepat dengan wire whisk.',
      'Masukkan Cornstarch Slurry (30ml) untuk mengentalkan, aduk hingga meletup-letup halus.',
      'Saring dan tuangkan ke warmer dispenser saus keju XXI.'
    ]
  },
  {
    id: 'r-milo-dinosaur',
    name: '1. MILO DINOSAUR (SOP Mixologist 22 oz)',
    category: 'Bar (Mixologist)',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    baseYieldText: '1 Gelas Large (22 oz) • Liquid: 300 mL',
    cookingTempTime: 'Blend Jug Blender • Max 3 Porsi Per Blend',
    equipmentWarning: '⚠️ Mandatory SOP Mixologist: Maksimal porsi di jug blender adalah 3 porsi per sekali blend. Durasi blend 10–15 detik. Gunakan Gelas PP Injection 22 oz & Sedotan Cokelat.',
    ingredients: [
      { name: 'Air Mineral', baseAmount: 210, unit: 'ml', category: 'Liquid Base' },
      { name: 'Fresh Milk (Susu Segar)', baseAmount: 30, unit: 'ml', category: 'Dairy' },
      { name: 'Simple Syrup (Sirup Gula)', baseAmount: 10, unit: 'ml', category: 'Sweetener' },
      { name: 'Hershey\'s Chocolate Syrup', baseAmount: 28, unit: 'g', category: 'Syrup' },
      { name: 'Milo / Cocoa Powder', baseAmount: 38, unit: 'g', category: 'Powder' },
      { name: 'Creamer Powder (Krimer)', baseAmount: 22, unit: 'g', category: 'Powder' },
      { name: 'Es Batu (3/4 Cup)', baseAmount: 150, unit: 'g', category: 'Ice' },
      { name: 'Gelas PP Injection 22 oz', baseAmount: 1, unit: 'pcs', category: 'Packaging' },
      { name: 'Sedotan Cokelat (Brown Straw)', baseAmount: 1, unit: 'pcs', category: 'Accessories' }
    ],
    assemblySteps: [
      'Tuang Air Mineral (210 mL), Fresh Milk (30 mL), Simple Syrup (10 mL), dan Hershey\'s Chocolate Syrup (28 g) ke dalam jug blender.',
      'Masukkan Milo/Cocoa Powder (38 g) dan Creamer Powder (22 g).',
      'Blend seluruh bahan hingga homogen dan larut sempurna (10–15 detik).',
      'Siapkan gelas PP Injection 22 oz, isi dengan Es Batu hingga 3/4 cup.',
      'Tuangkan cairan Milo (300 mL) ke dalam gelas dan beri Sedotan Cokelat (Brown Straw).'
    ]
  },
  {
    id: 'r-kopi-susu-pandan',
    name: '2. KOPI SUSU PANDAN (SOP Mixologist 22 oz)',
    category: 'Bar (Mixologist)',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    baseYieldText: '1 Gelas Large (22 oz) • Liquid: 300 mL',
    cookingTempTime: 'Mixing Cup & Stir / Shake • 10–15 Detik',
    equipmentWarning: '⚠️ Mandatory SOP Mixologist: Larutkan Creamer Powder (36 g) dengan Air Mineral Tambahan (30 mL) di mixing cup terlebih dahulu hingga bebas gumpalan sebelum mencampur espresso & sirup.',
    ingredients: [
      { name: 'Coffee Essence (Ekstrak Kopi)', baseAmount: 120, unit: 'ml', category: 'Coffee Base' },
      { name: 'Fresh Milk (Susu Segar)', baseAmount: 105, unit: 'ml', category: 'Dairy' },
      { name: 'Sirup Pandan (Monin)', baseAmount: 35, unit: 'ml', category: 'Flavor Syrup' },
      { name: 'Coconut Sugar / Gula Aren', baseAmount: 25, unit: 'ml', category: 'Sweetener' },
      { name: 'Creamer Powder (Krimer)', baseAmount: 36, unit: 'g', category: 'Powder' },
      { name: 'Air Mineral Tambahan', baseAmount: 30, unit: 'ml', category: 'Liquid Base' },
      { name: 'Es Batu (3/4 Cup)', baseAmount: 150, unit: 'g', category: 'Ice' },
      { name: 'Gelas PP Injection 22 oz', baseAmount: 1, unit: 'pcs', category: 'Packaging' },
      { name: 'Sedotan Cokelat (Brown Straw)', baseAmount: 1, unit: 'pcs', category: 'Accessories' }
    ],
    assemblySteps: [
      'Larutkan Creamer Powder (36 g) dengan Air Mineral Tambahan (30 mL) di mixing cup hingga tidak ada gumpalan.',
      'Tambahkan Coffee Essence (120 mL), Fresh Milk (105 mL), Sirup Pandan (35 mL), dan Coconut Sugar (25 mL).',
      'Aduk atau kocok hingga seluruh bahan menyatu dengan baik (10–15 detik).',
      'Siapkan gelas PP Injection 22 oz dan isi es batu 3/4 cup.',
      'Tuang campuran kopi susu pandan (300 mL) ke dalam gelas dan sajikan dengan Sedotan Cokelat (Brown Straw).'
    ]
  },
  {
    id: 'r-avocado-coffee',
    name: '3. AVOCADO COFFEE (SOP Mixologist 22 oz)',
    category: 'Bar (Mixologist)',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    baseYieldText: '1 Gelas Large (22 oz) • Topping Jelly 100g',
    cookingTempTime: 'Metode Blend Splash • 30 Detik',
    equipmentWarning: '⚠️ Mandatory SOP Mixologist: Masa simpan premix bubuk Avocado ter-preparasi memiliki batas kadaluarsa 14 Hari (Wajib Stiker FIFO). Masukkan Grass Jelly ke dasar gelas terlebih dahulu.',
    ingredients: [
      { name: 'Fresh Milk (Susu Segar)', baseAmount: 60, unit: 'ml', category: 'Dairy' },
      { name: 'Coffee Essence (Ekstrak Kopi)', baseAmount: 60, unit: 'ml', category: 'Coffee Base' },
      { name: 'Air Mineral', baseAmount: 45, unit: 'ml', category: 'Liquid Base' },
      { name: 'Avocado Powder (Bubuk Alpukat)', baseAmount: 25, unit: 'g', category: 'Powder' },
      { name: 'Susu Kental Manis (Carnation)', baseAmount: 30, unit: 'g', category: 'Dairy' },
      { name: 'Grass Jelly / Cincau (Topping Layer)', baseAmount: 100, unit: 'g', category: 'Topping' },
      { name: 'Gelas PP Injection 22 oz', baseAmount: 1, unit: 'pcs', category: 'Packaging' },
      { name: 'Sedotan Cokelat (Brown Straw)', baseAmount: 1, unit: 'pcs', category: 'Accessories' }
    ],
    assemblySteps: [
      'Masukkan Grass Jelly / Cincau (100 g) ke dasar gelas PP Injection 22 oz sebagai layer dasar.',
      'Masukkan Fresh Milk (60 mL), Coffee Essence (60 mL), Air Mineral (45 mL), Susu Kental Manis (30 g), dan Avocado Powder (25 g) ke dalam blender.',
      'Gunakan metode Blend Splash selama 30 detik hingga halus.',
      'Tuang hasil blend ke dalam gelas di atas Grass Jelly dan sajikan.'
    ]
  },
  {
    id: 'r-orange-jasmine-tea',
    name: '4. ORANGE JASMINE TEA (SOP Mixologist 22 oz)',
    category: 'Bar (Mixologist)',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    baseYieldText: '1 Gelas Large (22 oz) • Liquid: 270 mL',
    cookingTempTime: 'Cocktail Shaker • Shake 10–15 Detik',
    equipmentWarning: '⚠️ Mandatory SOP Mixologist: Shaking cepat 10–15 detik (10–12 kali kocokan). Dilarang mengocok 2–4 menit karena es cair berlebihan (watery) & memperlambat antrean.',
    ingredients: [
      { name: 'Jasmine Green Tea (Teh Melati)', baseAmount: 150, unit: 'ml', category: 'Tea Base' },
      { name: 'Air Mineral', baseAmount: 120, unit: 'ml', category: 'Liquid Base' },
      { name: 'Jasmine Orange Powder', baseAmount: 35, unit: 'g', category: 'Powder' },
      { name: 'Jeruk Sunkist Dadu (Diced)', baseAmount: 40, unit: 'g', category: 'Fresh Fruit' },
      { name: 'Jeruk Sunkist Slice (Garnish Ø 3")', baseAmount: 2, unit: 'pcs', category: 'Garnish' },
      { name: 'Es Batu Tube Clean', baseAmount: 150, unit: 'g', category: 'Ice' },
      { name: 'Gelas PP Injection 22 oz', baseAmount: 1, unit: 'pcs', category: 'Packaging' }
    ],
    assemblySteps: [
      'Masukkan Jasmine Green Tea (150 mL), Air Mineral (120 mL), dan Jasmine Orange Powder (35 g) ke dalam shaker.',
      'Masukkan Jeruk Sunkist Dadu (40 g) dan es batu secukupnya.',
      'Kocok (Shake) dengan cepat selama 10–15 detik (10–12 kali kocokan) hingga dingin merata.',
      'Tuangkan seluruh isi shaker ke dalam gelas PP Injection 22 oz.',
      'Tambahkan 2 Slice Round Jeruk Sunkist di bagian atas sebagai garnish.'
    ]
  },
  {
    id: 'r-lycheetea',
    name: '5. ICED LYCHEE TEA (XXI Special Bar)',
    category: 'Bar (Mixologist)',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    baseYieldText: '1 Gelas 16oz',
    cookingTempTime: 'Assembly 45 Detik (Bar Station)',
    equipmentWarning: '⚠️ Perhatian Bar: Gunakan Jigger Stainless untuk mengukur sirup. Dilarang mencuci Shaker Mika memakai air panas!',
    ingredients: [
      { name: 'Premium Tea Base XXI', baseAmount: 150, unit: 'ml', category: 'Tea Base' },
      { name: 'Lychee Syrup Concentrated', baseAmount: 30, unit: 'ml', category: 'Sirup' },
      { name: 'Simple Syrup', baseAmount: 15, unit: 'ml', category: 'Pemanis' },
      { name: 'Buah Lychee Utuh', baseAmount: 2, unit: 'pcs', category: 'Garnish' },
      { name: 'Es Batu Tube Clean', baseAmount: 150, unit: 'g', category: 'Es' }
    ],
    assemblySteps: [
      'Masukkan Lychee Syrup (30ml) & Simple Syrup (15ml) ke Cocktail Shaker menggunakan Jigger.',
      'Tambahkan Tea Base (150ml) & Es Batu (150g). Shake kuat selama 10 detik.',
      'Tuang seluruh isi shaker ke gelas XXI 16oz.',
      'Beri garnish 2 pcs Buah Lychee di atas minuman.'
    ]
  }
];

export const SmartRecipeCalculator: React.FC = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>('r-sistagor');
  const [portionMultiplier, setPortionMultiplier] = useState<number>(1);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Kitchen (Commis)' | 'Bar (Mixologist)' | 'Kitchen Prep'>('All');

  const selectedRecipe = CALCULATOR_RECIPES.find((r) => r.id === selectedRecipeId) || CALCULATOR_RECIPES[0];

  const filteredRecipes = CALCULATOR_RECIPES.filter((r) => {
    return categoryFilter === 'All' || r.category === categoryFilter;
  });

  const handleCopyRecipeCard = () => {
    const textLines = [
      `=== RESEP XXI SMART CALCULATOR: ${selectedRecipe.name} ===`,
      `Target Jumlah Batch / Porsi: ${portionMultiplier} Porsi`,
      `Kategori: ${selectedRecipe.category}`,
      `Estimasi Waktu / Suhu: ${selectedRecipe.cookingTempTime || '-'}`,
      `Peringatan Alat: ${selectedRecipe.equipmentWarning}`,
      ``,
      `--- TAKARAN BAHAN TERKALKULASI PARALEL ---`,
      ...selectedRecipe.ingredients.map((ing) => {
        const scaledVal = (ing.baseAmount * portionMultiplier).toFixed(ing.unit === 'pcs' || ing.unit === 'pumps' ? 0 : 1);
        return `• ${ing.name}: ${scaledVal} ${ing.unit} (Base 1x: ${ing.baseAmount}${ing.unit})`;
      }),
      ``,
      `--- TATA CARA PERAKITAN / ASSEMBLY ---`,
      ...selectedRecipe.assemblySteps.map((step, idx) => `${idx + 1}. ${step}`),
      ``,
      `Kalkulasi otomatis oleh Cinema XXI VISOP Portal v3.0`
    ];

    navigator.clipboard.writeText(textLines.join('\n'));
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleExportPDF = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Harap izinkan pop-up browser untuk mengunduh dokumen PDF.');
      return;
    }

    const rowsHtml = selectedRecipe.ingredients.map((ing, idx) => {
      const scaledVal = (ing.baseAmount * portionMultiplier).toFixed(
        ing.unit === 'pcs' || ing.unit === 'pumps' ? 0 : 1
      );
      return `
        <tr>
          <td style="text-align:center; color:#64748b; font-weight:bold;">${idx + 1}</td>
          <td style="font-weight:bold; color:#0f172a;">${ing.name}</td>
          <td><span style="background:#f1f5f9; color:#475569; padding:2px 6px; border-radius:4px; font-size:10px;">${ing.category}</span></td>
          <td style="text-align:right; color:#64748b;">${ing.baseAmount} ${ing.unit}</td>
          <td style="text-align:right; font-weight:bold; color:#0284c7; background:#f0f9ff;">${scaledVal} ${ing.unit}</td>
        </tr>
      `;
    }).join('');

    const stepsHtml = selectedRecipe.assemblySteps.map((step, idx) => `
      <div style="display:flex; gap:10px; margin-bottom:8px; font-size:12px; color:#334155;">
        <span style="font-weight:bold; color:#0284c7; min-width:20px;">${idx + 1}.</span>
        <span>${step}</span>
      </div>
    `).join('');

    const isMixologist = selectedRecipe.category.includes('Mixologist');
    const docTitle = `CINEMA XXI - SOP RESEP STANDAR (${isMixologist ? 'MIXOLOGIST' : 'COMMIS'})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <title>${docTitle} - ${selectedRecipe.name}</title>
        <style>
          @page { size: A4 portrait; margin: 12mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin:0; padding:20px; background:#fff; }
          .header { border-bottom: 3px double #0f172a; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
          .logo { font-size: 20px; font-weight: 900; letter-spacing: 1px; color: #0f172a; font-family: monospace; }
          .subtitle { font-size: 11px; color: #64748b; font-weight: bold; text-transform: uppercase; margin-top: 2px; }
          .badge { background: #0f172a; color: #f8fafc; font-size: 10px; font-weight: bold; padding: 4px 8px; border-radius: 4px; }
          .meta-box { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 16px; font-size: 11px; }
          .alert-box { background: #fffbeeb; border-left: 4px solid #d97706; border: 1px solid #fef3c7; padding: 10px 14px; border-radius: 6px; font-size: 11px; color: #78350f; margin-bottom: 16px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11px; }
          th { background: #0f172a; color: #ffffff; text-align: left; padding: 8px 10px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
          td { padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
          .section-title { font-size: 12px; font-weight: 800; color: #0f172a; text-transform: uppercase; margin-bottom: 8px; font-family: monospace; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
          .steps-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 20px; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: #94a3b8; font-family: monospace; }
          .stamp { border: 2px dashed #16a34a; color: #15803d; font-weight: 900; font-size: 10px; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">CINEMA XXI VISOP v3.0</div>
            <div class="subtitle">STANDAR OPERASIONAL PROSEDUR & RESEP BATCH TERKALKULASI</div>
          </div>
          <div class="badge">${selectedRecipe.category.toUpperCase()}</div>
        </div>

        <div class="meta-box">
          <div>
            <div><strong>NAMA MENU:</strong> ${selectedRecipe.name}</div>
            <div style="margin-top:4px;"><strong>TARGET BATCH:</strong> ${portionMultiplier} Porsi</div>
          </div>
          <div>
            <div><strong>SOP YIELD:</strong> ${selectedRecipe.baseYieldText}</div>
            <div style="margin-top:4px;"><strong>SUHU / METODE:</strong> ${selectedRecipe.cookingTempTime || '-'}</div>
          </div>
        </div>

        <div class="alert-box">
          <strong>⚠️ MANDATORY PERINGATAN ALAT & PERSIAPAN:</strong><br/>
          ${selectedRecipe.equipmentWarning}
        </div>

        <div class="section-title">I. TABEL FORMULASI & GRAMASI BAHAN (${portionMultiplier} PORSI)</div>
        <table>
          <thead>
            <tr>
              <th style="width:30px; text-align:center;">NO</th>
              <th>NAMA BAHAN BAKU</th>
              <th>KATEGORI</th>
              <th style="text-align:right;">BASE (1 PORSI)</th>
              <th style="text-align:right;">TOTAL TAKARAN (${portionMultiplier}X)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <div class="section-title">II. TATA CARA PERAKITAN / ASSEMBLY STEPS</div>
        <div class="steps-box">
          ${stepsHtml}
        </div>

        <div class="footer">
          <div>Dokumen Resmi Portal VISOP Cinema XXI • Diunduh: ${new Date().toLocaleString('id-ID')}</div>
          <div class="stamp">✓ TERSTANDARISASI (100% VALID)</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          }
        </script>
      </body>
      </html>
    `;

    printWin.document.write(htmlContent);
    printWin.document.close();
  };

  return (
    <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-4 sm:p-6 space-y-6 shadow-2xl">
      
      {/* WIDGET HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono-code font-bold px-2.5 py-0.5 rounded-full uppercase">
              Inovasi Utama 02
            </span>
            <span className="text-xs text-slate-400 font-mono-code">• Real-time Grammage Auto-Scaling Engine</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white font-mono-code mt-1 flex items-center gap-2">
            <i className="fa-solid fa-calculator text-amber-400" />
            Smart Recipe Calculator XXI (Kitchen Commis & Mixologist Bar)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Pilih menu makanan/minuman dan atur jumlah porsi batch. Gramasi & takaran bahan baku Commis maupun Mixologist akan terkalkulasi presisi secara otomatis!
          </p>
        </div>

        {/* Quick Recipe Category Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shrink-0">
          {(['All', 'Kitchen (Commis)', 'Bar (Mixologist)', 'Kitchen Prep'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold transition-all ${
                categoryFilter === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'Kitchen (Commis)' ? 'Kitchen Commis' : cat === 'Bar (Mixologist)' ? 'Bar' : cat === 'Kitchen Prep' ? 'Prep' : 'Semua'}
            </button>
          ))}
        </div>
      </div>

      {/* CONTROLS GRID: MENU SELECTOR & PORTION MULTIPLIER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* MENU SELECTOR LIST (LEFT) */}
        <div className="md:col-span-5 space-y-2">
          <label className="text-xs font-mono-code font-bold text-amber-400 uppercase flex items-center justify-between">
            <span><i className="fa-solid fa-utensils mr-1.5" /> Pilih Resep Menu XXI:</span>
            <span className="text-[10px] text-slate-500 font-normal">({filteredRecipes.length} Menu)</span>
          </label>
          <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredRecipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => setSelectedRecipeId(recipe.id)}
                className={`w-full text-left p-3 rounded-xl border font-mono-code transition-all flex items-center justify-between gap-2 ${
                  selectedRecipeId === recipe.id
                    ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg ring-1 ring-amber-500/50'
                    : 'bg-slate-900/80 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] px-1.5 py-0.5 rounded border font-bold uppercase ${recipe.badgeColor}`}>
                      {recipe.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">{recipe.name}</h4>
                  <p className="text-[10px] text-slate-400 font-sans">{recipe.baseYieldText}</p>
                </div>
                <i className={`fa-solid fa-chevron-right text-xs transition-transform ${selectedRecipeId === recipe.id ? 'text-amber-400 translate-x-1' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* PORTION MULTIPLIER & BATCH CONTROLLER (RIGHT) */}
        <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-5 flex flex-col justify-between">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono-code font-bold text-sky-400 uppercase flex items-center gap-1.5">
                <i className="fa-solid fa-sliders" />
                <span>Atur Multiplier Jumlah Porsi / Batch:</span>
              </label>
              <span className="text-xs font-mono-code font-black text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded border border-amber-500/30">
                {portionMultiplier} x Porsi
              </span>
            </div>

            {/* PRESET MULTIPLIER BUTTONS */}
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 5, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setPortionMultiplier(num)}
                  className={`py-2 rounded-xl text-xs font-mono-code font-bold transition-all border ${
                    portionMultiplier === num
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg scale-105'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border-slate-800'
                  }`}
                >
                  {num} Porsi
                </button>
              ))}
            </div>

            {/* CUSTOM SLIDER */}
            <div className="space-y-1 pt-1">
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={portionMultiplier}
                onChange={(e) => setPortionMultiplier(parseInt(e.target.value) || 1)}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono-code">
                <span>1 Porsi (Single)</span>
                <span>5 Porsi (Standard Batch)</span>
                <span>20 Porsi (Event Big Batch)</span>
              </div>
            </div>
          </div>

          {/* ACTIVE RECIPE SUMMARY INFO */}
          <div className="bg-slate-950/90 border border-slate-800 p-3.5 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-code border-b border-slate-800/80 pb-2">
              <span className="text-slate-400 font-bold">Resep Terpilih:</span>
              <span className="text-amber-300 font-black">{selectedRecipe.name}</span>
            </div>

            {selectedRecipe.cookingTempTime && (
              <div className="flex items-center justify-between text-[11px] font-mono-code">
                <span className="text-slate-400">Durasi / Standar Suhu:</span>
                <span className="text-sky-300 font-bold">{selectedRecipe.cookingTempTime}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-[11px] font-mono-code">
              <span className="text-slate-400">Total Item Bahan Baku:</span>
              <span className="text-slate-200 font-bold">{selectedRecipe.ingredients.length} Jenis Bahan</span>
            </div>
          </div>

        </div>

      </div>

      {/* EQUIPMENT WARNING ALERT BOX */}
      <div className="bg-amber-500/10 border-l-4 border-amber-500 p-3.5 rounded-r-xl space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-300 font-mono-code">
          <i className="fa-solid fa-triangle-exclamation text-amber-400" />
          <span>EQUIPMENT & PREPARATION WARNING ALERT:</span>
        </div>
        <p className="text-xs text-slate-200 font-sans leading-relaxed">
          {selectedRecipe.equipmentWarning}
        </p>
      </div>

      {/* CALCULATED INGREDIENTS TABLE */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs sm:text-sm font-bold text-white font-mono-code flex items-center gap-2">
            <i className="fa-solid fa-scale-balanced text-amber-400" />
            <span>
              Hasil Kalkulasi {selectedRecipe.category.includes('Mixologist') ? 'Takaran Bahan Mixologist' : 'Gramasi Bahan Commis'} ({portionMultiplier} Porsi):
            </span>
          </h3>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRecipeCard}
              className="px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 transition-all flex items-center gap-1.5"
            >
              <i className={`fa-solid ${copiedNotification ? 'fa-check text-emerald-400' : 'fa-copy'}`} />
              <span>{copiedNotification ? 'Tersalin!' : 'Salin Resep'}</span>
            </button>

            <button
              onClick={handleExportPDF}
              className="px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 border border-sky-500/40 transition-all flex items-center gap-1.5"
              title="Unduh Kartu SOP & Resep ke PDF Resmi XXI"
            >
              <i className="fa-solid fa-file-pdf text-rose-400" />
              <span>Unduh PDF SOP</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar border border-slate-800 rounded-2xl bg-slate-900/60">
          <table className="w-full text-left text-xs font-mono-code">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase text-[10px] font-bold">
              <tr>
                <th className="py-3 px-3 w-10 text-center">No</th>
                <th className="py-3 px-4">
                  Nama Bahan Baku {selectedRecipe.category.includes('Mixologist') ? 'Mixologist' : 'Commis'}
                </th>
                <th className="py-3 px-3">Kategori</th>
                <th className="py-3 px-3 text-right">Base (1 Porsi)</th>
                <th className="py-3 px-4 text-right bg-amber-500/10 text-amber-300 border-l border-amber-500/20">
                  Total Takaran ({portionMultiplier}x)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              {selectedRecipe.ingredients.map((ing, idx) => {
                const scaledVal = (ing.baseAmount * portionMultiplier).toFixed(
                  ing.unit === 'pcs' || ing.unit === 'pumps' ? 0 : 1
                );
                return (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-3 text-center text-slate-500 font-bold">{idx + 1}</td>
                    <td className="py-3 px-4 font-bold text-white">{ing.name}</td>
                    <td className="py-3 px-3">
                      <span className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                        {ing.category}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {ing.baseAmount} {ing.unit}
                    </td>
                    <td className="py-3 px-4 text-right font-black text-amber-300 bg-amber-500/5 border-l border-amber-500/20 text-sm">
                      {scaledVal} {ing.unit}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ASSEMBLY STEPS ACCORDION / LIST */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-2.5">
        <h4 className="text-xs font-mono-code font-bold text-sky-400 uppercase flex items-center gap-1.5">
          <i className="fa-solid fa-list-ol" />
          <span>Langkah Perakitan & Standar Penyajian ({selectedRecipe.name}):</span>
        </h4>
        <div className="space-y-2">
          {selectedRecipe.assemblySteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
              <span className="w-5 h-5 rounded bg-amber-500/20 text-amber-300 font-mono-code font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

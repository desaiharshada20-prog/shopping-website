// ShopKart E-Commerce Product Database
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Apple iPhone 15 (128 GB) - Blue",
    category: "Mobiles",
    brand: "Apple",
    price: 69999,
    originalPrice: 79900,
    rating: 4.7,
    reviewsCount: 3840,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Bestseller",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Dynamic Island bubbles up alerts and Live Activities. 48MP Main camera with 2x Telephoto. Durable color-infused glass and aluminum design.",
    specs: {
      "Display": "6.1-inch Super Retina XDR OLED",
      "Processor": "A16 Bionic chip",
      "Camera": "48MP Main + 12MP Ultra Wide",
      "Battery": "All-day battery life (up to 20 hrs video)",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    offers: [
      "Bank Offer: 10% instant discount up to ₹1,500 on HDFC Bank Cards",
      "Exchange Offer: Up to ₹25,000 off on exchange of your old device",
      "No Cost EMI available starting at ₹3,390/month"
    ]
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 26990,
    originalPrice: 34990,
    rating: 4.8,
    reviewsCount: 1920,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Deal of the Day",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Industry-leading noise cancellation optimized with two processors and 8 microphones. Crystal clear hands-free calling with 4 beamforming mics.",
    specs: {
      "Battery Life": "Up to 30 hours with fast charge (3 min = 3 hrs)",
      "Connectivity": "Bluetooth 5.2, Multipoint connection",
      "Driver": "30mm precision-engineered drivers",
      "Weight": "250g ultra-light design"
    },
    offers: [
      "Special Price: Flat ₹8,000 discount already applied",
      "Bank Offer: ₹2,000 instant cashback on ICICI Credit Cards"
    ]
  },
  {
    id: 3,
    title: "Apple MacBook Air M2 - 13.6-inch, 8GB RAM, 256GB SSD (Midnight)",
    category: "Laptops",
    brand: "Apple",
    price: 89990,
    originalPrice: 99900,
    rating: 4.9,
    reviewsCount: 2450,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Top Rated",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Strikingly thin design with all-day battery life. Supercharged by the next-generation M2 chip, offering phenomenal performance and speed.",
    specs: {
      "Chip": "Apple M2 with 8-core CPU and 8-core GPU",
      "Memory": "8GB Unified Memory",
      "Storage": "256GB Superfast SSD",
      "Display": "13.6-inch Liquid Retina Display with True Tone"
    },
    offers: [
      "Student Offer: Free AirPods or ₹5,000 Education Discount",
      "Card Offer: ₹5,000 instant discount on Axis Bank Cards"
    ]
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256GB)",
    category: "Mobiles",
    brand: "Samsung",
    price: 119999,
    originalPrice: 134999,
    rating: 4.8,
    reviewsCount: 1680,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "AI Powered",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Welcome to the era of Galaxy AI. Circle to Search, Live Call Translation, Note Assist and revolutionary 200MP camera with titanium frame.",
    specs: {
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Camera": "200MP Quad Tele System with 100x Space Zoom",
      "Stylus": "Built-in S-Pen included",
      "Battery": "5000 mAh with 45W Fast Charging"
    },
    offers: [
      "Bank Offer: ₹10,000 instant rebate with HDFC & SBI cards",
      "Free 1-year Samsung Care+ Accidental Damage protection"
    ]
  },
  {
    id: 5,
    title: "Nike Air Max 270 Men's Running Shoes (Black/White)",
    category: "Fashion",
    brand: "Nike",
    price: 9495,
    originalPrice: 13995,
    rating: 4.5,
    reviewsCount: 920,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "32% OFF",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude with an extra large Max Air unit and snug bootie construction.",
    specs: {
      "Material": "Knit fabric upper for lightweight feel",
      "Sole": "Rubber outsole with Max Air 270 cushioning",
      "Closure": "Lace-Up",
      "Usage": "Sports, Running, Casual Lifestyle"
    },
    offers: [
      "Buy 2 Get Extra 10% Off on select fashion brands",
      "10-Day Free Size Exchange Guarantee"
    ]
  },
  {
    id: 6,
    title: "Fossil Gen 6 Smartwatch with AMOLED Display & Heart Rate",
    category: "Electronics",
    brand: "Fossil",
    price: 12495,
    originalPrice: 24995,
    rating: 4.3,
    reviewsCount: 740,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "50% OFF",
    assured: false,
    inStock: true,
    fastDelivery: false,
    description: "Track your health metrics with SpO2 sensor, continuous heart rate and sleep insights. Powered by Wear OS by Google with rapid charging.",
    specs: {
      "Display": "1.28-inch Color AMOLED Always-on",
      "Sensors": "SpO2, PPG Heart Rate, Accelerometer, GPS",
      "Battery": "24+ Hours Multi-day Extended Mode",
      "Water Resistance": "3 ATM Swimproof"
    },
    offers: [
      "Flat 50% End of Season Discount",
      "Extra ₹500 off using coupon SAVE10"
    ]
  },
  {
    id: 7,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker & Slow Cooker (6L)",
    category: "Appliances",
    brand: "Instant Pot",
    price: 7999,
    originalPrice: 11999,
    rating: 4.6,
    reviewsCount: 3100,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Popular",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Replaces 7 kitchen appliances: Pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and food warmer all in one.",
    specs: {
      "Capacity": "6 Liters (Feeds up to 6 people)",
      "Power": "1000 Watts stainless steel element",
      "Safety": "10+ built-in safety mechanisms",
      "Programs": "13 One-Touch Smart Cooking Programs"
    },
    offers: [
      "Free Chef Recipe Cookbook included",
      "Save ₹4,000 today on Kitchen & Home specials"
    ]
  },
  {
    id: 8,
    title: "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    category: "Fashion",
    brand: "Levi's",
    price: 2199,
    originalPrice: 3999,
    rating: 4.4,
    reviewsCount: 1540,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "45% OFF",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "A modern slim with room to move. Added stretch for all-day comfort and engineered with sustainable Water<Less techniques.",
    specs: {
      "Fit": "Slim from hip to ankle",
      "Fabric": "99% Cotton, 1% Elastane Stretch Denim",
      "Rise": "Sits below waist",
      "Wash Care": "Machine wash cold inside out"
    },
    offers: [
      "Buy 2 get extra 15% off",
      "Assurance: 100% Genuine Levi's Guarantee"
    ]
  },
  {
    id: 9,
    title: "Dell XPS 15 9530 Laptop (13th Gen Intel Core i7, 16GB, 1TB SSD, RTX 4050)",
    category: "Laptops",
    brand: "Dell",
    price: 174990,
    originalPrice: 199990,
    rating: 4.7,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Pro Choice",
    assured: true,
    inStock: true,
    fastDelivery: false,
    description: "Immerse yourself in content with a stunning 15.6-inch 3.5K OLED touchscreen, powered by 13th Gen Intel Core and NVIDIA GeForce RTX graphics.",
    specs: {
      "Processor": "Intel Core i7-13700H (14 Cores, up to 5.0 GHz)",
      "Graphics": "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "Display": "15.6\" 3.5K (3456x2160) InfinityEdge Touch OLED",
      "Audio": "Studio sound with quad speakers and Waves Nx 3D audio"
    },
    offers: [
      "No Cost EMI available up to 18 months",
      "Includes Dell Pro Wireless Headset worth ₹6,999"
    ]
  },
  {
    id: 10,
    title: "Dyson V12 Detect Slim Total Clean Cordless Vacuum Cleaner",
    category: "Appliances",
    brand: "Dyson",
    price: 49900,
    originalPrice: 65900,
    rating: 4.8,
    reviewsCount: 880,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Sale",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "A precisely-angled light reveals invisible dust on hard floors. Acoustic piezo sensor scientifically proves deep clean with LCD screen readout.",
    specs: {
      "Suction Power": "150 Air Watts powerful fade-free suction",
      "Run Time": "Up to 60 minutes with click-in battery",
      "Filtration": "Whole-machine filtration captures 99.99% of microscopic particles",
      "Weight": "2.2 kg ultra lightweight"
    },
    offers: [
      "Flat ₹16,000 discount this festive season",
      "Free 2-year Dyson accidental guarantee and home demo"
    ]
  },
  {
    id: 11,
    title: "Ray-Ban Classic Aviator Polarized Sunglasses (Gold Frame / Green Lens)",
    category: "Fashion",
    brand: "Ray-Ban",
    price: 8590,
    originalPrice: 11490,
    rating: 4.6,
    reviewsCount: 1150,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Iconic",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "Originally designed for U.S. aviators in 1937, Ray-Ban Aviator Classic sunglasses are a timeless model that combines great aviator styling with exceptional quality.",
    specs: {
      "Frame Material": "Metal, Polished Gold",
      "Lenses": "Crystal Green Polarized Classic G-15",
      "Protection": "100% UV400 Protection",
      "Includes": "Original Leather Case & Cleaning Cloth"
    },
    offers: [
      "Free Express Shipping across India",
      "100% Authentic with Authenticity Certificate"
    ]
  },
  {
    id: 12,
    title: "OnePlus 12 5G (Silky Black, 16GB RAM, 512GB Storage)",
    category: "Mobiles",
    brand: "OnePlus",
    price: 64999,
    originalPrice: 69999,
    rating: 4.7,
    reviewsCount: 2210,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    badge: "Flagship",
    assured: true,
    inStock: true,
    fastDelivery: true,
    description: "4th Gen Hasselblad Camera for Mobile, 100W SUPERVOOC charging, and Snapdragon 8 Gen 3 with massive 5400 mAh battery for extreme performance.",
    specs: {
      "Display": "6.82\" 120Hz 2K ProXDR Display with Aqua Touch",
      "Charging": "100W Wired + 50W Wireless AIRVOOC",
      "Cooling": "Dual Cryo-velocity VC cooling system",
      "Processor": "Snapdragon 8 Gen 3 mobile platform"
    },
    offers: [
      "Bank Discount: Flat ₹3,000 off on ICICI and OneCard",
      "Free 6 months Spotify Premium subscription included"
    ]
  }
];

// Carousel Banners data
const HERO_BANNERS = [
  {
    id: 1,
    tag: "BIG SAVINGS DAYS",
    title: "MEGA ELECTRONICS FESTIVAL",
    subtitle: "Up to 70% Off on Laptops, Headphones, Smartwatches & More!",
    ctaText: "Shop Electronics",
    category: "Electronics",
    badge: "Flipkart & Amazon Grand Deals",
    bgGradient: "from-blue-700 via-indigo-800 to-slate-900",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    tag: "FLAGSHIP LAUNCH",
    title: "SMARTPHONES BONANZA",
    subtitle: "Extra ₹10,000 Exchange Bonus + No Cost EMI on iPhone & Galaxy!",
    ctaText: "Explore Mobiles",
    category: "Mobiles",
    badge: "Lowest Prices of the Year",
    bgGradient: "from-amber-600 via-orange-700 to-red-900",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    tag: "FASHION TRENDS",
    title: "STYLE UP FOR LESS",
    subtitle: "Min 50% - 80% Off on Top Footwear, Denims, Sunglasses & Watches",
    ctaText: "Grab Fashion Deals",
    category: "Fashion",
    badge: "Fresh Autumn Collection",
    bgGradient: "from-purple-800 via-pink-700 to-rose-900",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    tag: "HOME & APPLIANCES",
    title: "SMART HOME UPGRADES",
    subtitle: "Cookers, Robotic Vacuums & Kitchen Essentials starting ₹1,499",
    ctaText: "View Appliances",
    category: "Appliances",
    badge: "Free Delivery Included",
    bgGradient: "from-emerald-700 via-teal-800 to-cyan-950",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
  }
];

// Quick Categories Bar items
const NAV_CATEGORIES = [
  { id: "all", name: "All Products", icon: "grid" },
  { id: "Mobiles", name: "Mobiles", icon: "smartphone" },
  { id: "Electronics", name: "Electronics", icon: "headphones" },
  { id: "Laptops", name: "Laptops", icon: "laptop" },
  { id: "Fashion", name: "Fashion", icon: "shirt" },
  { id: "Appliances", name: "Home & Appliances", icon: "home" },
  { id: "deals", name: "Top Deals 🔥", icon: "zap" }
];

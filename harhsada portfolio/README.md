# 🛍️ ShopKart - Modern E-Commerce Platform
> An attractive, feature-packed, and intuitive shopping web application inspired by **Amazon** and **Flipkart**, built using **HTML5, CSS3, JavaScript (ES6+), and React 18**.

---

## 🌟 Highlights & Key Features

### 🛒 1. Amazon & Flipkart Inspired Design
- **Top Navigation Bar**:
  - Brand identity with **ShopKart Plus** badge.
  - Interactive **Delivery Pincode / Location Selector** (e.g. *Deliver to Mumbai 400001*).
  - **Mega Search Bar** with department/category dropdown, live input filtering, and clear search button.
  - **Currency Switcher**: Toggle easily between **Indian Rupee (₹)** and **US Dollar ($)**.
  - **Returns & Orders** tracker button.
  - **Wishlist** button with real-time counter badge.
  - **Shopping Cart** button with item counter pill and live subtotal preview.

- **Category Sub-Navbar**:
  - Instant navigation across categories: *All Products, Mobiles, Electronics, Laptops, Fashion, Home & Appliances, Top Deals 🔥*.

- **Dynamic Hero Promotional Banner**:
  - Auto-rotating carousel with smooth gradient themes (*Big Savings Days, Smartphone Bonanza, Fashion Trends, Smart Home*).
  - Next/Previous controls, indicators, and call-to-actions.

- **Value & Trust Strip**:
  - ⚡ *Free & Fast Delivery* (Orders over ₹499 / $15)
  - 🛡️ *100% Genuine Assured* (Brand warranties)
  - 🔄 *7-Day Easy Returns* (Replacement guarantee)
  - 💳 *Secure Payments & UPI* (Cards, Netbanking, COD)

- **Deal of the Day Live Countdown Timer**:
  - Live ticking timer (`HH : MM : SS`) creating urgency just like Amazon Lightning Deals and Flipkart SuperCoins.

---

### 🔍 2. Product Catalog & Smart Filtering
- **Sidebar Filters**:
  - **Categories**: Instant radio filtering.
  - **ShopKart Assured Checkbox**: Filter verified items with the signature blue tick badge.
  - **Interactive Price Range Slider**: Adjust maximum price dynamically.
  - **Customer Rating Filter**: `4★ & above` or `3★ & above` badges.
  - **Discount Filters**: `30%+`, `40%+`, `50%+` off.
  - **Clear All Filters** button.

- **Sorting Options**:
  - *Featured*, *Price: Low to High*, *Price: High to Low*, *Customer Rating*, and *Highest Discount*.

- **Amazon/Flipkart Card Layout**:
  - High-res product images with hover zoom.
  - Discount percentage badge (`35% OFF`).
  - Star rating green badge (`4.8 ★ (1,920)`).
  - Original price strikethrough & final savings.
  - Fast Delivery promise (*FREE Delivery by Tomorrow*).
  - Add to cart with quantity stepper (`- 1 +`) & One-Click **Buy Now**.
  - Interactive Wishlist heart button with toggle feedback.

---

### 📦 3. Interactive Product Detail Modal (Quick View)
- High-resolution image preview and gallery thumbnails.
- Brand name, verified *ShopKart Assured* guarantee.
- Available bank discounts (e.g., *10% Instant discount on HDFC/SBI cards, No Cost EMI*).
- Full specifications table (Processor, Display, Battery, Warranty).
- One-click *Add to Cart* or *Buy Now* to jump straight to checkout.

---

### 🛍️ 4. Slide-Out Cart Drawer & Coupon Engine
- Fluid side drawer sliding in from the right.
- Item quantity stepper (`+` and `-`) with real-time auto-calculation.
- **Working Coupon Codes**:
  - Type `SAVE10` for an extra **10% instant discount**.
  - Type `FLAT500` for **₹500 flat off**.
- Full price summary:
  - *Total MRP*, *Discount on MRP*, *Coupon Savings*, *Delivery Charges (Free above ₹499)*, and *Final Payable Amount*.
  - *“🎉 You will save ₹X on this order!”* green banner.

---

### 💳 5. Complete Simulated Checkout & Order Tracking
- **2-Step Checkout**:
  1. **Delivery Address Form**: Name, Phone, Address, City, State, Pincode.
  2. **Payment Options**: UPI (PhonePe, Google Pay), Credit/Debit Card, and Cash on Delivery (COD).
- Animated payment processing state.
- Generates a unique **Order ID** (e.g. `SK-849201`) with confirmed status.
- **Orders History Tab**: View past orders, delivery estimates, items list, and tracking status at any time!

---

## 🚀 How to Run the Website

### Option 1: Direct Double-Click (Zero Setup!)
No build step or Node.js installation is required:
1. Navigate to the `shopping-website` folder.
2. Double-click **`index.html`** (or open `shop.html` in the root).
3. The store will open and run smoothly in Chrome, Edge, Firefox, or Safari!

### Option 2: Run with Live Server
If you use VS Code:
1. Right-click `index.html` in `shopping-website/`.
2. Click **"Open with Live Server"**.

---

## 📁 File Structure

```
d:/hrportfolio/
├── shop.html                   # Quick root launcher that opens the store
├── shopping-website/
│   ├── index.html              # HTML5 entrypoint with CDNs (Tailwind & React 18)
│   ├── styles.css              # Custom styling, badges, animations & theme colors
│   ├── products.js             # Rich mock products database with specs & offers
│   ├── app.js                  # Complete React application with clean state logic
│   └── README.md               # Documentation & guide
└── index.html                  # Harshada's portfolio (with live demo button)
```

---

## 🛠️ Technologies Used
- **HTML5**: Semantic tags and accessible structure.
- **CSS3 & Tailwind CSS**: Modern layout, responsive grid, smooth animations, and Amazon/Flipkart palette.
- **JavaScript (ES6+)**: LocalStorage persistence, Array filter/reduce/map operations, countdown timers.
- **React 18**: Component-based UI, reactive state management (`useState`, `useEffect`, `useMemo`).

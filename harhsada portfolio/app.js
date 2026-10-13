// ShopKart React Application (Amazon & Flipkart Inspired E-Commerce Platform)
const { useState, useEffect, useMemo, useRef } = React;

// --- Helper Utilities ---
const formatCurrency = (amount, currency = 'INR') => {
  if (currency === 'USD') {
    const usd = (amount / 83).toFixed(2);
    return `$${usd}`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};

const calculateDiscount = (original, current) => {
  if (!original || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
};

// --- SVG Icons Component ---
const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  switch (name) {
    case "search":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "cart":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "heart-filled":
      return (
        <svg className={className} fill="#ef4444" stroke="#ef4444" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "star":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    case "truck":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "refresh":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "zap":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "pin":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "close":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case "trash":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      );
    case "check":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      );
    case "filter":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      );
    case "bag":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    default:
      return null;
  }
};

// --- App Root Component ---
function App() {
  // Products & Storage state
  const [products] = useState(MOCK_PRODUCTS);
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('shopkart_cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shopkart_wishlist');
      return saved ? JSON.parse(saved) : [1, 3];
    } catch { return [1, 3]; }
  });
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('shopkart_orders');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(200000);
  const [minRating, setMinRating] = useState(0);
  const [onlyAssured, setOnlyAssured] = useState(false);
  const [onlyDiscount, setOnlyDiscount] = useState(0);
  const [sortBy, setSortBy] = useState("featured");

  // Navigation & Location
  const [deliveryLocation, setDeliveryLocation] = useState({ city: "Mumbai", pincode: "400001" });
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Hero carousel
  const [bannerIndex, setBannerIndex] = useState(0);

  // Promo Code
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  // Toast Notification
  const [toast, setToast] = useState(null);

  // Countdown timer for Deals of the day
  const [timeLeft, setTimeLeft] = useState({ hours: 9, minutes: 24, seconds: 45 });

  // Persist storage
  useEffect(() => {
    localStorage.setItem('shopkart_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shopkart_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('shopkart_orders', JSON.stringify(orders));
  }, [orders]);

  // Deal of day countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setBannerIndex(prev => (prev + 1) % HERO_BANNERS.length);
    }, 5500);
    return () => clearInterval(bannerTimer);
  }, []);

  // Show Toast
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // --- Cart Management ---
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast(`Added "${product.title.slice(0, 24)}..." to cart! 🛒`);
  };

  const updateCartQty = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item)
    );
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showToast("Item removed from cart.", "info");
  };

  // --- Wishlist Management ---
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast("Removed from Wishlist", "info");
        return prev.filter(id => id !== productId);
      } else {
        showToast("Added to Wishlist ❤️", "success");
        return [...prev, productId];
      }
    });
  };

  // --- Coupon Handler ---
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError("");
    const code = couponInput.trim().toUpperCase();
    if (code === "SAVE10") {
      setAppliedCoupon({ code: "SAVE10", discountPercent: 10, label: "10% Instant Off" });
      showToast("Coupon SAVE10 applied! 10% discount added. 🎉");
      setCouponInput("");
    } else if (code === "FLAT500") {
      setAppliedCoupon({ code: "FLAT500", flatDiscount: 500, label: "₹500 Flat Off" });
      showToast("Coupon FLAT500 applied! ₹500 off. 🎉");
      setCouponInput("");
    } else {
      setCouponError("Invalid promo code. Try SAVE10 or FLAT500");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast("Coupon removed", "info");
  };

  // --- Financial Calculations ---
  const cartTotals = useMemo(() => {
    const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const originalTotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
    const savingsOnMRP = originalTotal - rawSubtotal;

    let couponDiscount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.discountPercent) {
        couponDiscount = Math.round((rawSubtotal * appliedCoupon.discountPercent) / 100);
      } else if (appliedCoupon.flatDiscount) {
        couponDiscount = Math.min(appliedCoupon.flatDiscount, rawSubtotal);
      }
    }

    const deliveryFee = rawSubtotal > 500 || rawSubtotal === 0 ? 0 : 49;
    const finalAmount = Math.max(0, rawSubtotal - couponDiscount + deliveryFee);
    const totalSavings = savingsOnMRP + couponDiscount;

    return {
      itemCount: cart.reduce((c, i) => c + i.quantity, 0),
      rawSubtotal,
      originalTotal,
      savingsOnMRP,
      couponDiscount,
      deliveryFee,
      finalAmount,
      totalSavings
    };
  }, [cart, appliedCoupon]);

  // --- Filtered Products ---
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== "all" && selectedCategory !== "deals") {
        if (product.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
      }
      if (selectedCategory === "deals") {
        const disc = calculateDiscount(product.originalPrice, product.price);
        if (disc < 25) return false;
      }

      // Search Category dropdown
      if (searchCategory !== "all") {
        if (product.category.toLowerCase() !== searchCategory.toLowerCase()) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchBrand = product.brand.toLowerCase().includes(q);
        const matchCat = product.category.toLowerCase().includes(q);
        if (!matchTitle && !matchBrand && !matchCat) return false;
      }

      // Price filter
      if (product.price > priceRange) return false;

      // Rating filter
      if (minRating > 0 && product.rating < minRating) return false;

      // Assured badge filter
      if (onlyAssured && !product.assured) return false;

      // Discount filter
      if (onlyDiscount > 0) {
        const disc = calculateDiscount(product.originalPrice, product.price);
        if (disc < onlyDiscount) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "discount") {
        const discA = calculateDiscount(a.originalPrice, a.price);
        const discB = calculateDiscount(b.originalPrice, b.price);
        return discB - discA;
      }
      return 0; // featured default
    });
  }, [products, selectedCategory, searchCategory, searchQuery, priceRange, minRating, onlyAssured, onlyDiscount, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSearchCategory("all");
    setPriceRange(200000);
    setMinRating(0);
    setOnlyAssured(false);
    setOnlyDiscount(0);
    setSortBy("featured");
    showToast("Filters reset to default", "info");
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-900 bg-[#f1f3f6]">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[1000] flex items-center gap-3 px-5 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-xl shadow-2xl animate-fade-in border border-slate-700">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 text-slate-400 hover:text-white">
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 1. TOP MAIN NAVBAR (Flipkart & Amazon Hybrid Style) */}
      <header className="sticky top-0 z-50 bg-[#131921] text-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="flex items-center gap-2 group text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 via-blue-500 to-amber-400 flex items-center justify-center font-black text-xl text-white shadow-md shadow-blue-900/30">
                S
              </div>
              <div className="leading-tight">
                <div className="text-xl font-extrabold tracking-tight flex items-center">
                  Shop<span className="text-[#ffe11b]">Kart</span>
                  <span className="text-xs ml-1 px-1.5 py-0.2 bg-[#ff9f00] text-slate-900 font-bold rounded">Plus</span>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1 group-hover:text-amber-300 transition-colors">
                  <span>Explore</span>
                  <span className="text-[#ffe11b] font-semibold italic">Plus & Deals</span>
                </div>
              </div>
            </button>

            {/* Delivery Location Pincode (Amazon style) */}
            <button 
              onClick={() => setIsLocationModalOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded border border-transparent hover:border-slate-600 text-left transition-colors"
            >
              <Icon name="pin" className="w-5 h-5 text-amber-400 mt-1" />
              <div>
                <div className="text-[11px] text-slate-400 leading-none">Deliver to</div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  {deliveryLocation.city} {deliveryLocation.pincode}
                  <span className="text-[9px] text-amber-400">▼</span>
                </div>
              </div>
            </button>
          </div>

          {/* Search Bar with Category Dropdown (Amazon style) */}
          <div className="flex-1 max-w-2xl relative">
            <div className="flex items-stretch rounded-md overflow-hidden bg-white shadow-sm border-2 border-transparent focus-within:border-[#ff9f00]">
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="bg-slate-100 text-slate-700 text-xs font-medium px-3 border-r border-slate-300 outline-none hover:bg-slate-200 cursor-pointer hidden sm:block"
              >
                <option value="all">All Departments</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Electronics">Electronics</option>
                <option value="Laptops">Laptops</option>
                <option value="Fashion">Fashion</option>
                <option value="Appliances">Appliances</option>
              </select>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more (e.g. iPhone, Sony, Nike)..."
                className="w-full px-3.5 py-2 text-sm text-slate-900 outline-none placeholder-slate-400"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-2 text-slate-400 hover:text-slate-600"
                  title="Clear search"
                >
                  <Icon name="close" className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => {}}
                className="bg-[#ff9f00] hover:bg-[#f39700] text-slate-900 px-5 flex items-center justify-center transition-colors"
                title="Search"
              >
                <Icon name="search" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Action Icons: Currency, Orders, Wishlist, Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Currency Selector */}
            <button
              onClick={() => {
                const nextCurr = currency === "INR" ? "USD" : "INR";
                setCurrency(nextCurr);
                showToast(`Currency changed to ${nextCurr === 'INR' ? 'Indian Rupee (₹)' : 'US Dollar ($)'}`, "info");
              }}
              className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded border border-slate-700 text-xs font-bold text-amber-300 hover:bg-slate-800"
              title="Toggle Currency"
            >
              <span>{currency === "INR" ? "🇮🇳 INR (₹)" : "🇺🇸 USD ($)"}</span>
            </button>

            {/* My Orders Button */}
            <button
              onClick={() => setIsOrdersOpen(true)}
              className="hidden md:flex flex-col text-left px-2 py-1 rounded hover:border hover:border-slate-600 transition-all"
            >
              <span className="text-[11px] text-slate-400 leading-none">Returns</span>
              <span className="text-xs font-bold text-white flex items-center gap-1">
                & Orders
                {orders.length > 0 && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
              </span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded hover:bg-slate-800 transition-colors"
              title="Wishlist"
            >
              <Icon name="heart" className="w-6 h-6 text-white hover:text-rose-400 transition-colors" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button (Flipkart/Amazon style) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#ff9f00] hover:bg-[#f39700] text-slate-950 font-bold px-3.5 py-2 rounded-md transition-colors shadow-sm"
              title="Shopping Cart"
            >
              <div className="relative">
                <Icon name="cart" className="w-5 h-5 text-slate-950" />
                {cartTotals.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartTotals.itemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-extrabold">Cart</span>
              {cartTotals.finalAmount > 0 && (
                <span className="hidden lg:inline text-xs bg-slate-900 text-amber-300 px-1.5 py-0.5 rounded font-mono">
                  {formatCurrency(cartTotals.finalAmount, currency)}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* 2. SUB-NAVBAR CATEGORIES (Amazon / Flipkart Style) */}
        <div className="bg-[#232f3e] text-slate-200 border-t border-slate-700/60 text-xs font-medium">
          <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between overflow-x-auto no-scrollbar py-2 gap-4">
            
            <div className="flex items-center gap-1 sm:gap-3 shrink-0">
              {NAV_CATEGORIES.map(cat => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSearchQuery("");
                    }}
                    className={`px-3 py-1 rounded-sm whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? "bg-[#2874f0] text-white font-bold shadow-sm" 
                        : "hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {cat.id === "deals" && <span className="animate-bounce">⚡</span>}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right deal teaser */}
            <div className="hidden md:flex items-center gap-2 text-amber-300 font-semibold shrink-0">
              <span className="text-[11px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded animate-pulse">LIVE</span>
              <span>Great Indian Savings: Extra 10% Off on Cards!</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. HERO PROMOTIONAL CAROUSEL */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="relative overflow-hidden bg-slate-900 text-white select-none">
          <div className="max-w-[1400px] mx-auto relative h-[260px] sm:h-[340px] md:h-[390px] flex items-center">
            
            {HERO_BANNERS.map((banner, idx) => {
              const isCurrent = idx === bannerIndex;
              return (
                <div
                  key={banner.id}
                  className={`absolute inset-0 transition-opacity duration-700 flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 bg-gradient-to-r ${banner.bgGradient} ${
                    isCurrent ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <div className="max-w-xl z-10 text-left">
                    <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 font-black text-xs tracking-wider rounded-full mb-3 uppercase">
                      {banner.tag} • {banner.badge}
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-2">
                      {banner.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-200 mb-6 line-clamp-2">
                      {banner.subtitle}
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedCategory(banner.category)}
                        className="bg-[#ffe11b] hover:bg-yellow-400 text-slate-900 font-extrabold px-6 py-2.5 rounded-md text-sm shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-0.5"
                      >
                        {banner.ctaText} →
                      </button>
                      <button
                        onClick={() => setSelectedCategory("deals")}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold px-4 py-2.5 rounded-md text-sm transition-all"
                      >
                        Explore All Deals
                      </button>
                    </div>
                  </div>

                  <div className="hidden md:flex relative w-1/2 h-full items-center justify-end">
                    <div className="relative w-80 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-1 hover:rotate-0 transition-transform">
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <span className="absolute bottom-4 left-4 text-xs font-bold bg-black/60 backdrop-blur px-2.5 py-1 rounded text-white">
                        Limited Time Offer
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation arrows */}
            <button
              onClick={() => setBannerIndex(prev => (prev === 0 ? HERO_BANNERS.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
              aria-label="Previous Slide"
            >
              <Icon name="chevron-left" className="w-6 h-6" />
            </button>
            <button
              onClick={() => setBannerIndex(prev => (prev + 1) % HERO_BANNERS.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
              aria-label="Next Slide"
            >
              <Icon name="chevron-right" className="w-6 h-6" />
            </button>

            {/* Slide dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {HERO_BANNERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBannerIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === bannerIndex ? "w-7 bg-amber-400" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. VALUE PROPOSITION STRIP */}
      <section className="bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-[1400px] mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Icon name="truck" className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-800">Free & Fast Delivery</div>
              <div className="text-slate-500 text-[11px]">On orders over {currency === 'INR' ? '₹499' : '$15'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Icon name="shield" className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-800">100% Genuine Assured</div>
              <div className="text-slate-500 text-[11px]">Direct brand warranties</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Icon name="refresh" className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-800">7-Day Easy Returns</div>
              <div className="text-slate-500 text-[11px]">Hassle-free replacement</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Icon name="zap" className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-800">Secure Payments & UPI</div>
              <div className="text-slate-500 text-[11px]">Cards, Netbanking & COD</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLASH DEALS TICKER BAR */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white py-2.5 px-4 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold">
            <span className="bg-slate-900 text-amber-300 px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider">
              Deal of the Day
            </span>
            <span>Ends in:</span>
            <div className="font-mono bg-black/40 px-2.5 py-0.5 rounded text-yellow-200 font-extrabold tracking-widest">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline font-medium">Use coupon <strong>SAVE10</strong> for extra 10% discount!</span>
            <button
              onClick={() => setSelectedCategory("deals")}
              className="bg-white text-slate-900 hover:bg-yellow-100 font-extrabold text-xs px-3 py-1 rounded shadow"
            >
              View Deals
            </button>
          </div>
        </div>
      </section>

      {/* 6. MAIN CONTENT AREA: FILTERS & PRODUCTS GRID */}
      <main className="max-w-[1400px] mx-auto px-4 py-6 w-full flex-1">
        <div className="flex items-start gap-6">

          {/* Desktop Sidebar Filters (Flipkart/Amazon style) */}
          <aside className="hidden lg:block w-64 shrink-0 bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-28 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Icon name="filter" className="w-4 h-4 text-blue-600" />
                Filters
              </h3>
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Category</h4>
              <div className="space-y-1.5 text-sm">
                {NAV_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-2 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {selectedCategory === cat.id && <Icon name="check" className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* ShopKart Assured Checkbox (Flipkart Assured style) */}
            <div className="pt-3 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyAssured}
                  onChange={(e) => setOnlyAssured(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <span className="badge-assured">
                  ShopKart <span className="plus">Assured ✓</span>
                </span>
              </label>
            </div>

            {/* Price Range Slider */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Max Price</h4>
                <span className="text-xs font-mono font-bold text-blue-600">
                  {formatCurrency(priceRange, currency)}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="200000"
                step="2000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>{formatCurrency(2000, currency)}</span>
                <span>{formatCurrency(200000, currency)}</span>
              </div>
            </div>

            {/* Customer Rating Filter */}
            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Customer Rating</h4>
              <div className="space-y-1.5 text-xs">
                {[4, 3].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(prev => (prev === rating ? 0 : rating))}
                    className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between transition-colors ${
                      minRating === rating ? "bg-amber-50 font-bold text-amber-900" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="rating-badge text-[11px] px-1.5">
                        {rating}★
                      </div>
                      <span>& Above</span>
                    </div>
                    {minRating === rating && <Icon name="check" className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Discount Filter */}
            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Discount</h4>
              <div className="space-y-1.5 text-xs">
                {[30, 40, 50].map(disc => (
                  <button
                    key={disc}
                    onClick={() => setOnlyDiscount(prev => (prev === disc ? 0 : disc))}
                    className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between transition-colors ${
                      onlyDiscount === disc ? "bg-emerald-50 font-bold text-emerald-800" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{disc}% or more off</span>
                    {onlyDiscount === disc && <Icon name="check" className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Product Listing Section */}
          <div className="flex-1 min-w-0">
            
            {/* Top Toolbar: Result counter & Sorting */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-base sm:text-lg font-bold text-slate-800">
                  {selectedCategory === "all" ? "All Products" : selectedCategory}
                  {searchQuery && <span className="text-slate-500 text-sm font-normal"> for "{searchQuery}"</span>}
                </h1>
                <p className="text-xs text-slate-500">
                  Showing <strong>{filteredProducts.length}</strong> items available
                </p>
              </div>

              {/* Sort By Buttons (Flipkart style tab sort) */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500 hidden sm:inline">Sort By:</span>
                <div className="flex items-center bg-slate-100 p-1 rounded-lg">
                  {[
                    { id: "featured", label: "Featured" },
                    { id: "price-low", label: "Price: Low to High" },
                    { id: "price-high", label: "Price: High to Low" },
                    { id: "rating", label: "Rating" },
                    { id: "discount", label: "Discount" }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSortBy(tab.id)}
                      className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                        sortBy === tab.id
                          ? "bg-white text-blue-700 shadow-xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters Badges */}
            {(selectedCategory !== "all" || searchQuery || onlyAssured || minRating > 0 || onlyDiscount > 0 || priceRange < 200000) && (
              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                <span className="text-slate-500 font-medium">Applied Filters:</span>
                {selectedCategory !== "all" && (
                  <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory("all")}><Icon name="close" className="w-3 h-3" /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")}><Icon name="close" className="w-3 h-3" /></button>
                  </span>
                )}
                {onlyAssured && (
                  <span className="bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                    Assured Only
                    <button onClick={() => setOnlyAssured(false)}><Icon name="close" className="w-3 h-3" /></button>
                  </span>
                )}
                {minRating > 0 && (
                  <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                    {minRating}★ & Above
                    <button onClick={() => setMinRating(0)}><Icon name="close" className="w-3 h-3" /></button>
                  </span>
                )}
                {onlyDiscount > 0 && (
                  <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                    {onlyDiscount}%+ Off
                    <button onClick={() => setOnlyDiscount(0)}><Icon name="close" className="w-3 h-3" /></button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-red-600 hover:underline font-semibold ml-2"
                >
                  Reset all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Icon name="search" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">No matching products found</h3>
                <p className="text-xs text-slate-500 mb-5">
                  Try adjusting your keywords, price range or clear filters to see more results.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {filteredProducts.map(product => {
                  const discountPercent = calculateDiscount(product.originalPrice, product.price);
                  const isWishlisted = wishlist.includes(product.id);
                  const cartItem = cart.find(item => item.id === product.id);

                  return (
                    <article
                      key={product.id}
                      className="product-card group"
                    >
                      {/* Top Badges & Wishlist Button */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                        {discountPercent > 0 ? (
                          <span className="bg-[#388e3c] text-white text-[11px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                            {discountPercent}% OFF
                          </span>
                        ) : <span></span>}

                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-red-500 shadow-md flex items-center justify-center transition-transform active:scale-90"
                          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          <Icon
                            name={isWishlisted ? "heart-filled" : "heart"}
                            className="w-4 h-4"
                          />
                        </button>
                      </div>

                      {/* Product Image container */}
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="img-container cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-1">
                        
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                            {product.brand}
                          </span>
                          {product.assured && (
                            <span className="badge-assured">
                              ShopKart <span className="plus">Assured ✓</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => setSelectedProduct(product)}
                          className="text-sm font-semibold text-slate-800 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors mb-2"
                          title={product.title}
                        >
                          {product.title}
                        </h3>

                        {/* Ratings & Reviews */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="rating-badge">
                            {product.rating} ★
                          </span>
                          <span className="text-[11px] text-slate-500">
                            ({product.reviewsCount.toLocaleString()} ratings)
                          </span>
                        </div>

                        {/* Price Details */}
                        <div className="mt-auto pt-2 border-t border-slate-100">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-black text-slate-900 font-mono">
                              {formatCurrency(product.price, currency)}
                            </span>
                            {product.originalPrice > product.price && (
                              <span className="text-xs text-slate-400 line-through font-mono">
                                {formatCurrency(product.originalPrice, currency)}
                              </span>
                            )}
                          </div>

                          {/* Free Delivery Tag */}
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                            <span className="text-emerald-600 font-bold">FREE Delivery</span>
                            <span>by Tomorrow</span>
                          </div>

                          {/* Action Buttons: Add to Cart & Buy Now */}
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            {cartItem ? (
                              <div className="flex items-center justify-between border-2 border-[#ff9f00] rounded-md px-2 py-1 bg-amber-50">
                                <button
                                  onClick={() => updateCartQty(product.id, cartItem.quantity - 1)}
                                  className="w-6 h-6 rounded bg-[#ff9f00] text-slate-950 font-black flex items-center justify-center hover:bg-amber-600"
                                >
                                  -
                                </button>
                                <span className="text-xs font-bold font-mono">{cartItem.quantity}</span>
                                <button
                                  onClick={() => updateCartQty(product.id, cartItem.quantity + 1)}
                                  className="w-6 h-6 rounded bg-[#ff9f00] text-slate-950 font-black flex items-center justify-center hover:bg-amber-600"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => addToCart(product)}
                                className="btn-flipkart-cart py-2 px-2 rounded-md text-xs font-bold flex items-center justify-center gap-1 shadow-sm"
                              >
                                <Icon name="cart" className="w-3.5 h-3.5" />
                                <span>Add to Cart</span>
                              </button>
                            )}

                            <button
                              onClick={() => {
                                addToCart(product);
                                setIsCartOpen(true);
                              }}
                              className="btn-flipkart-buy py-2 px-2 rounded-md text-xs font-bold flex items-center justify-center gap-1 shadow-sm"
                            >
                              <Icon name="zap" className="w-3.5 h-3.5" />
                              <span>Buy Now</span>
                            </button>
                          </div>

                        </div>

                      </div>
                    </article>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      </main>

      {/* 7. PRODUCT DETAIL MODAL (Quick View / Specs) */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images & Badges */}
              <div>
                <div className="w-full h-72 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-200 p-4 mb-3">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {selectedProduct.thumbnails && selectedProduct.thumbnails.length > 1 && (
                  <div className="flex gap-2">
                    {selectedProduct.thumbnails.map((t, idx) => (
                      <div key={idx} className="w-16 h-16 rounded border border-slate-200 p-1">
                        <img src={t} alt="thumb" className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {selectedProduct.brand}
                  </span>
                  {selectedProduct.assured && (
                    <span className="badge-assured">
                      ShopKart <span className="plus">Assured ✓</span>
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-slate-900 leading-snug">
                  {selectedProduct.title}
                </h2>

                <div className="flex items-center gap-3">
                  <span className="rating-badge text-sm px-2 py-0.5">
                    {selectedProduct.rating} ★
                  </span>
                  <span className="text-xs text-slate-500">
                    {selectedProduct.reviewsCount.toLocaleString()} Ratings & Reviews
                  </span>
                </div>

                {/* Price Display */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-baseline gap-3">
                  <span className="text-2xl font-black text-slate-900 font-mono">
                    {formatCurrency(selectedProduct.price, currency)}
                  </span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <>
                      <span className="text-sm text-slate-400 line-through font-mono">
                        {formatCurrency(selectedProduct.originalPrice, currency)}
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        {calculateDiscount(selectedProduct.originalPrice, selectedProduct.price)}% OFF
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Bank / Special Offers */}
                {selectedProduct.offers && (
                  <div className="space-y-1.5 bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-xs">
                    <div className="font-bold text-amber-900 flex items-center gap-1">
                      <span>🏷️</span> Available Offers:
                    </div>
                    {selectedProduct.offers.map((offer, i) => (
                      <div key={i} className="text-amber-800 text-[11px] flex items-start gap-1">
                        <span>•</span>
                        <span>{offer}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Specifications List */}
                {selectedProduct.specs && (
                  <div className="text-xs space-y-1 pt-2 border-t border-slate-100">
                    <h4 className="font-bold text-slate-700 mb-1">Key Specifications:</h4>
                    {Object.entries(selectedProduct.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between py-0.5 border-b border-slate-50">
                        <span className="text-slate-500">{k}:</span>
                        <span className="font-medium text-slate-800">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Modal CTA Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                    }}
                    className="btn-flipkart-cart py-3 rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Icon name="cart" className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                      setIsCheckoutOpen(true);
                    }}
                    className="btn-flipkart-buy py-3 rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Icon name="zap" className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. SLIDE-OUT CART DRAWER */}
      {isCartOpen && (
        <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
          <div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[1000] flex flex-col animate-slide-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div className="p-4 bg-[#131921] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="cart" className="w-5 h-5 text-amber-400" />
                <h2 className="font-bold text-base">My Cart ({cartTotals.itemCount} items)</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <Icon name="cart" className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-slate-700 text-lg">Your cart is empty!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Explore our huge collection of products with deals and add them to your cart.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#2874f0] text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow"
                  >
                    Start Shopping Now
                  </button>
                </div>
              ) : (
                <>
                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs flex gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-contain rounded bg-slate-50 p-1 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-slate-800 line-clamp-1">
                          {item.title}
                        </h4>
                        <div className="text-[11px] text-slate-500 mb-1">{item.brand}</div>
                        <div className="flex items-baseline gap-2 mb-2 font-mono">
                          <span className="text-sm font-bold text-slate-900">
                            {formatCurrency(item.price * item.quantity, currency)}
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="text-[11px] text-slate-400 line-through">
                              {formatCurrency(item.originalPrice * item.quantity, currency)}
                            </span>
                          )}
                        </div>

                        {/* Stepper & Trash */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-slate-300 rounded bg-slate-50">
                            <button
                              onClick={() => updateCartQty(item.id, item.quantity - 1)}
                              className="px-2 py-0.5 text-xs font-bold text-slate-700 hover:bg-slate-200"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQty(item.id, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs font-bold text-slate-700 hover:bg-slate-200"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 p-1 text-xs flex items-center gap-1"
                            title="Remove item"
                          >
                            <Icon name="trash" className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Promo Code Input Box */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Have a promo code? (e.g. SAVE10)"
                        className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded bg-white outline-none focus:border-blue-500 uppercase font-mono"
                      />
                      <button
                        type="submit"
                        className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-slate-800"
                      >
                        Apply
                      </button>
                    </form>
                    {couponError && (
                      <p className="text-[11px] text-red-600 mt-1">{couponError}</p>
                    )}
                    {appliedCoupon && (
                      <div className="flex items-center justify-between mt-2 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2 py-1 rounded border border-emerald-200">
                        <span>✓ Coupon <strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.label})</span>
                        <button onClick={removeCoupon} className="text-red-600 hover:underline text-[10px]">Remove</button>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide border-b border-slate-200 pb-1.5">
                      Price Details
                    </h4>
                    <div className="flex justify-between text-slate-600">
                      <span>Price ({cartTotals.itemCount} items)</span>
                      <span className="font-mono">{formatCurrency(cartTotals.originalTotal, currency)}</span>
                    </div>
                    {cartTotals.savingsOnMRP > 0 && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Discount on MRP</span>
                        <span className="font-mono">- {formatCurrency(cartTotals.savingsOnMRP, currency)}</span>
                      </div>
                    )}
                    {appliedCoupon && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Coupon Savings ({appliedCoupon.code})</span>
                        <span className="font-mono">- {formatCurrency(cartTotals.couponDiscount, currency)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>Delivery Charges</span>
                      <span className="font-mono font-semibold">
                        {cartTotals.deliveryFee === 0 ? <span className="text-emerald-600">FREE</span> : formatCurrency(cartTotals.deliveryFee, currency)}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-sm text-slate-900">
                      <span>Total Amount</span>
                      <span className="font-mono text-base text-blue-600">{formatCurrency(cartTotals.finalAmount, currency)}</span>
                    </div>
                    {cartTotals.totalSavings > 0 && (
                      <div className="text-emerald-700 bg-emerald-50 p-2 rounded text-center font-bold text-[11px] border border-emerald-200">
                        🎉 You will save {formatCurrency(cartTotals.totalSavings, currency)} on this order!
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Cart Footer Checkout CTA */}
            {cart.length > 0 && (
              <div className="p-4 border-t border-slate-200 bg-white">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full btn-flipkart-buy py-3 rounded-lg font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <Icon name="zap" className="w-4 h-4" />
                  <span>Proceed to Checkout ({formatCurrency(cartTotals.finalAmount, currency)})</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 9. CHECKOUT SIMULATION MODAL */}
      {isCheckoutOpen && (
        <CheckoutModal
          cartTotals={cartTotals}
          cart={cart}
          currency={currency}
          deliveryLocation={deliveryLocation}
          onClose={() => setIsCheckoutOpen(false)}
          onSuccess={(newOrder) => {
            setOrders(prev => [newOrder, ...prev]);
            setCart([]);
            setAppliedCoupon(null);
            setIsCheckoutOpen(false);
            showToast("Order placed successfully! Check 'Orders' tab. 🎉", "success");
          }}
        />
      )}

      {/* 10. WISHLIST MODAL */}
      {isWishlistOpen && (
        <div className="modal-backdrop" onClick={() => setIsWishlistOpen(false)}>
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Icon name="heart-filled" className="w-5 h-5 text-red-500" />
                My Wishlist ({wishlist.length})
              </h2>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              {wishlist.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p className="text-sm">Your wishlist is currently empty.</p>
                </div>
              ) : (
                wishlist.map(id => {
                  const item = products.find(p => p.id === id);
                  if (!item) return null;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.title} className="w-14 h-14 object-contain rounded bg-white p-1" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{item.title}</h4>
                          <span className="text-xs font-mono font-bold text-blue-600">
                            {formatCurrency(item.price, currency)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            addToCart(item);
                            toggleWishlist(item.id);
                          }}
                          className="bg-[#ff9f00] text-slate-950 font-bold text-xs px-3 py-1.5 rounded shadow-xs"
                        >
                          Move to Cart
                        </button>
                        <button
                          onClick={() => toggleWishlist(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1"
                        >
                          <Icon name="trash" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* 11. MY ORDERS MODAL */}
      {isOrdersOpen && (
        <div className="modal-backdrop" onClick={() => setIsOrdersOpen(false)}>
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Icon name="bag" className="w-5 h-5 text-blue-600" />
                My Orders & Purchases ({orders.length})
              </h2>
              <button
                onClick={() => setIsOrdersOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p className="text-sm">You haven't placed any orders yet.</p>
                </div>
              ) : (
                orders.map(order => (
                  <div key={order.orderId} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex justify-between items-center text-xs border-b border-slate-200 pb-2">
                      <div>
                        <span className="font-bold text-slate-700">Order ID: </span>
                        <span className="font-mono text-blue-600 font-bold">{order.orderId}</span>
                      </div>
                      <span className="text-slate-500">{order.date}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-bold text-emerald-700">{order.status}</span>
                      </div>
                      <span className="font-bold font-mono text-slate-800">
                        Total: {formatCurrency(order.amount, currency)}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      {order.items.map(item => (
                        <div key={item.id} className="flex justify-between">
                          <span>• {item.title.slice(0, 35)}... (x{item.quantity})</span>
                          <span className="font-mono">{formatCurrency(item.price * item.quantity, currency)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-slate-500 bg-white p-2 rounded border border-slate-200">
                      <strong>Delivery to:</strong> {order.address.name}, {order.address.city} - {order.address.pincode}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* 12. LOCATION PINCODE MODAL */}
      {isLocationModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsLocationModalOpen(false)}>
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-base text-slate-800 mb-2">Choose your delivery location</h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter your city & pincode to see product availability and delivery speeds.
            </p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-medium mb-1">City</label>
                <input
                  type="text"
                  defaultValue={deliveryLocation.city}
                  id="locCity"
                  className="w-full px-3 py-2 border border-slate-300 rounded outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">Pincode</label>
                <input
                  type="text"
                  defaultValue={deliveryLocation.pincode}
                  id="locPin"
                  className="w-full px-3 py-2 border border-slate-300 rounded outline-none focus:border-blue-500 font-mono"
                />
              </div>
              <button
                onClick={() => {
                  const city = document.getElementById('locCity').value || "Mumbai";
                  const pincode = document.getElementById('locPin').value || "400001";
                  setDeliveryLocation({ city, pincode });
                  setIsLocationModalOpen(false);
                  showToast(`Location set to ${city} - ${pincode}`, "info");
                }}
                className="w-full bg-[#2874f0] text-white font-bold py-2.5 rounded-lg text-xs mt-2"
              >
                Apply Location
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13. FOOTER (Amazon / Flipkart Inspired) */}
      <footer className="bg-[#131921] text-slate-300 text-xs mt-12 border-t border-slate-800">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full py-3 bg-[#232f3e] hover:bg-slate-700 text-center text-xs font-bold text-slate-200 transition-colors"
        >
          Back to top ↑
        </button>

        <div className="max-w-[1400px] mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">About ShopKart</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Corporate Information</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Help & Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Payments</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white">Cancellation & Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Consumer Policy</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Security & Privacy</a></li>
              <li><a href="#" className="hover:text-white">EPR Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Social & Mail Us</h4>
            <p className="text-slate-400 leading-relaxed mb-3">
              ShopKart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
            <div className="flex gap-2">
              <span className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center font-bold text-white">f</span>
              <span className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center font-bold text-white">t</span>
              <span className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center font-bold text-white">in</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-[11px]">
          <p>© 2026 ShopKart. Inspired by Amazon & Flipkart. Designed with React & Tailwind CSS.</p>
        </div>
      </footer>

    </div>
  );
}

// --- Checkout Modal Component ---
function CheckoutModal({ cartTotals, cart, currency, deliveryLocation, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "Harshada Desai",
    phone: "9876543210",
    address: "Flat 402, Lotus Residency, Marine Drive",
    city: deliveryLocation.city || "Mumbai",
    state: "Maharashtra",
    pincode: deliveryLocation.pincode || "400001",
    paymentMethod: "upi"
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const order = {
        orderId: `SK-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: cart,
        amount: cartTotals.finalAmount,
        status: "Confirmed (Delivery in 2 Days)",
        address: formData,
        paymentMethod: formData.paymentMethod
      };
      setIsProcessing(false);
      onSuccess(order);
    }, 1500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>

        <h3 className="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2">
          <Icon name="shield" className="w-5 h-5 text-emerald-600" />
          Secure Checkout
        </h3>
        <p className="text-xs text-slate-500 mb-4">Complete your details to place your order</p>

        {/* Stepper Header */}
        <div className="flex items-center justify-between mb-6 text-xs font-bold border-b border-slate-200 pb-3">
          <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-blue-600' : 'text-emerald-600'}`}>
            <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">1</span>
            <span>Delivery Address</span>
          </div>
          <div className="w-8 h-0.5 bg-slate-200"></div>
          <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-blue-600' : 'text-slate-400'}`}>
            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">2</span>
            <span>Payment Method</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {step === 1 ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded outline-none font-mono"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-[#2874f0] text-white font-bold py-2.5 rounded-lg text-xs mt-3"
              >
                Continue to Payment →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-semibold text-slate-700 block mb-1">Select Payment Option</label>

                {[
                  { id: "upi", label: "Google Pay / PhonePe / UPI", desc: "Instant contactless payment" },
                  { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
                  { id: "cod", label: "Cash on Delivery (COD)", desc: "Pay cash at your doorstep" }
                ].map(opt => (
                  <label
                    key={opt.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.paymentMethod === opt.id ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === opt.id}
                      onChange={() => setFormData({ ...formData, paymentMethod: opt.id })}
                      className="mt-0.5 text-blue-600"
                    />
                    <div>
                      <div className="font-bold text-slate-800">{opt.label}</div>
                      <div className="text-[11px] text-slate-500">{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Order amount highlight */}
              <div className="p-3 bg-slate-100 rounded-lg flex justify-between items-center font-bold text-slate-800">
                <span>Total Payable:</span>
                <span className="font-mono text-base text-blue-600">
                  {formatCurrency(cartTotals.finalAmount, currency)}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-slate-200 text-slate-700 font-bold py-2.5 rounded-lg text-xs"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-2/3 btn-flipkart-buy py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 shadow"
                >
                  {isProcessing ? (
                    <span>Processing Payment...</span>
                  ) : (
                    <>
                      <Icon name="check" className="w-4 h-4" />
                      <span>Place Order ({formatCurrency(cartTotals.finalAmount, currency)})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

// Render the application to the root DOM node
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

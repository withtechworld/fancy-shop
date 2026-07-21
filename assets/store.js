/* Luxe & Active — shared product catalog + cart logic (localStorage-based demo, no backend) */

const PRODUCTS = [
  // ---- Sports ----
  { id:'sp-01', name:'Momentum Runner Trainers', cat:'sports', tag:'Footwear', price:89.00,
    img:'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    desc:'Lightweight everyday trainers built for tempo runs and long days on your feet. Breathable mesh upper, responsive cushioning, reinforced heel counter.' },
  { id:'sp-02', name:'Apex Grip Basketball', cat:'sports', tag:'Equipment', price:34.00,
    img:'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    desc:'Composite-leather match ball with a deep channel design for a locked-in grip and true bounce on indoor or outdoor courts.' },
  { id:'sp-03', name:'TrailBlaze Running Shoes', cat:'sports', tag:'Footwear', price:95.00,
    img:'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    desc:'Off-road trainers with an aggressive lug outsole and a rock-plate underfoot for confident grip on loose terrain.' },
  { id:'sp-04', name:'FlexCore Yoga Mat', cat:'sports', tag:'Equipment', price:42.00,
    img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
    desc:'Extra-thick non-slip mat with alignment guides, rolled with a carry strap. Free of harsh chemicals and easy to wipe clean.' },
  { id:'sp-05', name:'CourtLine Tennis Racket', cat:'sports', tag:'Equipment', price:120.00,
    img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    desc:'Mid-plus head racket balancing power and control, pre-strung and ready to play out of the box.' },
  { id:'sp-06', name:'StrikeForce Match Football', cat:'sports', tag:'Equipment', price:28.00,
    img:'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80',
    desc:'FIFA-spec size 5 match ball with a low-water-absorption shell for consistent flight in any weather.' },

  // ---- Fancy ----
  { id:'fa-01', name:'Meridian Automatic Watch', cat:'fancy', tag:'Watches', price:340.00,
    img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
    desc:'Swiss automatic movement housed in a brushed stainless case with a sapphire crystal and exhibition case-back.' },
  { id:'fa-02', name:'Aurora Statement Ring Set', cat:'fancy', tag:'Jewellery', price:78.00,
    img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80',
    desc:'A five-piece stacking set in warm gold vermeil, designed to mix and layer across any finger combination.' },
  { id:'fa-03', name:'Sienna Leather Tote', cat:'fancy', tag:'Bags', price:215.00,
    img:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    desc:'Full-grain leather tote with a structured base, internal organiser pockets, and a detachable shoulder strap.' },
  { id:'fa-04', name:'Noir Aviator Sunglasses', cat:'fancy', tag:'Eyewear', price:145.00,
    img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    desc:'Polarised aviators in a hand-polished titanium frame, cut to soften glare without dulling colour.' },
  { id:'fa-05', name:'Halcyon Dress Watch', cat:'fancy', tag:'Watches', price:410.00,
    img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    desc:'A slim-profile dress watch on a hand-stitched leather strap — understated, occasion-ready timekeeping.' },
  { id:'fa-06', name:'Velvet Bloom Eau de Parfum', cat:'fancy', tag:'Fragrance', price:96.00,
    img:'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80',
    desc:'A warm floral-amber signature scent, long-wearing from first spritz to evening close.' },

  // ---- Seasonal ----
  { id:'se-01', name:'Frostlight Holiday Ornament Set', cat:'seasonal', tag:'Winter', price:32.00,
    img:'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=80',
    desc:'A boxed set of twelve hand-finished glass ornaments in a frosted gold-and-ivory palette.' },
  { id:'se-02', name:'Winterglow Gift Hamper', cat:'seasonal', tag:'Gifts', price:58.00,
    img:'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=900&q=80',
    desc:'A curated hamper of seasonal treats and small luxuries, gift-wrapped and ready to send.' },
  { id:'se-03', name:'Harvest Spice Candle Trio', cat:'seasonal', tag:'Autumn', price:36.00,
    img:'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=900&q=80',
    desc:'Three soy-blend candles in warm spice, fig, and toasted oak — a full-season rotation in one box.' },
  { id:'se-04', name:'Solstice Beach Tote', cat:'seasonal', tag:'Summer', price:44.00,
    img:'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=900&q=80',
    desc:'A roomy woven tote lined for sand and salt water, built for long summer days by the coast.' },
  { id:'se-05', name:'Emberwood Wool Coat', cat:'seasonal', tag:'Winter', price:180.00,
    img:'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=900&q=80',
    desc:'A heavyweight wool-blend coat with a felted finish, cut for layering through the coldest months.' },
  { id:'se-06', name:'Bloom Season Table Runner', cat:'seasonal', tag:'Spring', price:29.00,
    img:'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=900&q=80',
    desc:'A linen-cotton table runner in a hand-blocked floral print, machine washable for everyday use.' },
];

const CART_KEY = 'la_cart';

function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  const line = cart.find(l=>l.id===id);
  if(line) line.qty += qty; else cart.push({ id, qty });
  saveCart(cart);
}
function removeFromCart(id){
  saveCart(getCart().filter(l=>l.id!==id));
}
function setQty(id, qty){
  const cart = getCart();
  const line = cart.find(l=>l.id===id);
  if(!line) return;
  if(qty <= 0){ removeFromCart(id); return; }
  line.qty = qty;
  saveCart(cart);
}
function clearCart(){ saveCart([]); }

function findProduct(id){ return PRODUCTS.find(p=>p.id===id); }
function byCategory(cat){ return (!cat || cat==='all') ? PRODUCTS : PRODUCTS.filter(p=>p.cat===cat); }

function cartLines(){
  return getCart().map(l=>{
    const p = findProduct(l.id);
    return p ? Object.assign({}, p, { qty:l.qty }) : null;
  }).filter(Boolean);
}
function cartCount(){ return getCart().reduce((n,l)=>n+l.qty,0); }
function cartSubtotal(){ return cartLines().reduce((s,l)=>s + l.price*l.qty, 0); }

const SHIPPING_FLAT = 4.95;
const FREE_SHIPPING_OVER = 75;
function shippingCost(subtotal){ return subtotal === 0 || subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FLAT; }

function money(n){ return '£' + n.toFixed(2); }

function updateCartBadge(){
  const n = cartCount();
  document.querySelectorAll('.cart-badge').forEach(b=>{
    b.textContent = n;
    b.style.display = n > 0 ? 'flex' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', updateCartBadge);

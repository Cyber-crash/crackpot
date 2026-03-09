// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Full Menu Data from Photos
const menuData = [
    // Appetizers
    { name: "Cilantro Chicken Ball", price: "260", type: "non-veg", category: "non-veg", desc: "Savoury chicken in spices wrapped in golden crust." },
    { name: "Mushroom Magic Bites", price: "180", type: "veg", category: "veg", desc: "Crispy mushrooms with a hint of chilli spice." },
    { name: "Dynamite Chicken Fries", price: "190", type: "non-veg", category: "non-veg", desc: "Crispy fries topped with cheesy chicken explosion." },
    { name: "Peri Peri Fever Fries", price: "140", type: "veg", category: "veg", desc: "Tangy, spicy, and irresistibly addictive fries." },
    
    // Sandwiches & Big Eats
    { name: "Veg Maharaja Club", price: "240", type: "veg", category: "veg", desc: "Triple-layered sandwich with veggies, cheese, and mayo." },
    { name: "Crackpot's Club", price: "300", type: "non-veg", category: "non-veg", desc: "Signature club sandwich with egg, chicken, and salami." },
    { name: "Chicken Cordon Bleu", price: "380", type: "non-veg", category: "non-veg", desc: "Classic breaded chicken stuffed with cheese and ham." },
    
    // Pizza & Pasta
    { name: "Exotic Veg Pizza", price: "300", type: "veg", category: "veg", desc: "Loaded with fresh veggies and premium cheese." },
    { name: "Bolognese Pasta", price: "280", type: "non-veg", category: "non-veg", desc: "Spaghetti in slow-cooked tomato meat sauce." },

    // Beverages
    { name: "Marshmallow Hot Chocolate", price: "200", type: "veg", category: "drinks", desc: "Rich chocolate topped with toasted marshmallows." },
    { name: "Irish Coffee", price: "170", type: "veg", category: "drinks", desc: "Premium bold coffee with a creamy finish." },
    { name: "Blue Lagoon Mocktail", price: "180", type: "veg", category: "drinks", desc: "A refreshing citrus-based blue mocktail." }
];

// Menu Filter Logic
function renderMenu(filter = 'all') {
    const grid = document.getElementById('full-menu-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);

    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="full-menu-item" data-aos="fade-up">
                <div class="diet-badge ${item.type}"></div>
                <div class="item-head">
                    <h3>${item.name}</h3>
                    <span class="item-price">₹${item.price}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
            </div>
        `;
    });
}

function filterMenu(category, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderMenu(category);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        nav.style.background = "rgba(18, 18, 18, 0.98)";
        nav.style.padding = "20px 8%; shadow: 0 10px 30px rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "30px 8%";
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
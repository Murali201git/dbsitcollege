const apiUrl = 'https://fakestoreapi.com/products';
const productList = document.getElementById('product-list');
const cartTotal = document.getElementById('cartTotal');
let cartCount = 0;

// Fetch products from API
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const products = await response.json();

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      `;

      productList.appendChild(productCard);
    });

  } catch (error) {
    console.error('Failed to load products:', error);
  }
}

// Add to cart function
function addToCart() {
  cartCount++;
  cartTotal.innerText = cartCount;
}

// Start
fetchProducts();

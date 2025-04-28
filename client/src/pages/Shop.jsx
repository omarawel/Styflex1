import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Fehler beim Laden der Produkte:', error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (category === '' || product.category === category)
  );

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = cart.length >= 3 ? Math.min(...cart.map(item => item.price)) : 0;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-cinzel text-gray-900">Beauty-Produkte für Düsseldorf</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Kaufe Premium-Produkte von Top-Marken. 3 kaufen, das günstigste gratis!
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Produkt oder Marke suchen"
            className="flex-1 p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
            aria-label="Produkt suchen"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
            aria-label="Produktkategorie auswählen"
          >
            <option value="">Alle Produkte</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Styling">Styling</option>
            <option value="Pflege">Pflege</option>
          </select>
        </div>
        {cart.length > 0 && (
          <div className="mb-8 bg-gray-50 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Warenkorb</h3>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>€{item.price.toFixed(2)}</span>
              </div>
            ))}
            {discount > 0 && (
              <p className="text-purple-600 font-medium mt-2">Rabatt: Günstigstes Produkt gratis (-€{discount.toFixed(2)})</p>
            )}
            <p className="text-lg font-bold mt-4">Gesamt: €{(cartTotal - discount).toFixed(2)}</p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition mt-4" aria-label="Zum Checkout">
              Zum Checkout
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;

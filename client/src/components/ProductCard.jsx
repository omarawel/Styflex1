import { motion } from 'framer-motion';

function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
    >
      <img
        src={product.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80'}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-2xl"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <p className="text-2xl font-bold text-purple-600 mb-4">€{product.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
          aria-label={`${product.name} in den Warenkorb legen`}
        >
          In den Warenkorb
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;

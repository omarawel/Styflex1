import { motion } from 'framer-motion';

function SalonCard({ salon, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
    >
      <img
        src={salon.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80'}
        alt={salon.name}
        className="w-full h-56 object-cover rounded-t-2xl"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{salon.name}</h3>
          <span className={`text-sm font-medium ${salon.badge === 'premium' ? 'text-gold-600' : 'text-purple-600'}`}>
            {salon.badge === 'premium' ? 'Premium' : 'Standard'}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{salon.location}</p>
        <p className="text-gray-600 mb-4">{salon.services.join(', ')}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-600 ml-2">({salon.rating}/5, {salon.reviews} Bewertungen)</span>
        </div>
        <button
          onClick={() => onBook(salon)}
          className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
          aria-label={`Termin bei ${salon.name} buchen`}
        >
          Jetzt buchen
        </button>
      </div>
    </motion.div>
  );
}

export default SalonCard;

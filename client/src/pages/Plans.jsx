import { motion } from 'framer-motion';

function Plans() {
  const plans = [
    {
      name: 'Basic',
      price: 19.99,
      features: ['1 Basic Service', 'Off-Peak Buchungen', '5% Rabatt auf Zusatzleistungen'],
    },
    {
      name: 'Premium',
      price: 39.99,
      features: ['2 Basic Services', 'Bevorzugte Zeiten', '10% Rabatt auf Zusatzleistungen'],
      highlighted: true,
    },
    {
      name: 'Pro',
      price: 59.99,
      features: ['3 Basic Services', 'Prioritätsbuchungen', '20% Rabatt auf Zusatzleistungen', 'Exklusive Events'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-cinzel text-gray-900">Unsere Abonnements</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Wähle dein perfektes Beauty-Abo für Düsseldorf.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition ${plan.highlighted ? 'border-2 border-gold-400' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">€{plan.price}/Monat</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className={`px-8 py-3 rounded-full hover:bg-${plan.highlighted ? 'gold-500' : 'purple-700'} transition ${plan.highlighted ? 'bg-gold-400 text-white' : 'bg-purple-600 text-white'}`}
                aria-label={`${plan.name}-Abonnement wählen`}
              >
                {plan.name} wählen
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;

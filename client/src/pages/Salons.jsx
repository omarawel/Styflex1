import { useState, useEffect } from 'react';
import axios from 'axios';
import SalonCard from '../components/SalonCard';
import BookingForm from '../components/BookingForm';

function Salons() {
  const [salons, setSalons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(null);

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const response = await axios.get('/api/salons');
        setSalons(response.data);
      } catch (error) {
        console.error('Fehler beim Laden der Salons:', error);
      }
    };
    fetchSalons();
  }, []);

  const filteredSalons = salons.filter(salon =>
    salon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (category === '' || salon.services.includes(category))
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-cinzel text-gray-900">Entdecke Düsseldorfs Top-Salons</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Finde die besten Friseure, Barbershops und Spas in Düsseldorf mit nur einem Klick.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Salon, Dienstleistung oder Stadtteil"
            className="flex-1 p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-white"
            aria-label="Salon suchen"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-white"
            aria-label="Kategorie auswählen"
          >
            <option value="">Alle Kategorien</option>
            <option value="Haarschnitt">Haarschnitt</option>
            <option value="Färben">Färben</option>
            <option value="Maniküre">Maniküre</option>
            <option value="Wellness">Wellness</option>
          </select>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition" aria-label="Salons suchen">
            Suchen
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredSalons.map(salon => (
            <SalonCard key={salon._id} salon={salon} onBook={setSelectedSalon} />
          ))}
        </div>
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.583434509374!2d6.7714!3d51.2277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEuMjI3N,6.7735!5e0!3m2!1sen!2sde!4v1634567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            aria-label="Karte mit Salon-Standorten in Düsseldorf"
          ></iframe>
        </div>
      </div>
      {selectedSalon && <BookingForm salon={selectedSalon} onClose={() => setSelectedSalon(null)} />}
    </section>
  );
}

export default Salons;

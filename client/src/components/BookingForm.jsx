import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function BookingForm({ salon, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
  });

  const services = salon.services || [];
  const dates = ['2025-05-01', '2025-05-02', '2025-05-03']; // Simulierte Daten
  const times = ['09:00', '10:00', '11:00', '12:00']; // Simulierte Daten

  const handleSubmit = async () => {
    try {
      await axios.post('/api/bookings', {
        salonId: salon._id,
        service: formData.service,
        date: formData.date,
        time: formData.time,
      });
      alert('Buchung erfolgreich!');
      onClose();
    } catch (error) {
      console.error('Buchungsfehler:', error);
      alert('Buchung fehlgeschlagen.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6">Buchung für {salon.name}</h2>
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              {s}
            </div>
          ))}
        </div>
        {step === 1 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Dienstleistung wählen</h3>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full p-3 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
              aria-label="Dienstleistung auswählen"
            >
              <option value="">Wähle eine Dienstleistung</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            <button
              onClick={() => formData.service && setStep(2)}
              className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition mt-4"
              aria-label="Weiter"
            >
              Weiter
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Datum wählen</h3>
            <select
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-3 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
              aria-label="Datum auswählen"
            >
              <option value="">Wähle ein Datum</option>
              {dates.map((date, index) => (
                <option key={index} value={date}>{date}</option>
              ))}
            </select>
            <button
              onClick={() => formData.date && setStep(3)}
              className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition mt-4"
              aria-label="Weiter"
            >
              Weiter
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Uhrzeit wählen</h3>
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full p-3 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
              aria-label="Uhrzeit auswählen"
            >
              <option value="">Wähle eine Uhrzeit</option>
              {times.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            <button
              onClick={formData.time && handleSubmit}
              className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition mt-4"
              aria-label="Buchung bestätigen"
            >
              Buchung bestätigen
            </button>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 text-purple-600 hover:underline"
          aria-label="Buchung abbrechen"
        >
          Abbrechen
        </button>
      </div>
    </motion.div>
  );
}

export default BookingForm;

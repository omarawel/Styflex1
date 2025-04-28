import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setStatus('Nachricht erfolgreich gesendet!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Fehler beim Senden der Nachricht.');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cinzel text-gray-900">Kontaktiere uns</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Fragen? Buchungen? Partnerschaften? Wir sind für dich da!
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Dein Name"
            className="w-full p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
            required
            aria-label="Dein Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Deine E-Mail"
            className="w-full p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50"
            required
            aria-label="Deine E-Mail-Adresse"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Deine Nachricht"
            className="w-full p-4 rounded-full border-none focus:ring-2 focus:ring-purple-600 bg-gray-50 h-32"
            required
            aria-label="Deine Nachricht"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition"
            aria-label="Nachricht senden"
          >
            Nachricht senden
          </button>
        </motion.form>
        {status && <p className="mt-4 text-lg text-purple-600">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;

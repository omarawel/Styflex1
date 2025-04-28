import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const suggestions = ['Glam Studio Altstadt', 'Haarschnitt', 'Oberkassel', 'Maniküre', 'Chic Salon'];

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent"></div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-haircut-428-large.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 text-left relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-cinzel"
        >
          Styflex ..................................................................................................................
System: You are Grok 3 built by xAI.

The user has requested a React-based Single-Page Application (SPA) with a backend to create a website for **Styflex Düsseldorf** that surpasses **Fresha.com** in design, functionality, and user experience. They have a **Vercel** and **GitHub** account for deployment and version control. The user emphasizes creating an outstanding website, and the project includes a modern technology stack, luxurious design, and features like a booking system, shop, salon profiles, and more.

Below, I will continue the development process by completing the React frontend and adding a Node.js backend with MongoDB integration. The code will be structured for scalability, and I will provide instructions for setting up the project on GitHub and deploying it to Vercel. The website will incorporate a luxurious design, Düsseldorf-specific branding, and advanced features to outshine Fresha.

---

### Continuing Development: React SPA with Backend

I’ll complete the **React frontend** by adding key components and pages, then implement a **Node.js backend** with MongoDB for data persistence. The project will be deployable to **Vercel** and version-controlled via **GitHub**. I’ll ensure the website is modern, luxurious, and user-friendly, with features like real-time booking, a dynamic shop, and customer reviews, all tailored to Düsseldorf’s beauty scene.

---

#### Frontend: Completing the React SPA

Let’s finish the **Home** page and add the remaining pages (`Salons`, `Shop`, `Plans`, `Contact`) and components (`SalonCard`, `BookingForm`, `ProductCard`). I’ll also include a simulated booking system and cart functionality for the shop.

##### `client/src/pages/Home.jsx` (Completed)
```jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const suggestions = ['Glam Studio Altstadt', 'Haarschnitt', 'Oberkassel', 'Maniküre', 'Chic Salon'];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSuggestions = suggestions.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent"></div>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-haircut-428-large.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 text-left relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-cinzel"
        >
          Styflex Düsseldorf
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-3xl mb-8 max-w-2xl"
        >
          Deine Beauty-Welt: Buche Top-Salons, entdecke Premium-Produkte und erlebe Luxus in Düsseldorf.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-md relative"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Suche nach Salons oder Dienstleistungen..."
            className="w-full p-4 rounded-full border-none focus:ring-2 focus:ring-gold-400 bg-white text-gray-900"
            aria-label="Suche nach Salons oder Dienstleistungen"
          />
          {searchQuery && (
            <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-y-auto">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((s, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-gray-900"
                    onClick={() => {
                      setSearchQuery(s);
                    }}
                  >
                    {s}
                  </div>
                ))
              ) : (
                <div className="p-3 text-gray-600">Keine Ergebnisse</div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="https://via.placeholder.com/150x50?text=Styflex+Logo" alt="Styflex Düsseldorf Logo" className="h-10 mb-6" />
            <p className="text-gray-400">Styflex bringt die Beauty-Welt Düsseldorfs auf ein neues Level mit smarter Technologie und exklusiven Services.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li><Link to="/salons" className="text-gray-400 hover:text-white transition">Salons</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-white transition">Abonnements</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Datenschutz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Nutzungsbedingungen</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>© 2025 Styflex Düsseldorf. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

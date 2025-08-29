import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo variant="white" className="mb-4" />
            <p className="opacity-90 mb-6">
              Solution complète adaptée aux besoins des hôtels, riads et maisons d'hôtes. +25 ans d'expérience dans le textile.
            </p>
            <div className="space-y-2 text-sm">
              <p>📍 Casablanca, Maroc</p>
              <p>📞 +212 6 63 47 03 02</p>
              <p>✉️ kenzamine.textile@gmail.com</p>
              <p className="font-semibold mt-2">Abdeslam CHRAIBI - Gérant</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Draps et Housses</li>
              <li>Linge de Bain</li>
              <li>Linge de Table</li>
              <li>Solutions Personnalisées</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Zones de Livraison</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Casablanca</li>
              <li>Rabat</li>
              <li>Marrakech</li>
              <li>Tout le Maroc</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm opacity-90 mb-4">
              Demandez votre devis gratuit dès maintenant
            </p>
            <div className="space-y-3">
              <a 
                href="https://forms.gle/VkPxe9QYZgNYv61v5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-block w-full text-center"
              >
                Demander un devis
              </a>
              <a 
                href="https://forms.gle/Ft2LRzvJwBXFfUgj7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white/20 transition-all inline-block w-full text-center"
              >
                RDV téléphonique
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 KENZAMINE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
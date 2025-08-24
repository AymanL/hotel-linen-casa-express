import deliveryImage from "@/assets/delivery-morocco.jpg";
import { Button } from "@/components/ui/button";

const Delivery = () => {
  const cities = [
    "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", 
    "Agadir", "Meknès", "Oujda", "Kenitra", "Tétouan"
  ];

  return (
    <section id="livraison" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Livraison Rapide
              <span className="block text-primary">Dans Tout le Maroc</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre réseau logistique couvre l'ensemble du territoire marocain pour vous garantir 
              une livraison rapide et sécurisée, où que vous soyez.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
                <div>
                  <h4 className="font-semibold mb-1">Commande en Ligne</h4>
                  <p className="text-muted-foreground text-sm">Passez votre commande facilement via notre site web</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
                <div>
                  <h4 className="font-semibold mb-1">Préparation Express</h4>
                  <p className="text-muted-foreground text-sm">Nos équipes préparent votre commande en moins de 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
                <div>
                  <h4 className="font-semibold mb-1">Livraison Sécurisée</h4>
                  <p className="text-muted-foreground text-sm">Réception de votre commande en parfait état</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mb-8">
              Calculer les frais de livraison
            </Button>

            <div>
              <h4 className="font-semibold mb-4">Villes desservies :</h4>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src={deliveryImage} 
              alt="Livraison KENZAMINE au Maroc"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
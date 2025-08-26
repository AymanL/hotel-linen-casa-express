import { Card, CardContent } from "@/components/ui/card";
import linenServiceImage from "@/assets/linen-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Draps et Housses",
      description: "Draps de qualité hôtelière, housses de couette et oreillers pour un confort optimal.",
      features: [
        "Coton 100% & Poly-coton premium", 
        "Percale et satin de qualité supérieure",
        "Confection sur mesure disponible",
        "Finitions standard ou logo personnalisé"
      ]
    },
    {
      title: "Couettes",
      description: "Couettes de qualité professionnelle pour un confort thermique optimal.",
      features: [
        "Garnissage hypoallergénique & fibres naturelles", 
        "Enveloppe coton percale ou microfibre",
        "Thermorégulation parfaite",
        "Confection avec logo brodé possible"
      ]
    },
    {
      title: "Linge de Bain",
      description: "Serviettes, peignoirs et tapis de bain d'une douceur exceptionnelle.",
      features: [
        "Éponge coton bouclée 100% & coton/bambou",
        "Grammages de 400 à 600 g/m²",
        "Absorption optimale et séchage rapide",
        "Broderie et personnalisation disponibles"
      ]
    },
    {
      title: "Linge de Table",
      description: "Nappes, serviettes de table et chemins de table élégants.",
      features: [
        "Lin, coton damassé & mélanges poly-coton",
        "Finitions ourlets standards ou sur mesure",
        "Traitement anti-taches disponible",
        "Broderie logo et personnalisation"
      ]
    },
    {
      title: "Confection Sur Mesure",
      description: "Service complet de confection personnalisée selon vos spécifications.",
      features: [
        "Création de prototypes et échantillons",
        "Large choix de tissus et finitions",
        "Logo brodé, tissé ou imprimé",
        "Adaptation aux normes hôtelières"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de linge d'hôtel pour répondre à tous vos besoins
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={linenServiceImage} 
              alt="Service de linge d'hôtel KENZAMINE"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
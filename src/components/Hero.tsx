import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel-linen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Linge d'Hôtel
          <span className="block text-accent">de Qualité Supérieure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          KENZAMINE, votre partenaire de confiance pour le linge d'hôtel au Maroc. 
          Expertise reconnue, prix compétitifs et livraison rapide dans tout le royaume.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Découvrir nos services
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
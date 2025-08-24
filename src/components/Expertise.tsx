const Expertise = () => {
  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "200+", label: "Hôtels partenaires" },
    { number: "99%", label: "Satisfaction client" },
    { number: "24h", label: "Livraison express" }
  ];

  const advantages = [
    {
      title: "Expertise Reconnue",
      description: "Plus de 15 ans d'expérience dans le secteur hôtelier marocain",
      icon: "🏆"
    },
    {
      title: "Qualité Garantie",
      description: "Produits certifiés et testés selon les standards internationaux",
      icon: "✨"
    },
    {
      title: "Prix Compétitifs",
      description: "Tarifs avantageux grâce à nos partenariats directs avec les fabricants",
      icon: "💰"
    },
    {
      title: "Service Personnalisé",
      description: "Solutions sur mesure adaptées aux besoins spécifiques de chaque établissement",
      icon: "🎯"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre Expertise</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Casablanca, leader du linge d'hôtel au Maroc
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="opacity-90 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
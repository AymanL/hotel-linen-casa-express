import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous serions ravis de vous présenter nos produits et notre accompagnement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                📞 Téléphone
              </CardTitle>
              <CardDescription>
                Contactez-nous directement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg">+212 6 63 47 03 02</p>
              <Button className="mt-4 w-full">
                Appeler maintenant
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                📧 Email
              </CardTitle>
              <CardDescription>
                Répondre à notre mail
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg">kenzamine.textile@gmail.com</p>
              <Button variant="outline" className="mt-4 w-full">
                Envoyer un email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                📝 Devis
              </CardTitle>
              <CardDescription>
                Formulaire de demande
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">Demande rapide et personnalisée</p>
              <Button className="w-full" size="lg" asChild>
                <a href="https://forms.office.com/e/t0VLte9Rm9" target="_blank" rel="noopener noreferrer">
                  Remplir le formulaire
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-bold text-lg mb-2">Abdeslam CHRAIBI</h3>
          <p className="text-muted-foreground">Gérant - KENZAMINE Casablanca</p>
          <p className="text-sm mt-2">Expertise depuis +35 ans dans le secteur</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
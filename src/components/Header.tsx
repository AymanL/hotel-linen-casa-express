import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import moroccoFlag from "@/assets/morocco-flag.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={moroccoFlag} 
              alt="Drapeau du Maroc"
              className="w-8 h-8 rounded-full shadow-sm"
            />
            <Logo />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="#livraison" className="text-muted-foreground hover:text-primary transition-colors">
              Livraison
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button className="hidden md:inline-flex">
            Demander un devis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
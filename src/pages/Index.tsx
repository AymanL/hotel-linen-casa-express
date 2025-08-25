import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Delivery from "@/components/Delivery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Expertise />
      <Delivery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

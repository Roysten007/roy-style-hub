import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reassurance from "@/components/Reassurance";
import Categories from "@/components/Categories";
import Catalogue from "@/components/Catalogue";
import PromoBanner from "@/components/PromoBanner";
import Events from "@/components/Events";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Reassurance />
      <Categories />
      <Catalogue />
      <PromoBanner />
      <Events />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

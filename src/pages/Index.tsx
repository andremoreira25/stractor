import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EquipmentSection from "@/components/EquipmentSection";
import ServicesSection from "@/components/ServicesSection";
import SeoServicesSection from "@/components/SeoServicesSection";
import RegionSection from "@/components/RegionSection";
import GallerySection from "@/components/GallerySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EquipmentSection />
        <ServicesSection />
        <SeoServicesSection />
        <RegionSection />
        <GallerySection />
        <DifferentialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

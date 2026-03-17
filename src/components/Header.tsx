import logo from "@/assets/logo-stractor.png";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-secondary sticky top-0 z-40">
      <div className="container-narrow flex items-center justify-between px-4 py-3">
        <a href="#" aria-label="Stractor - Início">
          <img src={logo} alt="Stractor" className="h-8 md:h-10" />
        </a>
        <a
          href="tel:+5531999625891"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-xs md:text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">(31) 99962-5891</span>
          <span className="sm:hidden">Contato</span>
        </a>
      </div>
    </header>
  );
}

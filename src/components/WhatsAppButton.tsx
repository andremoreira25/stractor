import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface Props {
  label?: string;
  className?: string;
  variant?: "primary" | "outline";
}

export default function WhatsAppButton({ label = "Solicitar orçamento no WhatsApp", className = "", variant = "primary" }: Props) {
  const base = "inline-flex items-center gap-2 font-heading font-bold rounded-lg transition-all duration-200 px-6 py-3 text-sm md:text-base";
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}

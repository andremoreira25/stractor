import { MapPin } from "lucide-react";

const cities = [
  "Conceição do Mato Dentro",
  "Dom Joaquim",
  "Alvorada de Minas",
  "Serro",
  "Congonhas do Norte",
  "Santana do Riacho",
  "Santo Antônio do Rio Abaixo",
  "Morro do Pilar",
];

export default function RegionSection() {
  return (
    <section id="regiao" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-black text-2xl md:text-3xl">Região Atendida</h2>
          <p className="max-w-2xl mx-auto text-secondary-foreground/80">
            Prestamos serviços de retroescavadeira e trator em Conceição do Mato Dentro e toda a região, atendendo propriedades rurais, obras urbanas e diversos tipos de serviços com máquinas pesadas.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {cities.map((c) => (
            <div key={c} className="flex items-center gap-2 bg-secondary-foreground/10 rounded-lg px-4 py-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Localização Stractor - Conceição do Mato Dentro"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60374.92!2d-43.44!3d-19.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa40e5b6dbb1b8d%3A0x9f0e4ef90e5e35ac!2sConceição+do+Mato+Dentro+-+MG!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

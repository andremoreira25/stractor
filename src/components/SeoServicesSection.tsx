const tags = [
  "Retroescavadeira para obras",
  "Retroescavadeira para fazendas",
  "Retroescavadeira para terraplanagem",
  "Retroescavadeira para abertura de valas",
  "Retroescavadeira para fossas",
  "Retroescavadeira para drenagem",
  "Trator para aração",
  "Trator para silagem",
  "Trator para roçagem",
  "Trator para cercamento",
  "Caminhão para transporte de materiais",
  "Caminhão basculante",
  "Escavadeira para obras",
  "Escavadeira para terraplanagem",
  "Serviços rurais com máquinas",
  "Locação de máquinas pesadas",
];

export default function SeoServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow text-center space-y-6">
        <h2 className="font-heading font-black text-2xl md:text-3xl">Atendemos Diversos Tipos de Serviços</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((t) => (
            <span key={t} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

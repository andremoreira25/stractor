import WhatsAppButton from "./WhatsAppButton";

export default function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow text-center space-y-6 max-w-2xl">
        <h2 className="font-heading font-black text-2xl md:text-3xl">Você precisa de serviços de Retroescavadeira ou Trator?

        </h2>
        <p className="text-secondary-foreground/80 text-lg">
          Entre em contato agora mesmo e solicite um orçamento.
        </p>
        <WhatsAppButton className="text-lg px-8 py-4" />
        <p className="text-secondary-foreground/60 text-lg">
          Telefone / WhatsApp: (31) 99962-5891
        </p>
      </div>
    </section>);

}
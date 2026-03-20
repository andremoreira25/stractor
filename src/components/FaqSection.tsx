import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto custa contratar os serviços?", a: "O valor depende do tipo de serviço, tempo de utilização e local do trabalho. Entre em contato pelo WhatsApp para receber um orçamento rápido." },
  { q: "Vocês atendem zona rural?", a: "Sim. Atendemos propriedades rurais e obras urbanas em Conceição do Mato Dentro, nos distritos e região." },
  { q: "Vocês oferecem outras máquinas além da Retroescavadeira e Trator?", a: "Sim. Podemos fornecer soluções completas com diferentes máquinas e equipamentos conforme a necessidade do serviço, garantindo mais praticidade para o cliente." },
  { q: "Quais serviços podem ser feitos com retroescavadeira?", a: "Terraplanagem, escavações, abertura de valas, fundações, limpeza de terrenos, abertura de estradas, drenagem e muito mais." },
  { q: "O operador da máquina está incluso?", a: "Sim. Os serviços são realizados com operador experiente, garantindo segurança e qualidade na execução." },
  { q: "Vocês fazem terraplanagem?", a: "Sim. Realizamos serviços completos de terraplanagem e nivelamento de terrenos, preparando a área para construções, estradas ou outras obras." },
  { q: "Vocês cobram deslocamento?", a: "O custo de deslocamento pode variar dependendo da distância, tipo de serviço e quantidade de trabalho. Em muitos casos conseguimos ajustar o valor. Entre em contato pelo WhatsApp para avaliarmos a sua necessidade." },
  { q: "Os implementos já estão incluídos no serviço do Trator?", a: "Sim. Já estão incluídos todos os implementos necessários para a realizar aração, gradeamento, abertura de sulcos, produção de silagem, distribuição de calcário, roçagem de pastagens e muito mais." },
  { q: "Vocês fazem serviços de limpeza de terreno?", a: "Sim. Realizamos limpeza de terrenos, remoção de mato, raízes e preparação da área para construção ou uso agrícola." },
  { q: "Quanto tempo demora para agendar um serviço?", a: "O prazo depende da agenda e do tipo de serviço. Entre em contato pelo WhatsApp para verificar disponibilidade e agendamento." },
  { q: "Vocês atendem nos distritos de Conceição do Mato Dentro?", a: "Sim. Atendemos Conceição do Mato Dentro e cidades próximas, como Dom Joaquim, Alvorada de Minas, Serro, Congonhas do Norte, Santana do Riacho e Morro do Pilar." },
];

export default function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container-narrow max-w-3xl space-y-8">
        <h2 className="font-heading font-black text-2xl md:text-3xl text-center">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="font-heading font-semibold text-sm text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

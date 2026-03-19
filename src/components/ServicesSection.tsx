import { Shovel, Mountain, Truck, Route, Building2, Trees, Wheat, TrendingDown, Sprout, Fence, Scissors } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const retroServices: ServiceCard[] = [
  { icon: Mountain, title: "Terraplanagem e nivelamento", desc: "Preparação completa do terreno para obras." },
  { icon: Shovel, title: "Abertura de valas, poços, piscinas, drenos e fossas", desc: "Escavação precisa para diversas aplicações, incluindo execução de sistemas completos de drenagem." },
  { icon: Truck, title: "Carregamento de materiais", desc: "Movimentação de terra, areia, brita, cascalho e minério." },
  { icon: Route, title: "Abertura e manutenção de estradas", desc: "Abertura, manutenção, recuperação de estradas e criação de bacias de contenção." },
  { icon: Building2, title: "Escavações e fundações", desc: "Preparação para sapatas, baldrames, muros e pilares." },
  { icon: Trees, title: "Limpeza de terreno", desc: "Remoção de mato, entulho e raízes." },
];

const tratorServices: ServiceCard[] = [
  { icon: Shovel, title: "Aração, gradeamento e abertura de sulcos", desc: "Preparo completo do solo para plantio." },
  { icon: Wheat, title: "Produção de silagem", desc: "Corte e compactação de milho e sorgo." },
  { icon: TrendingDown, title: "Curvas de nível", desc: "Proteção do solo contra erosão." },
  { icon: Sprout, title: "Distribuição de calcário e adubo", desc: "Correção e preparo do solo." },
  { icon: Fence, title: "Cercamento profissional", desc: "Perfuração para estacas e realização de cercamento." },
  { icon: Scissors, title: "Roçagem de pastagens e terrenos", desc: "Limpeza e controle de vegetação." },
];

function ServiceGrid({ title, services, accent }: { title: string; services: ServiceCard[]; accent?: boolean }) {
  return (
    <div className="space-y-8">
      <h2 className="font-heading font-black text-2xl md:text-3xl text-center">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className={`rounded-xl p-6 space-y-3 shadow-md border transition-shadow hover:shadow-lg ${accent ? "border-accent/20 bg-accent/5" : "border-border bg-card"}`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary-foreground"}`}>
              <s.icon className="w-6 h-6" style={accent ? undefined : { color: "hsl(var(--primary))" }} />
            </div>
            <h3 className="font-heading font-bold text-base">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-muted">
      <div className="container-narrow space-y-20">
        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Além da Retroescavadeira e Trator, oferecemos soluções completas com diferentes máquinas e equipamentos conforme a necessidade do seu serviço.
        </p>
        <ServiceGrid title="Serviços de Retroescavadeira" services={retroServices} />
        <ServiceGrid title="Serviços com Trator" services={tratorServices} />
      </div>
    </section>
  );
}

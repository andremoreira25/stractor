import { Clock, Shield, Wrench, MapPin, CalendarDays, Award } from "lucide-react";

const items = [
  { icon: Award, title: "Mais de 5 anos de experiência" },
  { icon: Clock, title: "Atendimento personalizado para cada tipo de serviço" },
  { icon: Wrench, title: "Soluções completas com máquinas e equipamentos" },
  { icon: Shield, title: "Serviços urbanos e rurais" },
  { icon: CalendarDays, title: "Locação por hora, diária ou conforme a sua demanda" },
  { icon: MapPin, title: "Atendimento em toda a região" },
];

export default function DifferentialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow space-y-10">
        <h2 className="font-heading font-black text-2xl md:text-3xl text-center">Por que escolher a Stractor?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d) => (
            <div key={d.title} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
              </div>
              <span className="font-heading font-semibold text-sm">{d.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

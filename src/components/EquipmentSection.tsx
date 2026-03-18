import retroImg from "@/assets/retro-416.png";
import tratorImg from "@/assets/trator-292.png";
import logoCat from "@/assets/logo-caterpillar.png";
import logoMassey from "@/assets/logo-massey.png";
import WhatsAppButton from "./WhatsAppButton";

const retro = {
  name: "Retroescavadeira Caterpillar 416",
  img: retroImg,
  logo: logoCat,
  desc: "Equipamento moderno que entrega alta potência, produtividade e precisão para sua obra.",
  items: ["Terraplanagem", "Escavações", "Abertura de valas", "Fundações", "Movimentação de materiais", "Manutenção e abertura de estradas"],
};

const trator = {
  name: "Trator Massey Ferguson",
  img: tratorImg,
  logo: logoMassey,
  desc: "Equipado com diversos implementos para a realização dos serviços que você necessitar.",
  items: ["Preparo de solo", "Silagem", "Roçagem", "Cercamento", "Curvas de nível", "Distribuição de calcário e adubo"],
};

function EquipCard({ data }: { data: typeof retro }) {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="bg-muted p-6 flex items-center justify-center min-h-[250px]">
        <img src={data.img} alt={data.name} className="max-h-64 object-contain drop-shadow-lg" loading="lazy" />
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <img src={data.logo} alt="" className="h-6 object-contain self-start" loading="lazy" />
        <h3 className="font-heading font-bold text-xl">{data.name}</h3>
        <p className="text-muted-foreground text-sm">{data.desc}</p>
        <ul className="grid grid-cols-2 gap-1 text-sm">
          {data.items.map((i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-primary font-bold mt-0.5">•</span> {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function EquipmentSection() {
  return (
    <section id="equipamentos" className="section-padding bg-background">
      <div className="container-narrow space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-heading font-black text-2xl md:text-3xl">Nossos Equipamentos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Máquinas profissionais para serviços urbanos e rurais em Conceição do Mato Dentro e região.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <EquipCard data={retro} />
          <EquipCard data={trator} />
        </div>
        <div className="text-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}

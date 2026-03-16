import heroImg from "@/assets/hero-machines.png";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  return (
    <section className="bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="container-narrow px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            Locação e Prestação de Serviços de{" "}
            <span className="text-primary">Retroescavadeira</span> e{" "}
            <span className="text-primary">Trator</span> em Conceição do Mato Dentro
          </h1>
          <p className="text-secondary-foreground/80 text-base md:text-lg max-w-xl">
            Serviços urbanos e rurais com equipamentos profissionais para sua obra ou propriedade.
          </p>
          <WhatsAppButton />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Retroescavadeira Caterpillar 416 e Trator Massey Ferguson 292 - Stractor"
            className="w-full max-w-lg drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

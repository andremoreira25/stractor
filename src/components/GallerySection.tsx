import { Camera } from "lucide-react";

export default function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-muted">
      <div className="container-narrow text-center space-y-6">
        <h2 className="font-heading font-black text-2xl md:text-3xl">Serviços Realizados</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Em breve, fotos dos nossos serviços realizados serão publicadas aqui.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-card rounded-xl aspect-square flex flex-col items-center justify-center gap-2 border border-border">
              <Camera className="w-8 h-8 text-muted-foreground/40" />
              <span className="text-xs text-muted-foreground/40">Em breve</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

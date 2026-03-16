import logoShort from "@/assets/logo-stractor-short.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoShort} alt="Stractor" className="h-10" />
        <p className="text-sm text-background/60 text-center">
          © {new Date().getFullYear()} Stractor — Conceição do Mato Dentro, MG. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

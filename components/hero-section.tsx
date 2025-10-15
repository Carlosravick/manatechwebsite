import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b1a9a]/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,26,154,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(91,26,154,0.1),transparent_50%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/10 backdrop-blur-sm px-5 py-2 shadow-lg shadow-primary/20 animate-pulse-glow">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Monitoramento em tempo real com IA</span>
          </div>

          <h1 className="mb-6 text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-foreground lg:text-7xl">
            Controle total do seu estoque com{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#5b1a9a] to-[#8b3ad9] opacity-30"></span>
              <span className="relative bg-gradient-to-r from-[#5b1a9a] to-[#8b3ad9] bg-clip-text text-transparent font-extrabold">
                inteligência artificial
              </span>
            </span>
          </h1>

          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl max-w-3xl mx-auto">
            O <span className="text-white">Detecta</span>
            <span className="text-[#FF8C00] font-bold">+</span> usa câmeras inteligentes e IA para detectar, contar e
            monitorar seus objetos automaticamente. Receba alertas instantâneos e tenha controle total via app mobile.

          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 gap-2 bg-gradient-to-r from-[#5b1a9a] to-[#7a2bc4] px-10 text-base font-semibold text-white hover:from-[#6b2aaa] hover:to-[#8a3bd4] shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 border border-primary/20"
            >
              Começar Agora
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 gap-2 px-10 text-base font-semibold bg-card/50 backdrop-blur-sm border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all hover:scale-105"
            >
              <Play className="h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          <div className="mt-20 animate-float-smooth">
            <div className="relative mx-auto max-w-5xl rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-3 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5b1a9a] to-[#8b3ad9] rounded-2xl blur-xl opacity-20"></div>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted ring-2 ring-primary/30">
                <img
                  src="/modern-dashboard-with-camera-feeds-and-inventory-m.jpg"
                  alt="Detecta+ Dashboard"

                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-background p-12 lg:p-20 shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground lg:text-5xl">
              Pronto para ter controle total do seu estoque?
            </h2>
            <p className="mb-10 text-pretty text-lg text-muted-foreground lg:text-xl">
              Junte-se a centenas de empresas que já reduziram perdas e aumentaram a eficiência com o Detectar+
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Começar Teste Grátis
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base bg-transparent border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
              >
                Falar com Especialista
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Sem cartão de crédito • Teste grátis por 14 dias • Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Instale as Câmeras",
      description:
        "Posicione as câmeras inteligentes nos pontos estratégicos do seu estoque. Nossa equipe ajuda na instalação.",
    },
    {
      number: "02",
      title: "Configure o Sistema",
      description: "Cadastre seus produtos e defina as regras de monitoramento através do app mobile ou painel web.",
    },
    {
      number: "03",
      title: "Monitore em Tempo Real",
      description: "Acompanhe entradas e saídas automaticamente. O sistema detecta e conta objetos continuamente.",
    },
    {
      number: "04",
      title: "Receba Alertas",
      description: "Seja notificado instantaneamente sobre faltas, excessos ou movimentações não autorizadas.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-card py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-card-foreground lg:text-5xl">
            Como funciona o <span className="text-white">Detecta</span>
            <span className="text-[#FF8C00] font-extrabold">+</span>

          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Implementação simples em 4 passos para revolucionar seu controle de estoque
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border bg-background">
              <CardContent className="p-6">
                <div className="mb-4 font-mono text-5xl font-bold text-primary/20">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-border lg:block" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

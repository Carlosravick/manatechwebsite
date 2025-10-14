import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "R$ 299",
      period: "/mês",
      description: "Ideal para pequenos negócios começando a automatizar",
      features: [
        "Até 3 câmeras",
        "Detecção de objetos básica",
        "Alertas por email",
        "App mobile",
        "Suporte por email",
        "Relatórios mensais",
      ],
      cta: "Começar agora",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "R$ 1.999",
      period: "/mês",
      description: "Para empresas que precisam de controle avançado",
      features: [
        "Até 10 câmeras",
        "Detecção avançada com IA",
        "Alertas em tempo real",
        "App mobile premium",
        "Suporte prioritário 24/7",
        "Relatórios personalizados",
        "Integração com ERP",
        "Dashboard analytics",
      ],
      cta: "Começar agora",
      highlighted: true,
    },
    {
      name: "Ultra",
      price: "R$ 14.999",
      period: "/mês",
      description: "Solução completa para grandes operações",
      features: [
        "Câmeras ilimitadas",
        "IA personalizada",
        "Sistema de alarme avançado",
        "App white-label",
        "Gerente de conta dedicado",
        "Relatórios em tempo real",
        "Integração completa",
        "API personalizada",
        "Treinamento da equipe",
        "SLA garantido",
      ],
      cta: "Começar agora",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="container relative mx-auto max-w-7xl z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider bg-[#5b1a9a] px-6 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              Planos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Escolha o plano ideal para <span className="text-[#5b1a9a]">seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Todos os planos incluem 14 dias de teste grátis. Sem compromisso, cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 flex flex-col transition-all duration-500 group ${
                plan.highlighted
                  ? "border-2 border-[#5b1a9a] shadow-lg bg-card hover:shadow-2xl hover:shadow-[#5b1a9a]/20 hover:-translate-y-2 hover:scale-[1.02]"
                  : "border border-border bg-card hover:border-[#5b1a9a] hover:shadow-xl hover:shadow-[#5b1a9a]/10 hover:-translate-y-2 hover:scale-[1.02]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5b1a9a] text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 transition-colors duration-300 ${plan.highlighted ? "text-[#5b1a9a]" : "group-hover:text-[#5b1a9a]"}`}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-bold transition-colors duration-300 ${plan.highlighted ? "text-[#5b1a9a]" : "group-hover:text-[#5b1a9a]"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 transition-all duration-300"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <Check className="w-5 h-5 text-[#5b1a9a] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#5b1a9a] hover:bg-[#6b2aaa] text-white hover:scale-105 hover:shadow-lg hover:shadow-[#5b1a9a]/50"
                    : "bg-card border-2 border-[#5b1a9a] text-foreground hover:bg-[#5b1a9a] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#5b1a9a]/50"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Todos os planos incluem atualizações gratuitas e sem taxas de instalação
        </p>
      </div>
    </section>
  )
}

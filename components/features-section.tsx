import { Camera, Bell, Smartphone, BarChart3, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Detecção Inteligente",
      description: "Câmeras com IA detectam e identificam objetos automaticamente com precisão superior a 99%.",
      gradient: "from-[#5b1a9a] to-[#7a2bc4]",
    },
    {
      icon: BarChart3,
      title: "Contagem Automática",
      description: "Sistema conta objetos em tempo real e atualiza o estoque instantaneamente.",
      gradient: "from-[#6b2aaa] to-[#8a3bd4]",
    },
    {
      icon: Bell,
      title: "Alertas Instantâneos",
      description: "Receba notificações imediatas quando objetos faltarem ou houver movimentação suspeita.",
      gradient: "from-[#7a2bc4] to-[#9a4be4]",
    },
    {
      icon: Smartphone,
      title: "App Mobile Completo",
      description: "Controle total via smartphone: monitore entradas, saídas e estoque de qualquer lugar.",
      gradient: "from-[#5b1a9a] to-[#7a2bc4]",
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção de dados com criptografia e backup automático na nuvem.",
      gradient: "from-[#6b2aaa] to-[#8a3bd4]",
    },
    {
      icon: Zap,
      title: "Integração Rápida",
      description: "Configure em minutos e integre com seus sistemas existentes via API.",
      gradient: "from-[#7a2bc4] to-[#9a4be4]",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/15 px-6 py-2.5 rounded-full border-2 border-primary/30 shadow-lg shadow-primary/20">
              Recursos
            </span>
          </div>
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground lg:text-5xl">
            Tecnologia que transforma seu{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#5b1a9a] to-[#8b3ad9] opacity-20"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#5b1a9a] to-[#8b3ad9] font-extrabold">
                controle de estoque
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Recursos avançados de IA para garantir que você nunca perca o controle do seu inventário
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-2 border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StatsSection() {
  const stats = [
    {
      value: "99.8%",
      label: "Precisão na detecção",
      description: "de objetos",
    },
    {
      value: "24/7",
      label: "Monitoramento",
      description: "contínuo",
    },
    {
      value: "<1s",
      label: "Tempo de resposta",
      description: "para alertas",
    },
    {
      value: "85%",
      label: "Redução de perdas",
      description: "em média",
    },
  ]

  return (
    <section className="border-y border-border/50 bg-gradient-to-b from-card/50 to-card py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-2 font-mono text-4xl font-bold text-primary lg:text-5xl transition-transform group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

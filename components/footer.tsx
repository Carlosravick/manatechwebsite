export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  <span className="text-white">MANA</span>
                  <span className="text-primary">TECH</span>
                </span>
              </div>
              <span className="mt-2 block text-lg font-semibold">
                <span className="text-white">Detecta</span>
                <span className="text-[#FF8C00]">+</span>
              </span>
            </div>
            {/* </CHANGE> */}

            <p className="text-sm text-muted-foreground">
              Controle inteligente de estoque com IA e monitoramento em tempo real.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-card-foreground">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Manatech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

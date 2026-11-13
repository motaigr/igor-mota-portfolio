import { Reveal } from '../Reveal'
import { SectionLabel } from '../SectionLabel'

const events = [
  { year: '2026', title: 'Forward Deployed Engineer na Os Guias', active: true },
  { year: '2026', title: 'Desenvolvimento de projetos próprios (Python/IA)', active: false },
  { year: '2025', title: 'Transição de carreira para Tecnologia', active: false },
  { year: '2022-2026', title: 'Experiência em áreas comerciais e financeiras', active: false },
]

export function About() {
  return (
    <section id="about" className="container max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <SectionLabel>Sobre Mim</SectionLabel>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
        <Reveal delay={100} className="md:col-span-7">
          <div className="prose prose-invert max-w-none font-mono text-sm leading-relaxed text-t-muted">
            <p className="mb-4">
              Sou um desenvolvedor baseado em <span className="text-t-text">Curitiba/PR</span>, com
              uma trajetória não convencional que me deu uma perspectiva única sobre o
              desenvolvimento de software.
            </p>
            <p className="mb-4">
              Comecei minha carreira em áreas comerciais e financeiras, lidando com sistemas
              corporativos como SAP, Salesforce e Pega. Foi ali que aprendi a enxergar onde o
              trabalho manual trava as equipes e quanto custa um processo mal resolvido.
            </p>
            <p>
              Hoje atuo como <span className="text-t-text">Forward Deployed Engineer</span> na Os
              Guias, perto de quem usa as soluções no dia a dia. Com Python, n8n e integrações com
              LLMs, desenvolvo automações e agentes de IA que tiram tarefas repetitivas das equipes
              e deixam as pessoas livres para o que realmente exige atenção humana.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="md:col-span-5">
          <div className="pl-6 border-l-[0.5px] border-t-border space-y-8 relative">
            {events.map((e, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full border-[0.5px] bg-t-bg ${
                    e.active
                      ? 'border-t-gold shadow-[0_0_8px_rgba(200,169,110,0.5)]'
                      : 'border-t-muted'
                  }`}
                />
                <div
                  className={`font-mono text-[11px] mb-1 ${e.active ? 'text-t-gold' : 'text-t-muted'}`}
                >
                  {e.year}
                </div>
                <div className={`text-sm ${e.active ? 'text-t-text font-medium' : 'text-t-muted'}`}>
                  {e.title}
                </div>
              </div>
            ))}

            {/* Gradient fade at the bottom of the line */}
            <div className="absolute bottom-[-10px] -left-[1px] w-[2px] h-12 bg-gradient-to-b from-t-border to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

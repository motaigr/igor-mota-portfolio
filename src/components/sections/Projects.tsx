import { Reveal } from '../Reveal'
import { SectionLabel } from '../SectionLabel'

type ProjectBase = {
  title: string
  tags: string[]
  icon: string
  color: string
  gridColor: string
}

/** Trabalho feito para uma empresa: sem link, código confidencial. */
type CorporateProject = ProjectBase & {
  type: 'corporate'
  company: string
  problem: string
  solution: string
  result: string
}

/** Projeto próprio: link opcional (fica sem link até ter um endereço público). */
type PersonalProject = ProjectBase & {
  type: 'personal'
  description: string
  status?: string
  link?: string
}

type Project = CorporateProject | PersonalProject

const projects: Project[] = [
  {
    type: 'corporate',
    title: 'Automações para Customer Success',
    company: 'Os Guias',
    problem: 'Equipe de CS sobrecarregada com tarefas repetitivas e atendimento inicial lento.',
    solution:
      'Fluxos de automação no n8n e Power Automate para apoiar a equipe de CS, e atendimento N1 automatizado no WhatsApp, fazendo triagem e respondendo às dúvidas mais comuns.',
    tags: ['n8n', 'Power Automate', 'WhatsApp', 'APIs'],
    result: 'Atendimento mais ágil e equipe focada nos casos que exigem atenção humana.',
    icon: '🤖',
    color: '#0D1117',
    gridColor: 'rgba(200, 169, 110, 0.1)',
  },
  {
    type: 'corporate',
    title: 'Automação de base de inadimplência',
    company: 'Gold Empresas',
    problem: 'Atualização manual e demorada da base de inadimplência.',
    solution:
      'Automação em Python que trata e consolida os dados, com interface simples e testes automatizados.',
    tags: ['Python', 'Pandas', 'Tkinter', 'Testes automatizados'],
    result: 'Em produção na empresa.',
    icon: '🗂️',
    color: '#0F0F1A',
    gridColor: 'rgba(200, 169, 110, 0.08)',
  },
  {
    type: 'corporate',
    title: 'Dashboard de vendas e comissões',
    company: 'Gold Empresas',
    problem: 'Cálculo e acompanhamento de vendas e comissões feito em planilhas manuais.',
    solution: 'Dashboard de BI com pipeline de dados para vendas e comissões.',
    tags: ['Python', 'Pandas', 'Streamlit', 'DuckDB'],
    result: 'Em produção na empresa.',
    icon: '📈',
    color: '#0A1A0A',
    gridColor: 'rgba(200, 169, 110, 0.08)',
  },
  {
    type: 'personal',
    title: 'Painel de Separação de Pedidos',
    description:
      'Painel kanban para a expedição de um pequeno e-commerce da Shopee e do Mercado Livre. Cada pedido vira um card (cliente, itens e SKU) que avança pelas etapas de separação com um toque no tablet, no lugar das etiquetas de papel. PWA em tempo real, deploy contínuo e cerca de 90 testes automatizados. Integração com o Olist ERP em desenvolvimento.',
    status: 'MVP funcional',
    tags: ['Python', 'FastAPI', 'SQLite', 'PWA', 'Docker', 'Pytest'],
    icon: '📦',
    color: '#09090F',
    gridColor: 'rgba(200, 169, 110, 0.05)',
    link: undefined, // preencher quando houver link público
  },
  {
    type: 'personal',
    title: 'Site Gimimo',
    description:
      'Site do e-commerce Gimimo (vinis e bótons), feito em HTML e CSS, com backend em Google Sheets + Apps Script.',
    tags: ['HTML', 'CSS', 'Google Sheets', 'Apps Script'],
    icon: '🌐',
    color: '#0D1117',
    gridColor: 'rgba(200, 169, 110, 0.1)',
    link: 'https://farol.gimimo.com.br',
  },
  {
    type: 'personal',
    title: 'Gimimo Relatórios',
    description:
      'Projeto de análise de dados em Python utilizando as bibliotecas Pandas e Glob para processamento de informações.',
    tags: ['Python', 'Pandas', 'Glob'],
    icon: '📊',
    color: '#09090F',
    gridColor: 'rgba(200, 169, 110, 0.05)',
    link: 'https://github.com/motaigr/gimimo_relatorios',
  },
  {
    type: 'personal',
    title: 'API Imóveis',
    description: 'API REST de alta performance para gestão e busca avançada de imóveis.',
    tags: ['Python', 'FastAPI'],
    icon: '🏠',
    color: '#0D1117',
    gridColor: 'rgba(200, 169, 110, 0.1)',
    link: 'https://github.com/motaigr/api-imoveis',
  },
]

const badgeClass =
  'px-2 py-1 rounded bg-t-gold/10 border-[0.5px] border-t-gold/20 text-t-gold font-mono text-[10px] uppercase'

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={badgeClass}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[10px] text-t-gold-dim uppercase tracking-wider mb-1">
        {label}
      </div>
      <p className="text-sm text-t-muted leading-relaxed font-mono">{children}</p>
    </div>
  )
}

function ProjectCard({ project: p }: { project: Project }) {
  const link = p.type === 'personal' ? p.link : undefined
  const interactive = Boolean(link)

  const content = (
    <>
      <div
        className="relative w-full h-48 shrink-0 overflow-hidden flex items-center justify-center border-b-[0.5px] border-t-border"
        style={{ backgroundColor: p.color }}
      >
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `linear-gradient(${p.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${p.gridColor} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            transform: 'perspective(400px) rotateX(60deg) scale(2.5)',
            transformOrigin: 'center top',
          }}
        />
        <div className="relative z-10 text-5xl filter drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
          {p.icon}
        </div>
      </div>

      {p.type === 'corporate' ? (
        <div className="p-6 flex-1 flex flex-col gap-4">
          <div className="font-mono text-[10px] text-t-muted uppercase tracking-wider">
            Projeto corporativo · código confidencial
          </div>
          <div>
            <h3 className="text-xl font-medium text-t-text">{p.title}</h3>
            <div className="font-mono text-[11px] text-t-gold mt-1">{p.company}</div>
          </div>
          <Field label="Problema">{p.problem}</Field>
          <Field label="Solução">{p.solution}</Field>
          <Tags tags={p.tags} />
          <div className="mt-auto pt-4 border-t-[0.5px] border-t-border">
            <Field label="Resultado">{p.result}</Field>
          </div>
        </div>
      ) : (
        <div className="p-6 flex-1 flex flex-col">
          {(p.status || p.tags.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {p.status && (
                <span className="px-2 py-1 rounded border-[0.5px] border-t-border text-t-muted font-mono text-[10px] uppercase">
                  {p.status}
                </span>
              )}
              {p.tags.map((tag) => (
                <span key={tag} className={badgeClass}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3
            className={`text-xl font-medium mb-2 text-t-text ${interactive ? 'group-hover:text-t-gold transition-colors' : ''}`}
          >
            {p.title}
          </h3>
          <p className="text-sm text-t-muted leading-relaxed font-mono mt-auto">{p.description}</p>
        </div>
      )}
    </>
  )

  const cardClass =
    'group rounded-xl bg-t-bg2 border-[0.5px] border-t-border overflow-hidden transition-all duration-200 h-full flex flex-col'

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClass} hover:border-t-gold/35 cursor-pointer`}
      >
        {content}
      </a>
    )
  }

  return <div className={cardClass}>{content}</div>
}

export function Projects() {
  return (
    <section id="work" className="container max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <SectionLabel>Projetos Selecionados</SectionLabel>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

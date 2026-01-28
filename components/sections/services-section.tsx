import Link from "next/link"
import {
  Brain,
  Heart,
  Users,
  Zap,
  Target,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Brain,
    title: "Ansiedade e estresse",
    description:
      "Aprenda a lidar com pensamentos acelerados e desenvolva estratégias para mais equilíbrio emocional.",
  },
  {
    icon: Heart,
    title: "Autoconfiança",
    description:
      "Fortaleça sua autoestima e desenvolva uma relação mais gentil e segura consigo mesma.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description:
      "Compreenda padrões relacionais e construa vínculos mais saudáveis e satisfatórios.",
  },
  {
    icon: Zap,
    title: "Estresse e burnout",
    description:
      "Identifique gatilhos e desenvolva recursos para uma vida mais equilibrada e sustentável.",
  },
  {
    icon: Target,
    title: "Performance esportiva",
    description:
      "Trabalhe aspectos mentais que impactam seu desempenho e conquiste seus objetivos no esporte.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description:
      "Descubra mais sobre você, seus valores e construa uma vida com mais propósito e clareza.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Como posso te ajudar
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Cada pessoa é única. A terapia é um espaço para você encontrar seus
            próprios caminhos com apoio profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border-soft bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand">
                <service.icon className="h-6 w-6 text-clay" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <Button
                asChild
                variant="link"
                className="mt-4 h-auto p-0 text-teal hover:text-teal/80"
              >
                <Link href="/contato">Quero conversar</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

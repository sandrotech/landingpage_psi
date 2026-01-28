import Image from "next/image"
import Link from "next/link"
import { Target, Brain, Flame, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Target,
    title: "Foco e concentração",
    description: "Desenvolva a capacidade de manter o foco sob pressão.",
  },
  {
    icon: Brain,
    title: "Gestão emocional",
    description: "Aprenda a lidar com ansiedade e expectativas no esporte.",
  },
  {
    icon: Flame,
    title: "Motivação",
    description: "Reconecte-se com seu propósito e mantenha a consistência.",
  },
]

export function SportsSection() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-teal/10 px-4 py-1 text-sm font-medium text-teal">
              Psicologia Esportiva
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Performance começa na mente
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              A psicologia esportiva trabalha os aspectos mentais e emocionais que
              impactam diretamente seu desempenho. Não é sobre ser mais forte, é
              sobre ser mais inteiro.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                    <benefit.icon className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{benefit.title}</h3>
                    <p className="text-sm text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="mt-8 bg-cta-orange text-white hover:bg-cta-hover"
            >
              <Link href="/contato" className="flex items-center gap-2">
                Quero saber mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-beige/50" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/karol-sports.jpeg"
                alt="Karol Abreu - Psicóloga Esportiva"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

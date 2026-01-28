import { Ear, Lightbulb, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Ear,
    title: "Acolhimento e entendimento",
    description:
      "No primeiro momento, o mais importante é você se sentir à vontade. Vamos entender juntos o que te trouxe até aqui e o que você busca.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Clareza e recursos",
    description:
      "Gradualmente, vamos construir clareza sobre suas questões e desenvolver recursos e estratégias que façam sentido para você.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Evolução e acompanhamento",
    description:
      "O processo terapêutico é contínuo. Acompanho sua evolução e ajustamos o caminho conforme suas necessidades vão mudando.",
  },
]

export function StepsSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Um processo pensado para você, com respeito ao seu ritmo e às suas
            necessidades.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full -translate-x-1/2 bg-border-soft lg:block" />
              )}

              <div className="relative rounded-2xl border border-border-soft bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sand">
                  <step.icon className="h-8 w-8 text-clay" />
                </div>
                <span className="mt-4 block font-serif text-sm font-medium text-ochre">
                  Passo {step.number}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

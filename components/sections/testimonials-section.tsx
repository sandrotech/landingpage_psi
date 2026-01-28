import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "A Karol me ajudou a entender padrões que eu repetia sem perceber. Hoje me sinto muito mais no controle da minha vida e das minhas escolhas.",
    author: "M.",
  },
  {
    quote:
      "Sempre tive medo de terapia, mas o acolhimento dela me fez sentir segura desde a primeira sessão. Recomendo muito.",
    author: "A.",
  },
  {
    quote:
      "O trabalho com psicologia esportiva transformou minha relação com a competição. Antes eu travava, agora consigo render o meu melhor.",
    author: "R.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            O que dizem sobre o atendimento
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Cada jornada é única, mas o cuidado é o mesmo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border-soft bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-ochre/40" />
              <blockquote className="mt-4">
                <p className="text-base leading-relaxed text-text-secondary">
                  {'"'}{testimonial.quote}{'"'}
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sand" />
                <span className="font-medium text-navy">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <p className="mt-8 text-center text-xs text-text-secondary/60">
          Depoimentos compartilhados com autorização. Nomes abreviados para
          preservar a privacidade.
        </p>
      </div>
    </section>
  )
}

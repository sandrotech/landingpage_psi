import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Brain,
  Target,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Atendimentos | Karol Abreu - Psicóloga Clínica e Esportiva",
  description:
    "Conheça os serviços de psicoterapia individual e psicologia esportiva. Atendimento humanizado, online e presencial.",
}

const services = [
  {
    icon: Brain,
    title: "Psicoterapia Individual",
    description:
      "Atendimento personalizado para questões emocionais, comportamentais e relacionais. Um espaço seguro para autoconhecimento e desenvolvimento pessoal.",
    benefits: [
      "Ansiedade e estresse",
      "Autoestima e autoconfiança",
      "Relacionamentos",
      "Luto e perdas",
      "Transições de vida",
      "Autoconhecimento",
    ],
    process: [
      "Sessão inicial de acolhimento e entendimento",
      "Definição de objetivos terapêuticos juntos",
      "Sessões semanais ou quinzenais",
      "Acompanhamento do processo e ajustes",
    ],
  },
  {
    icon: Target,
    title: "Psicologia Esportiva",
    description:
      "Trabalho focado nos aspectos mentais e emocionais que impactam a performance. Para atletas amadores e profissionais que buscam alcançar seu potencial.",
    benefits: [
      "Foco e concentração",
      "Gestão da ansiedade competitiva",
      "Motivação e consistência",
      "Recuperação pós-lesão",
      "Preparação mental para competições",
      "Lidar com pressão e expectativas",
    ],
    process: [
      "Avaliação inicial e mapeamento de demandas",
      "Definição de metas de performance mental",
      "Sessões com técnicas específicas para esporte",
      "Acompanhamento integrado com equipe técnica (se aplicável)",
    ],
  },
  {
    icon: Users,
    title: "Acompanhamento e Mentoria",
    description:
      "Programa de acompanhamento para quem busca um processo mais estruturado de desenvolvimento pessoal e profissional.",
    benefits: [
      "Definição de metas claras",
      "Acompanhamento semanal",
      "Ferramentas práticas",
      "Desenvolvimento de habilidades",
      "Clareza de propósito",
      "Tomada de decisões",
    ],
    process: [
      "Sessão de mapeamento de objetivos",
      "Plano de desenvolvimento personalizado",
      "Encontros semanais de acompanhamento",
      "Avaliação periódica de progresso",
    ],
  },
]

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e entendimento. Vamos conversar sobre o que te trouxe até aqui, suas expectativas e como a terapia pode te ajudar. É um espaço livre de julgamentos para você se sentir à vontade.",
  },
  {
    question: "Qual a duração das sessões?",
    answer:
      "As sessões têm duração de 50 minutos, tanto para atendimentos online quanto presenciais. Esse tempo permite um trabalho aprofundado e respeitoso.",
  },
  {
    question: "Atende online ou presencial?",
    answer:
      "Atendo nas duas modalidades. O atendimento online acontece por videochamada em plataforma segura. O presencial é realizado no consultório. Ambas as modalidades são igualmente efetivas.",
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer:
      "A frequência mais comum é semanal, especialmente no início do processo. Conforme avançamos, podemos ajustar para quinzenal ou conforme sua necessidade. Conversaremos sobre isso juntos.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito antes da sessão, por transferência bancária ou PIX. Os valores são informados na primeira conversa. Não trabalho com convênios no momento.",
  },
  {
    question: "E se eu precisar cancelar uma sessão?",
    answer:
      "Peço que avise com pelo menos 24 horas de antecedência para cancelamentos ou remarcações. Assim conseguimos reorganizar a agenda de forma respeitosa para ambos.",
  },
  {
    question: "Preciso ter um problema grave para fazer terapia?",
    answer:
      "Não. A terapia é para qualquer pessoa que deseje se conhecer melhor, desenvolver recursos emocionais ou lidar com desafios do cotidiano. Não é preciso estar em crise para buscar ajuda.",
  },
  {
    question: "Como sei se a terapia está funcionando?",
    answer:
      "Ao longo do processo, faremos avaliações periódicas juntos. Você perceberá mudanças na forma de se relacionar consigo e com o mundo, na clareza sobre suas questões e na capacidade de lidar com desafios.",
  },
]

export default function AtendimentosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
                Atendimentos
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Conheça os diferentes tipos de atendimento que ofereço. Cada
                modalidade é pensada para atender necessidades específicas, sempre
                com acolhimento e profissionalismo.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-sand py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream">
                      <service.icon className="h-7 w-7 text-clay" />
                    </div>
                    <h2 className="mt-6 font-serif text-3xl font-semibold text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mt-8">
                      <h3 className="font-semibold text-navy">
                        Principais demandas:
                      </h3>
                      <ul className="mt-4 grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm text-text-secondary"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="mt-8 bg-cta-orange text-white hover:bg-cta-hover"
                    >
                      <Link href="/contato" className="flex items-center gap-2">
                        Agendar {service.title.toLowerCase()}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Process */}
                  <div className="rounded-2xl border border-border-soft bg-card p-6 shadow-sm lg:p-8">
                    <h3 className="font-serif text-xl font-semibold text-navy">
                      Como funciona
                    </h3>
                    <ol className="mt-6 space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <li key={step} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand font-serif text-sm font-semibold text-clay">
                            {stepIndex + 1}
                          </span>
                          <p className="pt-1 text-text-secondary">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-sand/50" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/karol-office.jpeg"
                    alt="Consultório de psicologia"
                    width={600}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Um espaço pensado para o seu bem-estar
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                  Seja no consultório ou através do atendimento online, meu
                  objetivo é criar um ambiente acolhedor e seguro, onde você possa
                  se sentir à vontade para explorar suas questões.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  O mais importante é que você se sinta confortável e confiante
                  para iniciar essa jornada de autoconhecimento.
                </p>
                <Button
                  asChild
                  className="mt-8 bg-cta-orange text-white hover:bg-cta-hover"
                >
                  <Link href="/contato" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Agendar sessão
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-sand py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Tire suas dúvidas sobre o atendimento psicológico.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl border border-border-soft bg-card px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Shield,
  Clock,
  Award,
  MapPin,
  GraduationCap,
  Calendar,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre | Karol Abreu - Psicóloga Clínica e Esportiva",
  description:
    "Conheça a Karol Abreu, psicóloga clínica e esportiva. Saiba mais sobre minha formação, abordagem e valores no atendimento psicológico.",
}

const values = [
  {
    icon: Heart,
    title: "Acolhimento",
    description:
      "Escuta atenta e respeitosa, criando um espaço onde você pode se sentir seguro para explorar suas questões.",
  },
  {
    icon: Shield,
    title: "Ética e sigilo",
    description:
      "Compromisso absoluto com o sigilo profissional e os princípios éticos da psicologia.",
  },
  {
    icon: Clock,
    title: "Respeito ao seu tempo",
    description:
      "Cada pessoa tem seu próprio ritmo. O processo terapêutico respeita sua singularidade.",
  },
]

const credentials = [
  "Graduação em Psicologia",
  "Especialização em Psicologia Clínica",
  "Formação em Psicologia Esportiva",
  "Cursos de aprimoramento contínuo",
]

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream pt-28 pb-16 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-sand/50" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/karol-sofa.jpeg"
                    alt="Karol Abreu - Psicóloga Clínica e Esportiva"
                    width={600}
                    height={600}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block rounded-full bg-ochre/20 px-4 py-1 text-sm font-medium text-clay">
                  Sobre mim
                </span>
                <h1 className="mt-4 font-serif text-4xl font-semibold text-navy sm:text-5xl">
                  Prazer, sou a Karol
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                  Sou psicóloga clínica e esportiva, e meu maior propósito é criar
                  um espaço onde você possa se escutar, se compreender e
                  desenvolver seus recursos internos.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  Acredito que a psicoterapia é um processo de construção
                  colaborativa, onde juntos exploramos suas questões, buscamos
                  clareza e trabalhamos para que você alcance mais equilíbrio e
                  bem-estar.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                  Minha abordagem combina rigor técnico com sensibilidade humana,
                  sempre respeitando sua singularidade e seu tempo.
                </p>

                {/* Credentials */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Award className="h-4 w-4 text-teal" />
                    <span>CRP: 00/00000</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <MapPin className="h-4 w-4 text-teal" />
                    <span>Cidade, Estado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-sand py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                Meus valores
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Princípios que guiam minha prática profissional e minha relação
                com cada pessoa que atendo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border-soft bg-card p-8 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sand">
                    <value.icon className="h-7 w-7 text-clay" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-block rounded-full bg-teal/10 px-4 py-1 text-sm font-medium text-teal">
                  Formação
                </span>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl">
                  Estudo contínuo para oferecer o melhor atendimento
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                  A psicologia é uma ciência em constante evolução. Me mantenho
                  atualizada através de cursos, supervisões e estudos para
                  oferecer um atendimento cada vez mais qualificado.
                </p>

                <ul className="mt-8 space-y-4">
                  {credentials.map((credential) => (
                    <li key={credential} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal/10">
                        <GraduationCap className="h-3 w-3 text-teal" />
                      </div>
                      <span className="text-text-secondary">{credential}</span>
                    </li>
                  ))}
                </ul>

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

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-beige/50" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/karol-cards.jpeg"
                    alt="Ferramentas de trabalho terapêutico"
                    width={600}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

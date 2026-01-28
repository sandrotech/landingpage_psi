import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Calendar, Shield, Heart, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: Heart, label: "Atendimento humanizado" },
  { icon: Shield, label: "Sigilo e ética" },
  { icon: Video, label: "Online e presencial" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-20">
      {/* Subtle organic shape */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sand/50 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-beige/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up opacity-0">
              <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
                Terapia com acolhimento, clareza e presença.
              </h1>
            </div>

            <div className="animate-fade-up opacity-0 animation-delay-100">
              <p className="mt-6 text-pretty text-lg leading-relaxed text-text-secondary sm:text-xl">
                Psicologia Clínica e Esportiva. Um espaço seguro para você se
                escutar, se reorganizar e desenvolver seus recursos internos.
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up mt-8 flex flex-col gap-4 opacity-0 animation-delay-200 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-cta-orange text-white hover:bg-cta-hover"
              >
                <Link href="/contato" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Agendar sessão
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy bg-transparent text-navy hover:bg-navy hover:text-white"
              >
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-up mt-10 flex flex-wrap gap-3 opacity-0 animation-delay-300">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-full bg-sand/70 px-4 py-2 text-sm text-text-secondary"
                >
                  <badge.icon className="h-4 w-4 text-teal" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in order-1 opacity-0 animation-delay-200 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-sand/50" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/karol-hero.jpeg"
                  alt="Karol Abreu - Psicóloga Clínica e Esportiva"
                  width={600}
                  height={750}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

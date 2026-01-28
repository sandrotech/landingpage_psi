import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-beige/50" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/karol-office.jpeg"
                alt="Karol Abreu em seu consultório"
                width={600}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-ochre/20 px-4 py-1 text-sm font-medium text-clay">
              Sobre mim
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Prazer, sou a Karol
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Sou psicóloga clínica e esportiva, apaixonada por ajudar pessoas a
              se compreenderem melhor e desenvolverem seus recursos internos. Meu
              trabalho é criar um espaço de escuta atenta e acolhedora, onde você
              pode se sentir à vontade para explorar suas questões.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Acredito em uma abordagem que combina profundidade teórica com
              sensibilidade humana, respeitando sempre o seu tempo e o seu
              processo.
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

            <Button
              asChild
              className="mt-8 bg-cta-orange text-white hover:bg-cta-hover"
            >
              <Link href="/sobre" className="flex items-center gap-2">
                Conhecer minha abordagem
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

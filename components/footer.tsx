import Link from "next/link"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-white">
                Karol Abreu
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              Psicóloga Clínica e Esportiva. Ofereço um espaço de escuta
              acolhedora e profissional para você se compreender melhor e
              desenvolver seus recursos internos.
            </p>
            <p className="mt-4 text-sm text-white/60">
              CRP: 00/00000 {/* Editável */}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Navegação</h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Sobre
              </Link>
              <Link
                href="/atendimentos"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Atendimentos
              </Link>
              <Link
                href="/contato"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Contato</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Cidade, Estado {/* Editável */}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Karol Abreu. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-white/60">
              Atendimento online e presencial
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

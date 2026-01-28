"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Send,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react"

const serviceTypes = [
  { value: "individual", label: "Psicoterapia Individual" },
  { value: "esportiva", label: "Psicologia Esportiva" },
  { value: "mentoria", label: "Acompanhamento/Mentoria" },
  { value: "outro", label: "Outro" },
]

const modalidades = [
  { value: "online", label: "Online" },
  { value: "presencial", label: "Presencial" },
  { value: "ambos", label: "Tanto faz" },
]

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    serviceType: "",
    modalidade: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceLabel =
      serviceTypes.find((s) => s.value === formData.serviceType)?.label || ""
    const modalidadeLabel =
      modalidades.find((m) => m.value === formData.modalidade)?.label || ""

    const whatsappMessage = `Olá! Meu nome é ${formData.name}.

Tenho interesse em: ${serviceLabel}
Preferência de atendimento: ${modalidadeLabel}

${formData.message ? `Mensagem: ${formData.message}` : ""}

Aguardo seu retorno!`

    window.open(
      `https://wa.me/5500000000000?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-cream pt-28 pb-16">
          <div className="mx-auto max-w-xl px-4 text-center">
            <div className="rounded-2xl border border-border-soft bg-card p-8 shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                <CheckCircle2 className="h-8 w-8 text-teal" />
              </div>
              <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
                Mensagem enviada!
              </h1>
              <p className="mt-4 text-text-secondary">
                Obrigada pelo contato! Retornarei em até 24 horas úteis.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-cta-orange text-white hover:bg-cta-hover"
              >
                Enviar nova mensagem
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
              Vamos conversar?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              O primeiro passo é sempre o mais importante. Preencha o formulário
              abaixo ou me chame diretamente no WhatsApp.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border-soft bg-card p-6 shadow-sm sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-navy">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1.5 border-border-soft bg-cream/50 focus:border-cta-orange"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="whatsapp" className="text-navy">
                        WhatsApp
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        className="mt-1.5 border-border-soft bg-cream/50 focus:border-cta-orange"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="serviceType" className="text-navy">
                        Tipo de atendimento
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, serviceType: value })
                        }
                      >
                        <SelectTrigger className="mt-1.5 border-border-soft bg-cream/50 focus:ring-cta-orange">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="modalidade" className="text-navy">
                        Preferência
                      </Label>
                      <Select
                        value={formData.modalidade}
                        onValueChange={(value) =>
                          setFormData({ ...formData, modalidade: value })
                        }
                      >
                        <SelectTrigger className="mt-1.5 border-border-soft bg-cream/50 focus:ring-cta-orange">
                          <SelectValue placeholder="Online ou presencial" />
                        </SelectTrigger>
                        <SelectContent>
                          {modalidades.map((mod) => (
                            <SelectItem key={mod.value} value={mod.value}>
                              {mod.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-navy">
                      Mensagem (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Conte um pouco sobre o que te trouxe aqui..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="mt-1.5 border-border-soft bg-cream/50 focus:border-cta-orange"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cta-orange text-white hover:bg-cta-hover"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="rounded-2xl border border-border-soft bg-card p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    Prefere conversar direto?
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Me chame no WhatsApp para tirar dúvidas ou agendar.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full border-navy bg-transparent text-navy hover:bg-navy hover:text-white"
                  >
                    <a
                      href="https://wa.me/5500000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Location */}
                <div className="rounded-2xl border border-border-soft bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand">
                      <MapPin className="h-5 w-5 text-clay" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Localização</h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        Cidade, Estado
                        <br />
                        {/* Endereço editável */}
                        Atendimento presencial com hora marcada.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="rounded-2xl border border-border-soft bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand">
                      <Clock className="h-5 w-5 text-clay" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        Tempo de resposta
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        Retorno em até 24 horas úteis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="rounded-xl bg-sand/50 p-4">
                  <p className="text-sm text-text-secondary">
                    Todas as informações compartilhadas são tratadas com total
                    sigilo e confidencialidade, seguindo o código de ética
                    profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

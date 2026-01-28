"use client"

import React from "react"

import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message} Melhor horário: ${formData.time}`
    window.open(
      `https://wa.me/5500000000000?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )
  }

  return (
    <section className="relative bg-navy py-16 lg:py-24">
      {/* Subtle glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cta-orange/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              O primeiro passo é o mais importante. Preencha o formulário ou me
              chame diretamente no WhatsApp. Estou aqui para te ouvir.
            </p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
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

          {/* Form */}
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-white/90">
                  Nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-cta-orange"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-white/90">
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
                  className="mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-cta-orange"
                  required
                />
              </div>

              <div>
                <Label htmlFor="time" className="text-white/90">
                  Melhor horário para contato
                </Label>
                <Input
                  id="time"
                  type="text"
                  placeholder="Ex: Manhã, Tarde, Noite"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-cta-orange"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white/90">
                  Mensagem (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte um pouco sobre o que te trouxe aqui..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-cta-orange"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-cta-orange text-white hover:bg-cta-hover"
              >
                <Send className="mr-2 h-5 w-5" />
                Agendar agora
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

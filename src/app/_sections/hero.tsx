"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { LetteringLogo } from "../../components/icons/lettering-logo";
import { submitEmailToHubSpot } from "../../lib/hubspot";
import { trackLeadSubmission } from "../../lib/analytics";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("❌ Por favor, digite seu e-mail");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Enviar para HubSpot
      const result = await submitEmailToHubSpot(email, "hero_form");

      if (result.success) {
        // Enviar evento para Google Analytics
        trackLeadSubmission("hero_form");

        setMessage("✅ Acesso solicitado com sucesso! Verifique seu e-mail.");
        setEmail("");
      } else {
        setMessage("❌ Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no formulário:", error);
      setMessage("❌ Erro ao enviar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex-1 py-48 flex flex-col items-center justify-center px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Main Heading */}
        <div className="space-y-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-freakmode-navy leading-tight font-hagrid">
            Sua nova maneira de
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-freakmode-red leading-tight font-hagrid">
            Construir Músculo
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-freakmode-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
          Log your grind. Stay on streaks. Grow stronger. With your crew.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mt-12"
        >
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="whitespace-nowrap"
          >
            {isLoading ? "Enviando..." : "Desbloquear acesso"}
          </Button>
        </form>

        {/* Message */}
        {message && (
          <div className="max-w-lg mx-auto">
            <p className="text-center text-sm font-medium p-3 rounded-full bg-freakmode-gray-50 text-freakmode-gray-700">
              {message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { submitEmailToHubSpot } from "../../lib/hubspot";
import { trackLeadSubmission } from "../../lib/analytics";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Digite seu e-mail para entrar no desafio");
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

        setMessage("Você entrou no desafio! Aguarde instruções no seu e-mail.");
        setEmail("");
      } else {
        setMessage("Ops! Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no formulário:", error);
      setMessage("Ops! Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex-1 py-48 flex flex-col items-center justify-center px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Main Heading */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-freakmode-navy leading-tight font-hagrid">
            Desafie seus amigos
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-freakmode-red leading-tight font-hagrid">
            Evolua junto
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-freakmode-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
          Transforme treinos em desafios épicos. Mantém streaks, compete com
          amigos e evolui junto com sua crew.
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
            className="whitespace-nowrap sm:w-fit w-full"
          >
            {isLoading ? "Entrando..." : "Entrar no desafio"}
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

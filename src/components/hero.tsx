import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LetteringLogo } from "./icons/lettering-logo";

export const Hero = () => {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Early Access Badge */}
        <div className="inline-flex items-center px-6 py-2 bg-freakmode-gray-100 rounded-full text-sm text-freakmode-gray-600 font-medium">
          Refer a friend for early access
        </div>

        {/* Main Heading */}
        <div className="space-y-1 sm:space-y-2">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-freakmode-navy leading-tight px-2"
            style={{ fontFamily: "var(--font-hagrid)" }}
          >
            Sua nova maneira de
          </h1>
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-freakmode-red leading-tight px-2"
            style={{ fontFamily: "var(--font-hagrid)" }}
          >
            Construir Músculo
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-freakmode-gray-700 max-w-2xl mx-auto font-medium leading-relaxed px-4">
          Log your grind. Stay on streaks. Grow stronger. With your crew.
        </p>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-lg mx-auto mt-12">
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="flex-1 px-6 py-4 rounded-full border-freakmode-gray-200 text-center sm:text-left bg-freakmode-gray-50 text-freakmode-gray-700 placeholder:text-freakmode-gray-500 focus:ring-2 focus:ring-freakmode-red focus:border-transparent"
          />
          <Button className="bg-freakmode-red hover:bg-freakmode-red-hover text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Desbloquear acesso 🔓
          </Button>
        </div>
      </div>

      {/* Background Logo */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 opacity-[0.05] sm:opacity-[0.08] pointer-events-none">
        <LetteringLogo
          className="w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1200px] h-auto"
          variant="light"
        />
      </div>
    </main>
  );
};

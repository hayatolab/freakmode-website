import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { LetteringLogo } from "../../components/icons/lettering-logo";

export const Hero = () => {
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mt-12">
          <Input type="email" placeholder="Digite seu e-mail" />
          <Button className="whitespace-nowrap">Desbloquear acesso</Button>
        </div>
      </div>
    </section>
  );
};

import { AppIcon } from "./icons/app-icon";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 bg-white">
      <div className="flex items-center">
        <AppIcon className="h-8 sm:h-10 w-auto" />
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-freakmode-gray-500 hover:text-freakmode-gray-700 font-medium transition-colors"
        >
          Compartilhe com Amigos
        </a>
      </nav>

      <Button className="bg-freakmode-red hover:bg-freakmode-red-hover text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition-all hover:shadow-xl text-sm sm:text-base">
        <span className="hidden sm:inline">Entrar no FreakMode</span>
        <span className="sm:hidden">Entrar</span>
      </Button>
    </header>
  );
};

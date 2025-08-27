import { AppIcon } from "./icons/app-icon";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="w-full flex px-4 sm:px-6 lg:px-12 py-4 sm:py-6 bg-white z-10 border-b border-freakmode-gray-200/50">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-4 sm:px-6">
        <AppIcon className="h-10 sm:h-10 w-auto" />

        <div className="inline-flex gap-2 items-center">
          <Button>
            <span className="hidden sm:inline">Entrar no FreakMode</span>
            <span className="sm:hidden">Entrar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

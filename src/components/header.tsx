"use client";

import { AppIcon } from "./icons/app-icon";
import { Button } from "./ui/button";
import { trackButtonClick } from "../lib/analytics";

export const Header = () => {
  return (
    <header className="w-full flex px-4 sm:px-6 lg:px-12 py-4 sm:py-6 bg-white z-10 border-b border-freakmode-gray-200/50">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        <AppIcon className="max-h-9 sm:max-h-max sm:h-10 w-auto" />

        <div className="inline-flex gap-2 items-center">
          <Button onClick={() => trackButtonClick("header_login")}>
            <span className="hidden sm:inline">Aceitar desafio</span>
            <span className="sm:hidden">Entrar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

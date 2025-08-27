import { LetteringLogo } from "./icons/lettering-logo";
import { AppIcon } from "./icons/app-icon";
import { TikTokIcon, YouTubeIcon, InstagramIcon } from "./icons/social-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "TikTok",
      href: "https://tiktok.com/@freakmodeapp",
      icon: TikTokIcon,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@freakmodeapp",
      icon: YouTubeIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/freakmodeapp",
      icon: InstagramIcon,
    },
  ];

  return (
    <footer className="relative bg-freakmode-navy text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Brand Section */}
          <div className="space-y-4">
            <AppIcon className="h-8 w-auto" variant="dark" />
            <p className="text-freakmode-gray-400 text-sm max-w-xs">
              Transforme treinos em desafios épicos. Evolua junto com sua crew.
            </p>
          </div>

          {/* Simple Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="#"
              className="text-freakmode-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-freakmode-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-freakmode-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-freakmode-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`Seguir no ${social.name}`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section with Lettering */}
      <div className="border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Lettering Logo */}
            <div className="opacity-40">
              <LetteringLogo
                className="w-80 sm:w-96 md:w-[800px] h-auto"
                variant="dark"
              />
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-freakmode-gray-400 text-sm">
                © {currentYear} FreakMode. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

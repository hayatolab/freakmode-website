import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { config, isServiceEnabled } from "../lib/config";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const hagridText = localFont({
  src: [
    {
      path: "../../public/fonts/hagridtext-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/hagridtext-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/hagridtext-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/hagridtext-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/hagridtext-extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/hagridtext-heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-hagrid",
});

export const metadata: Metadata = {
  title: `${config.app.name} — Desafios fitness com amigos`,
  description:
    "Transforme treinos em desafios épicos! Compete com amigos, mantém streaks e evolui junto com sua crew. Sua academia virou um jogo!",
  metadataBase: new URL(config.app.url),

  // Open Graph
  openGraph: {
    title: `${config.app.name} — Desafios fitness com amigos`,
    description:
      "Transforme treinos em desafios épicos! Compete com amigos, mantém streaks e evolui junto com sua crew. Sua academia virou um jogo!",
    url: config.app.url,
    siteName: config.app.name,
    images: [
      {
        url: "/opengraph-freakmode.png",
        width: 1200,
        height: 630,
        alt: `${config.app.name} - Gamifique seus treinos`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${config.app.name} — Desafios fitness com amigos`,
    description:
      "Transforme treinos em desafios épicos! Compete com amigos, mantém streaks e evolui junto com sua crew. Sua academia virou um jogo!",
    images: ["/opengraph-freakmode.png"],
    creator: "@freakmodeapp",
    site: "@freakmodeapp",
  },

  // Outros metadados importantes
  keywords: [
    "fitness",
    "treino",
    "musculação",
    "gamificação",
    "academia",
    "exercícios",
    "streak",
    "crew",
  ],
  authors: [{ name: config.app.name }],
  creator: config.app.name,
  publisher: config.app.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Analytics */}
        {isServiceEnabled("analytics") && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.trackingId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.analytics.trackingId}');
              `}
            </Script>
          </>
        )}

        {/* HubSpot Tracking Code */}
        {isServiceEnabled("hubspot") && (
          <Script id="hubspot-tracking" strategy="afterInteractive">
            {`
              var _hsq = _hsq || [];
              _hsq.push(['setPortalId', ${config.hubspot.portalId}]);
              (function(d,s,i,r) {
                if (d.getElementById(i)){return;}
                var n = d.createElement(s),e = d.getElementsByTagName(s)[0];
                n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/'+${config.hubspot.portalId}+'.js';
                e.parentNode.insertBefore(n, e);
              })(document, "script", "hs-analytics", 300000);
            `}
          </Script>
        )}
      </head>
      <body
        className={`${rubik.variable} ${hagridText.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

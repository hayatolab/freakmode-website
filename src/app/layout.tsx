import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
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
  title: "FreakMode",
  description:
    "Log your grind. Stay on streaks. Grow stronger. With your crew.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${rubik.variable} ${hagridText.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

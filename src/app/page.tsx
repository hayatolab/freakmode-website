import { Header } from "@/components/header";
import { Hero } from "@/app/_sections/hero";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

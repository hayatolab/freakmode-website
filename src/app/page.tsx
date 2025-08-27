import { Header } from "@/components/header";
import { Hero } from "@/app/_sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
    </div>
  );
}

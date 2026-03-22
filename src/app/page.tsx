import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Chips from "./components/Sections/Chips";
import Hero from "./components/Sections/Hero";
import Players from "./components/Sections/Players";
import Settings from "./components/Sections/Settings";

export const metadata: Metadata = {
  title: "Poker App",
  icons: "/favicon.ico",
};

export default function Home() {
  return (
    <main className="pb-8">
      <Hero />
      <Players />
      <Chips />
      <Settings />
    </main>
  );
}

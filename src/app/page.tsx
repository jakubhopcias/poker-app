import Hero from "./components/Sections/Hero";
import Players from "./components/Sections/Players";
import Settings from "./components/Sections/Settings";

export default function Home() {
  return (
    <main className="pb-8">
      <Hero />
      <Players/>
      <Settings />
    </main>
  );
}

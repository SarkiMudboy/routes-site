import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/ui/animated-hero";
import { PriceBlock } from "@/components/sections/PriceBlock";
import { Timetable } from "@/components/sections/Timetable";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Promises } from "@/components/sections/Promises";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="border-t border-rule">
          <Hero />
        </div>
        <PriceBlock />
        <Timetable />
        <HowItWorks />
        <Promises />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;

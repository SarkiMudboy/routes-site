import AgencyHeroSection from "@/components/ui/hero-01";
import { PriceBlock } from "@/components/sections/PriceBlock";
import { Timetable } from "@/components/sections/Timetable";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Promises } from "@/components/sections/Promises";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

// Section backgrounds alternate (white / wash) so no two neighbours share a
// colour; hero is white, then wash, white, wash, white, wash, footer ink.
function App() {
  return (
    <>
      <AgencyHeroSection>
        <PriceBlock />
        <Timetable />
        <HowItWorks />
        <Promises />
        <Faq />
      </AgencyHeroSection>
      <Footer />
    </>
  );
}

export default App;

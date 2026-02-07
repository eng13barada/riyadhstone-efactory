import { homeData } from "@/data/home";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import Solutions from "@/components/home/Solutions";
import Approach from "@/components/home/Approach";
import TrustTrio from "@/components/home/TrustTrio";
import ArtTech from "@/components/home/ArtTech";
import Library from "@/components/home/Library";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero data={homeData.hero} />
      <WhyUs data={homeData.whyUs} />
      <Solutions data={homeData.solutions} />
      <Approach data={homeData.approach} />
      <TrustTrio data={homeData.trustTrio} />
      <ArtTech data={homeData.artTech} />
      <Library data={homeData.library} />
      <Contact data={homeData.contact} />
    </div>
  );
}

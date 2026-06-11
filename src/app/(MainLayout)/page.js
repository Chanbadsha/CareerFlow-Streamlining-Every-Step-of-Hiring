import EnterpriseHiringSection from "@/Components/HomePage/EnterpriseHiringSection";
import { FAQ } from "@/Components/HomePage/FAQ";
import FeaturedProducts from "@/Components/HomePage/FeaturedProducts";
import HomePageHero from "@/Components/HomePage/HomePageHero";
import ToolsSection from "@/Components/HomePage/ToolsSection";

const HomePage = () => {
  return (
    <div>
      <HomePageHero />
      <FeaturedProducts />
      <ToolsSection />
      <EnterpriseHiringSection />
      <FAQ />
    </div>
  );
};

export default HomePage;

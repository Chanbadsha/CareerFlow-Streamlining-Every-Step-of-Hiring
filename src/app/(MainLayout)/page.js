import EnterpriseHiringSection from "@/Components/HomePage/EnterpriseHiringSection";
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
    </div>
  );
};

export default HomePage;

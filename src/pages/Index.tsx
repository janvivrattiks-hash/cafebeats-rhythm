import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import AwardsSection from "@/components/home/AwardsSection";
import FoodCategories from "@/components/home/FoodCategories";
import ProductsSection from "@/components/home/ProductsSection";
import OutletsSection from "@/components/home/OutletsSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSlider />
      <AwardsSection />
      <FoodCategories />
      <ProductsSection />
      <OutletsSection />
    </main>
    <Footer />
  </>
);

export default Index;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import AwardsSection from "@/components/home/AwardsSection";
import FoodCategories from "@/components/home/FoodCategories";
import BlogSection from "@/components/home/BlogSection";
import ProductsSection from "@/components/home/ProductsSection";
import OutletsSection from "@/components/home/OutletsSection";
import GallerySection from "@/components/home/GallerySection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSlider />
      <AwardsSection />
      <FoodCategories />
      <BlogSection />
      <ProductsSection />
      <OutletsSection />
      <GallerySection />
    </main>
    <Footer />
  </>
);

export default Index;

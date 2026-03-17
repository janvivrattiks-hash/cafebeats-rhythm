import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = [
  "Speciality Coffee", "Iced Coffee", "Hot Coffee", "Signature Coffee",
  "Hot Chocolate", "Shakes", "Specialty Matcha", "Signature Coolers",
  "Classic Pasta", "Salads", "Sandwiches", "Rice Bowl",
  "On The Toast", "Appetizer", "Noodles", "Sizzler",
  "CB Flatbreads (Pizza) (10\")", "Desserts"
];

const menuData: Record<string, { name: string; desc: string; tag?: string }[]> = {
  "Speciality Coffee": [
    { name: "Berry Tonic", desc: "Bright espresso tonic with berry-forward freshness", tag: "Signature" },
    { name: "Yuzu Tonic", desc: "Citrusy yuzu coffee tonic with crisp sparkling notes" },
    { name: "Cold Brew Tonic", desc: "Smooth cold brew paired with bubbly tonic" },
    { name: "Espresso Tonic", desc: "Bold espresso layered over chilled tonic water" },
    { name: "Flavoured Espresso Tonic", desc: "Espresso tonic with Orange, Cranberry, Cinnamon, Peach, or Irish profile" },
    { name: "Cold Brew", desc: "Slow-brewed chilled coffee with mellow depth" },
  ],
  "Iced Coffee": [
    { name: "Iced Espresso", desc: "Clean and intense espresso served over ice" },
    { name: "Iced Americano", desc: "Double espresso with chilled water and ice" },
    { name: "Iced Latte", desc: "Espresso with cold milk for a smooth finish" },
  ],
  "Hot Coffee": [
    { name: "Espresso", desc: "Classic concentrated coffee shot with rich crema" },
    { name: "Americano", desc: "Espresso topped with hot water for balanced strength" },
    { name: "Cappuccino", desc: "Espresso, steamed milk, and dense velvety foam" },
    { name: "Mocha Latte", desc: "Chocolate and espresso blended with steamed milk", tag: "Bestseller" },
    { name: "Affogato", desc: "Gelato-style dessert coffee in Nutella, Oreo, Hazelnut, or Caramel style" },
    { name: "Pistachio Kunafa Affogato", desc: "Affogato inspired by pistachio and kunafa flavors", tag: "Signature" },
  ],
  "Signature Coffee": [
    { name: "Cumo's Coffee", desc: "House signature craft coffee with balanced body", tag: "Signature" },
    { name: "Protein Espresso Martini", desc: "Coffee-forward protein mocktail with espresso depth" },
    { name: "Espresso Vietnamese", desc: "Bold espresso inspired by Vietnamese coffee style" },
    { name: "Newton Hazelnut Espresso", desc: "Nutty hazelnut espresso with smooth finish" },
    { name: "The Classic Beaten Mocha", desc: "Hand-beaten mocha with thick creamy texture" },
    { name: "Boat Flavoured Frappe", desc: "Frappe available in Hazelnut, Cinnamon, Biscoff, or Nutella style" },
    { name: "Brownie Mocha", desc: "Chocolate mocha finished with brownie richness" },
  ],
  "Hot Chocolate": [
    { name: "The Classical Creamy Chocolate", desc: "Silky hot chocolate with deep cocoa flavor" },
  ],
  "Shakes": [
    { name: "Oreo Shake", desc: "Creamy shake loaded with crunchy Oreo bits", tag: "Bestseller" },
    { name: "Ferrero Rocher Shake", desc: "Hazelnut-chocolate shake inspired by Ferrero profile" },
    { name: "Biscoff Shake", desc: "Smooth caramelized cookie shake with Biscoff notes" },
    { name: "Nutella Dark Fantasy Shake", desc: "Rich Nutella blend with dark cookie chocolate tones" },
    { name: "KitKat Shake", desc: "Chocolate wafer shake with KitKat crunch" },
  ],
  "Specialty Matcha": [
    { name: "Hot Matcha Latte", desc: "Ceremonial-style matcha whisked with steamed milk" },
    { name: "Iced Matcha Latte", desc: "Chilled matcha latte in Orange, Mango, Strawberry, or Blueberry style" },
    { name: "Yuzu Tonic Matcha", desc: "Sparkling matcha tonic with yuzu citrus profile" },
    { name: "Tropical Tonic Matcha", desc: "Fruit-forward tropical tonic with matcha base" },
    { name: "Passion Fruit Tonic Matcha", desc: "Tangy passion fruit and matcha tonic fusion" },
  ],
  "Signature Coolers": [
    { name: "Flavoured Mojito", desc: "Mojito in Orange, Green Apple, Strawberry, Kiwi, or Blueberry style", tag: "Bestseller" },
    { name: "Cranberry Delight", desc: "Refreshing cranberry cooler with balanced tartness" },
    { name: "Sunset Cooler", desc: "Layered tropical cooler with citrus finish" },
    { name: "Kiwi Blue Sea", desc: "Kiwi and blue-citrus fusion with sparkling notes" },
    { name: "Passion Fruit Twist Energy", desc: "Passion fruit cooler with lively energy profile" },
    { name: "Masala Wine Sangria", desc: "Spiced zero-proof sangria-style cooler" },
    { name: "Pina Colada", desc: "Creamy pineapple-coconut cooler" },
    { name: "Lemon Iced Tea", desc: "Classic lemon tea served chilled" },
    { name: "Peach Iced Tea", desc: "Peach-infused iced tea with mellow sweetness" },
  ],
  "Classic Pasta": [
    { name: "Signature Rose Rigatoni Pasta", desc: "Rigatoni in creamy rose sauce with herbs", tag: "Signature" },
    { name: "Heirloom Gnocchi Pasta", desc: "Soft gnocchi tossed in a rich chef-style sauce" },
    { name: "Wild Alfredo Pasta", desc: "Creamy alfredo pasta with earthy flavor notes" },
    { name: "Portofino Mac 'n' Cheese Pasta", desc: "Baked-style mac and cheese with Portofino profile" },
  ],
  "Salads": [
    { name: "Exotic Veggie with Herbs", desc: "Fresh seasonal vegetables tossed with aromatic herbs" },
    { name: "Sunshine Tofu Salad", desc: "Protein-rich tofu salad with bright citrus dressing" },
    { name: "Tabbouleh Salad", desc: "Mediterranean-style parsley salad with zesty finish" },
    { name: "Steak Paneer with Sauteed Veggies", desc: "Pan-seared paneer served with sauteed vegetables" },
    { name: "Burrata Salad", desc: "Creamy burrata paired with fresh greens and dressing" },
  ],
  "Sandwiches": [
    { name: "Sauteed Paneer Croissant Sandwich", desc: "Flaky croissant layered with sauteed paneer filling" },
    { name: "Chipotle Veggie Bagel Sandwich", desc: "Bagel sandwich with smoky chipotle vegetable mix" },
    { name: "Pesto Bagel Sandwich", desc: "Herby pesto bagel with fresh savory stuffing" },
    { name: "Harissa Cottage Cheese Sandwich", desc: "Spiced harissa cottage cheese in toasted bread" },
  ],
  "Rice Bowl": [
    { name: "Veg Jambalaya Rice with Pepper Curry", desc: "Spiced jambalaya-style rice served with pepper curry" },
    { name: "Thai Basil Cottage Cheese with Jasmine Rice", desc: "Thai basil cottage cheese over fragrant jasmine rice" },
    { name: "Spinach Rice with Thai Curry", desc: "Spinach-infused rice paired with Thai curry" },
    { name: "Mexican Rice with Hot Pepper Curry", desc: "Mexican-style rice with bold pepper curry" },
    { name: "Mexican Rice Platter", desc: "Hearty Mexican rice platter with signature accompaniments" },
    { name: "Exotic Rice Platter", desc: "Chef-curated rice platter with global flavor notes" },
  ],
  "On The Toast": [
    { name: "Next Level Avocado Toast", desc: "Smashed avocado toast finished with premium toppings" },
    { name: "Scrambled Paneer Toast", desc: "Soft scrambled paneer served on crisp toast" },
    { name: "Pesto Paneer Toast", desc: "Paneer toast layered with vibrant basil pesto" },
  ],
  "Appetizer": [
    { name: "Crispy Chestnut", desc: "Crunchy bite-sized chestnut snack with seasoning" },
    { name: "Korean Chili Lotus Stem", desc: "Lotus stem tossed in spicy Korean chili glaze" },
    { name: "Kung Pao Cottage Cheese", desc: "Wok-tossed cottage cheese in kung pao style" },
    { name: "Mediterranean Mezze Platter", desc: "Assorted mezze platter inspired by Mediterranean flavors" },
    { name: "Hummus Bowl", desc: "Creamy hummus bowl with fresh accompaniments" },
    { name: "Golden Arancini Balls", desc: "Crisp golden risotto balls with savory center" },
  ],
  "Noodles": [
    { name: "Korean Udon Noodles", desc: "Udon noodles tossed in Korean-style savory sauce" },
    { name: "Hakka Noodles", desc: "Classic Indo-Chinese hakka noodles with vegetables" },
    { name: "Burnt Garlic Noodles", desc: "Noodles infused with smoky burnt garlic flavor" },
    { name: "Pad Thai Noodles", desc: "Thai-style stir-fried noodles with sweet-savory balance" },
    { name: "Crispy Veg", desc: "Crispy vegetable bites served as crunchy side" },
    { name: "Crispy Corn", desc: "Golden fried corn kernels with seasoning" },
    { name: "Chilli Cottage Cheese", desc: "Spicy Indo-Chinese cottage cheese preparation" },
  ],
  "Sizzler": [
    { name: "Mexican Sizzler", desc: "Sizzling Mexican platter with bold spice profile" },
    { name: "Indo-Mex Sizzler", desc: "Fusion sizzler combining Indian and Mexican flavors" },
    { name: "Chinese Sizzler", desc: "Wok-inspired Chinese style sizzler platter" },
    { name: "Chef's Special Sizzler", desc: "Chef-crafted seasonal sizzler selection", tag: "Chef's Choice" },
    { name: "CB Signature Sizzler", desc: "House special signature sizzler experience", tag: "Signature" },
  ],
  "CB Flatbreads (Pizza) (10\")": [
    { name: "Mormora Pizza", desc: "Signature flatbread pizza with balanced toppings" },
    { name: "Fiamo Pizza", desc: "Fire-inspired pizza with bold herb and cheese notes" },
    { name: "Truffle Mushroom Bianco Pizza", desc: "Creamy white pizza with mushroom and truffle aroma" },
    { name: "Pesto Buffalo Pizza", desc: "Pesto-forward pizza finished with buffalo-style cheese" },
    { name: "Tuscan Pizza", desc: "Rustic Tuscan-inspired vegetable pizza" },
    { name: "Harvest Pizza", desc: "Garden-harvest toppings on artisan flatbread crust" },
    { name: "Roasted Tandoori Paneer Pizza", desc: "Roasted tandoori paneer and veggie topping blend" },
    { name: "Asian Grilled Paneer Pizza", desc: "Asian-spiced grilled paneer on crispy flatbread" },
  ],
  "Desserts": [
    { name: "Pistachio Cheese Cake", desc: "Creamy cheesecake finished with pistachio flavor" },
    { name: "Tiramisu", desc: "Classic layered coffee dessert with velvety texture" },
    { name: "Sizzling Hot Brownie", desc: "Warm brownie served sizzling for rich indulgence" },
    { name: "Cheesecake", desc: "Cheesecake available in Nutella, Biscoff, Strawberry, or Blueberry style" },
  ],
};

const MenuPage = () => {
  const [active, setActive] = useState("Speciality Coffee");

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <img src="/banner-2.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="font-display text-4xl font-bold text-white md:text-6xl uppercase tracking-wider">Our Menu</h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Handcrafted with love, served with passion. Explore our curated selection of rhythm and brew.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            {/* Tab Bar */}
            <div className="sticky top-20 z-30 mb-16 flex flex-wrap justify-center gap-4 bg-background/80 py-4 backdrop-blur-md">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`rounded-full px-8 py-2.5 font-display text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                    active === tab
                      ? "bg-gradient-accent text-foreground shadow-accent"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="mb-10 text-center">
                  <h2 className="mt-3 font-display text-3xl font-bold text-foreground">{active}</h2>
                  <div className="mt-2 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {menuData[active as keyof typeof menuData].length > 0 ? (
                    menuData[active as keyof typeof menuData].map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-warm hover:shadow-primary transition-all duration-300 hover:-translate-y-1 p-7"
                      >
                        {/* Decorative number */}
                        <span className="absolute top-4 right-5 font-display text-6xl font-black text-muted/20 select-none group-hover:text-accent/10 transition-colors duration-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Accent bar */}
                        <div className="mb-5 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-300" />

                        {/* Tag/Badge */}
                        {item.tag && (
                          <div className="mb-4 flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white w-fit shadow-sm">
                            <Star className="h-3 w-3 fill-current" />
                            {item.tag}
                          </div>
                        )}

                        <h3 className="font-display text-xl font-bold text-foreground mb-2 relative z-10">{item.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>

                        {/* Bottom decorative glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-accent/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center">
                      <p className="text-lg text-muted-foreground italic">Coming soon to the rhythm...</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;

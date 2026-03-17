import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = [
  "Speciality Coffee", "Signature Coffee", "Hot Chocolate", "Shakes",
  "Iced Coffee", "Hot Coffee", "Frappe", "Specialty Matcha",
  "Signature Coolers", "Classic Pasta", "Finger Bites", "Quick Bites",
  "Garlic Bread", "Eat Healthy Salads", "Sandwich", "Rice Bowl",
  "On The Toast", "Appetizer", "Chinese", "Sizzler", "CB Flatbreads (Pizza)",
  "Desserts"
];

const menuData: Record<string, { name: string; desc: string; tag?: string; price?: string }[]> = {
  "Speciality Coffee": [
    { name: "Berry Tonic", desc: "Premium speciality coffee with a berry twist", price: "299" },
    { name: "Yuzu Tonic", desc: "Citrusy and refreshing coffee tonic", price: "320" },
    { name: "Cold Brew Tonic", desc: "Smooth cold brew blended with crisp tonic water", price: "320" },
    { name: "Espresso Tonic", desc: "Bold espresso shots with tonic water", price: "290" },
    { name: "Flavoured Espresso Tonic", desc: "ORANGE/CRANBERRY/CINNAMON/PEACH/ IRISH", price: "310" },
    { name: "Cold Brew", desc: "Classic smooth and rich cold brew", price: "250" },
  ],
  "Signature Coffee": [
    { name: "Cuma's Coffee", desc: "Our secret signature blend", price: "330" },
    { name: "Protein Espresso", desc: "Coffee with a protein boost", price: "320" },
    { name: "Martini Espresso", desc: "Sophisticated coffee with a classic twist", price: "299" },
    { name: "Vietnamese", desc: "Authentic Vietnamese style coffee", price: "299" },
    { name: "Newton Hazelnut Espresso", desc: "Hazelnut infused signature espresso", price: "299" },
  ],
  "Hot Chocolate": [
    { name: "The Classical", desc: "Rich and creamy classic hot chocolate", price: "200" },
    { name: "Creamy Chocolate", desc: "Extra creamy and indulgent chocolate experience", price: "220" },
  ],
  "Shakes": [
    { name: "Oreo Shake", desc: "Creamy vanilla shake blended with crushed Oreo cookies", price: "299", tag: "Bestseller" },
    { name: "Ferrero Rocher Shake", desc: "Luxurious shake with crushed Ferrero Rocher", price: "375" },
    { name: "Biscoff Shake", desc: "Creamy shake with signature Biscoff cookie flavor", price: "410" },
    { name: "Nutella Dark Fantasy Shake", desc: "Rich chocolate hazelnut and cookie blend", price: "385" },
    { name: "KitKat Shake", desc: "Rich chocolate shake with Kit Kat pieces", price: "375", tag: "Bestseller" },
  ],
  "Iced Coffee": [
    { name: "Iced Espresso", desc: "Bold espresso shots served over ice", price: "190" },
    { name: "Iced Americano", desc: "Chilled espresso with cold water for smooth finish", price: "210" },
    { name: "Iced Latte", desc: "Smooth espresso with chilled milk over ice", price: "259" },
    { name: "Iced Mocha", desc: "Perfect blend of espresso, chocolate, and cold milk", price: "235" },
  ],
  "Hot Coffee": [
    { name: "Espresso", desc: "Strong and bold shot of premium coffee", price: "190", tag: "Bestseller" },
    { name: "Cappuccino", desc: "Rich espresso with velvety steamed milk foam", price: "190", tag: "Bestseller" },
    { name: "Mocha Latte", desc: "Perfect blend of espresso, chocolate, and steamed milk", price: "250" },
    { name: "Affogato", desc: "NUTELLA OREO/ HAZELUNT/CARAMEL", price: "240" },
    { name: "Americano", desc: "Rich espresso with hot water for a smooth finish", price: "210" },
    { name: "Pistachio Kunafa Affogato", desc: "Unique blend of pistachio and Kunafa with coffee", price: "380" },
  ],
  "Frappe": [
    { name: "The Classic Beaten", desc: "Traditionally beaten cold coffee", price: "260" },
    { name: "Mocha Beat", desc: "Rich chocolate and coffee blend beats", price: "290" },
    { name: "Flavoured Frappé", desc: "HAZELUNT/ CINNAMON/ BISCOFF/NUTELLA", price: "299" },
    { name: "Brownie Mocha", desc: "Decadent mocha with brownie pieces for extra indulgence", price: "340" },
  ],
  "Specialty Matcha": [
    { name: "Hot Matcha Latte", desc: "Ceremonial grade hot matcha", price: "385" },
    { name: "Iced Matcha Latte", desc: "ORANGE/MANGO/STRAWBERRY/BLUE BERRY", price: "395" },
    { name: "Yuzu Tonic Matcha", desc: "Zesty yuzu with matcha and tonic", price: "390" },
    { name: "Tropical Tonic Matcha", desc: "Refreshing tropical matcha blend", price: "400" },
    { name: "Passion Fruit Tonic Matcha", desc: "Exotic passion fruit matcha", price: "430" },
  ],
  "Signature Coolers": [
    { name: "Mojito", desc: "Classic mint and lime cooler", price: "250" },
    { name: "Flavoured Mojito", desc: "ORANGE / GREEN APPLE / STRAWBERRY / KIWI / BLUEBERRY", price: "280" },
    { name: "Cranberry Delight", desc: "Tangy cranberry refreshment", price: "299" },
    { name: "Sunset Cooler", desc: "Beautiful layered fruit cooler", price: "380" },
    { name: "Kiwi Blue Some", desc: "Kiwi and blue curacao blend", price: "375" },
    { name: "Passion Fruit", desc: "Exotic passion fruit cooler", price: "350" },
    { name: "Twist Energy", desc: "Refreshing energy boost", price: "395" },
    { name: "Masala Wine Sangria", desc: "Traditional sangria with a spicy twist", price: "340" },
    { name: "Pina Colada", desc: "Classic coconut and pineapple blend", price: "280" },
    { name: "Lemon Iced Tea / Peach Iced Tea", desc: "Refreshing iced tea options", price: "280" },
  ],
  "Classic Pasta": [
    { name: "Signature Rosé Rigatoni Pasta", desc: "Rich and creamy rosé sauce rigatoni", price: "450" },
    { name: "Heirloom Gnocchi Pasta", desc: "Soft gnocchi with heirloom tomatoes", price: "470" },
    { name: "Wild Alfredo Pasta", desc: "Creamy alfredo with wild mushrooms", price: "420" },
    { name: "Portofino Mac 'n' Cheese Pasta", desc: "Gourmet mac and cheese", price: "460" },
  ],
  "Finger Bites": [
    { name: "French Fries", desc: "Classic golden crispy fries", price: "190" },
    { name: "Cheesy Fries", desc: "Fries loaded with melted cheese", price: "250" },
    { name: "Peri Peri Fries", desc: "Spicy peri peri seasoned fries", price: "250" },
    { name: "Potato Skin Fries", desc: "Crispy potato skins", price: "270" },
  ],
  "Quick Bites": [
    { name: "Mexicano Nachos", desc: "Nachos with Mexican beans and salsa", price: "290" },
    { name: "Guacamole Cheese Nachos", desc: "Nachos with fresh guacamole and cheese", price: "330" },
  ],
  "Garlic Bread": [
    { name: "Cheese Garlic Bread", desc: "Classic garlic bread with cheese", price: "330" },
    { name: "Cheese Garlic Bread Loaded", desc: "Extra loaded garlic bread", price: "390" },
    { name: "Italian Bruschetta", desc: "Traditional tomato and herb bruschetta", price: "430" },
  ],
  "Eat Healthy Salads": [
    { name: "Exotic Veggie with Herbs", desc: "Fresh mixed veggies with aromatic herbs", price: "320" },
    { name: "Sunshine Tofu Salad", desc: "Bright tofu salad with fresh greens", price: "390" },
    { name: "Tabbouleh Salad", desc: "Traditional Middle Eastern herb salad", price: "390" },
    { name: "Steak Paneer with Sautéed Veggies", desc: "Grilled paneer steaks with vegetables", price: "410" },
    { name: "Burrata Salad", desc: "Creamy burrata with fresh tomatoes", price: "450" },
  ],
  "Sandwich": [
    { name: "Sauted Paneer Croissant Sandwich", desc: "Flaky croissant with sautéed paneer", price: "380" },
    { name: "Chipotle Veggie Bagel Sandwich", desc: "Bagel with spicy chipotle veggies", price: "395" },
    { name: "Pesto Bagel Sandwich", desc: "Bagel with fresh pesto and veggies", price: "400" },
    { name: "Harissa Cottage Cheese Sandwich", desc: "Spicy harissa cottage cheese filling", price: "285" },
  ],
  "Rice Bowl": [
    { name: "Veg Jambalaya Rice with Pepper Curry", desc: "Spiced jambalaya with pepper curry", price: "499" },
    { name: "Thai Basil Cottage Cheese with Jasmine Rice", desc: "Aromatic Thai basil paneer with jasmine rice", price: "510" },
    { name: "Spinach Rice with Thai Curry", desc: "Healthy spinach rice with rich Thai curry", price: "520" },
    { name: "Mexican Rice with Hot Pepper Curry", desc: "Zesty Mexican rice with spicy curry", price: "499" },
    { name: "Mexican Rice Platter", desc: "Complete Mexican rice meal", price: "540" },
    { name: "Exotic Rice Platter", desc: "Chef's special rice selection", price: "565" },
  ],
  "On The Toast": [
    { name: "Next Level Avocado Toast", desc: "Gourmet avocado mash on sourdough", price: "399" },
    { name: "Scrambled Paneer Toast", desc: "Creamy scrambled paneer on toast", price: "389" },
    { name: "Pesto Paneer Toast", desc: "Fresh pesto and paneer on toast", price: "375" },
  ],
  "Appetizer": [
    { name: "Crispy Chestnut", desc: "Deep fried chestnuts with spices", price: "350" },
    { name: "Korean Chili Lotus Stem", desc: "Lotus stems in spicy Korean chili sauce", price: "410" },
    { name: "Kung Pao Cottage Cheese", desc: "Paneer in classic Kung Pao sauce", price: "385" },
    { name: "Mediterranean Mezze Platter", desc: "Selection of Mediterranean bites", price: "430" },
    { name: "Hummus Bowl", desc: "Creamy hummus served with pita", price: "499" },
    { name: "Golden Arancini Balls", desc: "Crispy Italian rice balls", price: "399" },
  ],
  "Chinese": [
    { name: "Korean Udon Noodles", desc: "Thick udon noodles in Korean spices", price: "390" },
    { name: "Hakka Noodles", desc: "Classic veggie hakka noodles", price: "350" },
    { name: "Burnt Garlic Noodles", desc: "Aromatic noodles with toasted garlic", price: "350" },
    { name: "Pad Thai Noodles", desc: "Traditional Thai flat noodles", price: "370" },
    { name: "Crispy Veg", desc: "Mixed vegetables fried to perfection", price: "290" },
    { name: "Crispy Corn", desc: "Spiced crispy corn kernels", price: "290" },
    { name: "Chilli Cottage Cheese", desc: "Paneer cubes in spicy chili sauce", price: "365" },
  ],
  "Sizzler": [
    { name: "Mexican Sizzler", desc: "Sizzling platter with Mexican favorites", price: "590" },
    { name: "Indo-Mex Sizzler", desc: "Fusion of Indian and Mexican flavors", price: "595" },
    { name: "Chinese Sizzler", desc: "Sizzling Chinese delicacies", price: "525" },
    { name: "Chef's Special Sizzler", desc: "Chef's selection on a sizzler", price: "620" },
    { name: "CB Signature Sizzler", desc: "Our house signature sizzling experience", price: "650" },
  ],
  "CB Flatbreads (Pizza)": [
    { name: "Marinara Pizza", desc: "Classic tomato and garlic flatbread", price: "410" },
    { name: "Fiama Pizza", desc: "Spiced flatbread with spicy toppings", price: "450" },
    { name: "Truffle Mushroom Bianco Pizza", desc: "White base with truffle and mushrooms", price: "480" },
    { name: "Pesto Buffalo Pizza", desc: "Fresh pesto and buffalo mozzarella", price: "650" },
    { name: "Tuscan Pizza", desc: "Traditional Tuscan style toppings", price: "670" },
    { name: "Harvest Pizza", desc: "Loaded with seasonal harvest vegetables", price: "550" },
    { name: "Roasted Tandoori Paneer Pizza", desc: "Fired with tandoori paneer and spices", price: "550" },
    { name: "Asian Grilled Paneer Pizza", desc: "Unique Asian flavored paneer pizza", price: "599" },
  ],
  "Desserts": [
    { name: "Pistachio Cheese Cake", desc: "Delicate pistachio flavored cheesecake", price: "450" },
    { name: "Tiramisu", desc: "Classic Italian coffee-layered dessert", price: "340" },
    { name: "Sizzling Hot Brownie", desc: "Warm brownie on a sizzler with syrup", price: "295" },
    { name: "Cheesecake", desc: "Nutella/Biscoff/Strawberry/Blueberry", price: "370" },
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
                  className={`rounded-full px-8 py-2.5 font-display text-sm font-bold transition-all duration-300 transform hover:scale-105 ${active === tab
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

                        <div className="flex justify-between items-start mb-2 relative z-10">
                          <h3 className="font-display text-xl font-bold text-foreground">{item.name}</h3>
                          {item.price && (
                            <span className="font-display text-lg font-bold text-primary">₹{item.price}</span>
                          )}
                        </div>
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

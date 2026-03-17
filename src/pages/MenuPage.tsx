import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = [
  "Tea With Milk", "Tea Without Milk", "More Than Tea", "Iced Tea",
  "Hot Coffee", "Cold Coffee", "Iced Coffee", "Mocktails",
  "Shakes", "Pizza (9 inch)", "Pasta", "Sandwiches",
  "Noodles", "Fries", "Farali Special", "Nachos",
  "Garlic Bread", "Snacks", "Desserts", "Cold Beverages"
];

const menuData: Record<string, { name: string; desc: string; tag?: string }[]> = {
  "Tea With Milk": [
    { name: "Masala Tea", desc: "Traditional spiced tea with aromatic blend of cardamom and ginger", tag: "Bestseller" },
    { name: "Ginger Pudina Tea", desc: "Refreshing blend of ginger and mint for a perfect warming experience", tag: "Bestseller" },
    { name: "Pudina Tea", desc: "Refreshing mint-infused tea with rich milky texture" },
    { name: "Cinnamon Tea", desc: "Warming cinnamon-spiced tea with aromatic flavors" },
    { name: "Elaichi Tea", desc: "Fragrant cardamom-infused tea with rich milky texture" },
  ],
  "Tea Without Milk": [
    { name: "Black Lemon Ginger Tea", desc: "Zesty black tea with lemon and ginger for a citrusy kick" },
    { name: "Green Lemon Tea", desc: "Light and refreshing green tea with fresh lemon", tag: "Bestseller" },
    { name: "Darjeeling Lemon Ginger Tea", desc: "Premium Darjeeling tea with lemon and ginger blend" },
    { name: "Green Lemon Ginger Tea", desc: "Antioxidant-rich green tea with lemon and ginger" },
    { name: "Kashmiri Kahwa", desc: "Traditional Kashmiri tea with almonds and aromatic spices" },
  ],
  "More Than Tea": [
    { name: "Hot Chocolate", desc: "Rich and creamy hot chocolate perfect for cold days" },
  ],
  "Iced Tea": [
    { name: "Peach Ice Tea", desc: "Refreshing peach-flavored iced tea with natural fruit essence", tag: "Bestseller" },
    { name: "Lemon Ice Tea", desc: "Classic lemon iced tea perfect for hot summer days", tag: "Bestseller" },
  ],
  "Hot Coffee": [
    { name: "Espresso", desc: "Strong and bold shot of premium coffee", tag: "Bestseller" },
    { name: "Americano", desc: "Rich espresso with hot water for a smooth finish" },
    { name: "Cappuccino", desc: "Rich espresso with velvety steamed milk foam", tag: "Bestseller" },
    { name: "Café Latte", desc: "Smooth espresso with steamed milk and light foam" },
    { name: "Flavored Americano", desc: "Classic americano with your choice of flavor syrup" },
    { name: "Flavored Cappuccino", desc: "Traditional cappuccino enhanced with flavor syrups" },
    { name: "Mocha Latte", desc: "Perfect blend of espresso, chocolate, and steamed milk" },
  ],
  "Cold Coffee": [
    { name: "Cold Coffee", desc: "Creamy iced coffee with a perfect balance of sweetness" },
    { name: "Cold Coffee With Ice Cream", desc: "Indulgent cold coffee topped with vanilla ice cream", tag: "Bestseller" },
    { name: "Caramel Cold Coffee", desc: "Rich cold coffee with sweet caramel flavor" },
    { name: "Hazelnut Coffee", desc: "Smooth cold coffee with aromatic hazelnut flavor", tag: "Bestseller" },
    { name: "Betan Mocha", desc: "Rich chocolate and coffee blend with creamy texture" },
    { name: "Brownie Mocha", desc: "Decadent mocha with brownie pieces for extra indulgence" },
  ],
  "Iced Coffee": [
    { name: "Iced Coffee", desc: "Chilled coffee served over ice for refreshing taste" },
    { name: "Iced Espresso", desc: "Bold espresso shots served over ice" },
    { name: "Iced Americano", desc: "Chilled espresso with cold water for smooth finish" },
    { name: "Tonic Espresso", desc: "Unique blend of espresso with tonic water" },
    { name: "Flavored Iced Coffee", desc: "Iced coffee with lemon, orange, or cranberry flavor" },
  ],
  "Mocktails": [
    { name: "Mojito Mint", desc: "Fresh mint and lime mocktail with sparkling soda" },
    { name: "Green Apple Mojito", desc: "Refreshing green apple flavored mojito" },
    { name: "Blue Curacao Mojito", desc: "Tropical blue-colored refreshing fruity mocktail" },
    { name: "Orange Mojito", desc: "Zesty orange mojito with fresh citrus flavors", tag: "Bestseller" },
    { name: "Cranberry Mojito", desc: "Tangy cranberry mojito with fresh mint" },
  ],
  "Shakes": [
    { name: "Classical Vanilla", desc: "Creamy vanilla milkshake with rich smooth texture" },
    { name: "Strawberry Shake", desc: "Fresh strawberry milkshake with creamy goodness" },
    { name: "Green Apple Shake", desc: "Refreshing green apple shake with crisp flavors" },
    { name: "Oreo Chocolate", desc: "Creamy vanilla shake blended with crushed Oreo cookies", tag: "Bestseller" },
    { name: "Kit Kat Shake", desc: "Rich chocolate shake with Kit Kat pieces", tag: "Bestseller" },
    { name: "Nutella Shake", desc: "Indulgent Nutella chocolate hazelnut shake" },
    { name: "Biscoff Shake", desc: "Creamy shake with signature Biscoff cookie flavor" },
  ],
  "Pizza (9 inch)": [
    { name: "Margherita Pizza", desc: "Classic combination of fresh mozzarella, ripe tomatoes, aromatic basil, and olive oil" },
    { name: "Fresh Veggie Pizza", desc: "Vibrant seasonal vegetables, capsicum and onion on golden crust (Jain)" },
    { name: "Cheese N Corn Pizza", desc: "Creamy cheese, sweet corn, and herbs on golden crust (Jain)" },
    { name: "Tandoori Paneer Pizza", desc: "Crispy base with tandoori paneer, onion, capsicum in rich tandoori sauce" },
    { name: "BBQ Paneer Pizza", desc: "Smoky BBQ paneer with mozzarella, onions, and bell peppers" },
    { name: "Paprika Pizza", desc: "Spicy paprika, fresh bell peppers, mozzarella cheese on crispy crust" },
  ],
  "Pasta": [
    { name: "Red Sauce Pasta", desc: "Classic pasta in rich tomato-based sauce with herbs" },
    { name: "White Sauce Pasta", desc: "Creamy white sauce pasta with cheese and herbs" },
    { name: "Pink Sauce Pasta", desc: "Perfect blend of red and white sauce with pasta" },
  ],
  "Sandwiches": [
    { name: "Veg Sandwich", desc: "Fresh vegetables including potato, tomatoes, cucumbers, onions (Jain)" },
    { name: "Veg Cheese Sandwich", desc: "Fresh vegetables with cheese layered between bread slices (Jain)", tag: "Bestseller" },
    { name: "Cheese Chutney Sandwich", desc: "Flavorful combination of cheese with tangy and spicy chutney" },
    { name: "Cheese Corn Sandwich", desc: "Creamy mixture of cheese and sweet corn with onion and capsicum (Jain)", tag: "Bestseller" },
    { name: "Peri Peri Paneer Sandwich", desc: "Soft paneer marinated in tangy and fiery peri peri sauce (Jain)" },
    { name: "Chill Mill Sandwich", desc: "Refreshing and creamy delight with balanced mix of flavors" },
    { name: "Tandoori Paneer Sandwich", desc: "Marinated paneer with onion, capsicum in tandoori spice mix", tag: "Bestseller" },
  ],
  "Noodles": [
    { name: "Veg Maggi Noodles", desc: "Classic Maggi noodles with vegetables and spices (Jain)", tag: "Bestseller" },
    { name: "Cheese Veg Maggi Noodles", desc: "Maggi noodles with vegetables and melted cheese (Jain)" },
  ],
  "Fries": [
    { name: "French Fries", desc: "Crispy golden fries seasoned with herbs and salt" },
    { name: "Peri Peri Fries", desc: "Spicy peri peri seasoned crispy fries" },
    { name: "Cheese Balls", desc: "Crispy cheese balls served in portions of 4 pieces" },
  ],
  "Farali Special": [
    { name: "Sabudana Tikki", desc: "Traditional sabudana tikkis served in portions of 3 pieces" },
    { name: "Farali Sabudana Bhel", desc: "Special faralli-style sabudana bhel with crunchy mix" },
  ],
  "Nachos": [
    { name: "Nachos Mexican", desc: "Crispy tortilla chips with authentic Mexican flavors" },
    { name: "Nachos Cheesy", desc: "Crispy tortilla chips loaded with melted cheese" },
  ],
  "Garlic Bread": [
    { name: "Garlic Bread", desc: "Toasted bread with aromatic garlic butter and herbs" },
    { name: "Cheese Garlic Bread", desc: "Garlic bread topped with melted cheese" },
    { name: "Cheese Garlic Bread Loaded", desc: "Heavily loaded garlic bread with extra cheese" },
  ],
  "Snacks": [
    { name: "Khakhra", desc: "Traditional Gujarati crispy flatbread served in 2 pieces (Jain)" },
    { name: "Cookies", desc: "Fresh baked cookies served in portions of 4 pieces" },
    { name: "Thepla", desc: "Spiced flatbread served in 2 pieces" },
    { name: "Cheese Khakhra", desc: "Khakhra topped with cheese served in 2 pieces (Jain)" },
    { name: "Masala Khakhra With Cheese", desc: "Spiced khakhra with cheese served in 2 pieces (Jain)" },
    { name: "Maska Bun", desc: "Soft bun with butter and traditional flavors (Jain)" },
    { name: "Samosa", desc: "Crispy fried samosas served in 2 pieces" },
    { name: "Bread Butter", desc: "Simple bread with butter spread" },
    { name: "Jam Bread Butter", desc: "Bread with butter and sweet jam (Jain)" },
    { name: "Khari", desc: "Crispy puff pastry served in 5 pieces" },
    { name: "Choco Bread Butter", desc: "Bread with butter and chocolate spread (Jain)" },
    { name: "Poha", desc: "Traditional flattened rice preparation with spices" },
    { name: "Biscuit Pai", desc: "Traditional biscuit preparation served in 6 pieces" },
  ],
  "Desserts": [
    { name: "Chocolate Brownie w Cookie Crumble", desc: "Rich chocolate brownie topped with cookie crumble" },
    { name: "Nutella Brownie w Cookie Crumble", desc: "Decadent Nutella brownie with cookie crumble topping" },
    { name: "Biscoff Brownie w Cookie Crumble", desc: "Biscoff flavored brownie with cookie crumble" },
    { name: "Chocolate Brownie", desc: "Classic rich chocolate brownie" },
    { name: "Nutella Brownie", desc: "Indulgent Nutella chocolate brownie" },
    { name: "Biscoff Brownie", desc: "Signature Biscoff flavored brownie" },
    { name: "Cheese Cake", desc: "Creamy cheesecake available in Biscoff, Nutella, or Strawberry" },
    { name: "Add On Ice Cream", desc: "Vanilla ice cream to complement any dessert" },
  ],
  "Cold Beverages": [
    { name: "Cold Drink", desc: "Refreshing carbonated soft drinks" },
    { name: "Water Bottle", desc: "Pure drinking water bottle" },
    { name: "Red Bull", desc: "Energy drink for instant boost" },
  ],
};

const MenuPage = () => {
  const [active, setActive] = useState("Tea With Milk");

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

                        <div className="flex justify-between items-start gap-4 mb-2 relative z-10">
                          <h3 className="font-display text-xl font-bold text-foreground">{item.name}</h3>
                          <span className="font-display font-bold text-primary whitespace-nowrap">₹{item.price}</span>
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

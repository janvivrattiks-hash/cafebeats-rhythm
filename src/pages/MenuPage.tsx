import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = [
  "SPECIALITY COFFEE", "SIGNATURE COFFEE", "HOT CHOCOLATE", "SHAKES", 
  "ICED COFFEE", "HOT COFFEE", "FRAPPE", "SPECIALTY MATCHA",
  "SIGNATURE COOLERS", "CLASSIC PASTA", "FINGER BITES", "QUICK BITES",
  "GARLIC BREAD", "EAT HEALTHY SALADS", "CHINESE", "SIZZLER",
  "CB FLATBREADS", "SANDWICH", "RICE BOWL", "ON THE TOAST",
  "APPETIZER", "DESSERTS"
];

const menuData: Record<string, { name: string; desc: string; price: number }[]> = {
  "SPECIALITY COFFEE": [
    { name: "Berry Tonic", desc: "Refreshing coffee tonic with a hint of berry", price: 299 },
    { name: "Yuzu Tonic", desc: "Citrusy coffee tonic with Japanese yuzu", price: 320 },
    { name: "Cold Brew Tonic", desc: "Smooth cold brew paired with crisp tonic water", price: 320 },
    { name: "Espresso Tonic", desc: "Bold espresso blended with refreshing tonic", price: 290 },
    { name: "Flavoured Espresso Tonic", desc: "Options: Orange / Cranberry / Cinnamon / Peach / Irish", price: 310 },
    { name: "Cold Brew", desc: "Stonewall signature 18-hour slow-steeped cold brew", price: 250 },
  ],
  "SIGNATURE COFFEE": [
    { name: "Cuma's Coffee", desc: "Our house special signature roasted blend", price: 330 },
    { name: "Protein Espresso", desc: "Power-packed espresso for your workout needs", price: 320 },
    { name: "Martini Espresso", desc: "Sophisticated coffee with a cocktail inspired twist", price: 299 },
    { name: "Vietnamese", desc: "Traditional sweet and strong condensed milk coffee", price: 299 },
    { name: "Newton Hazelnut Espresso", desc: "Rich hazelnut infused gravity-defying espresso", price: 299 },
  ],
  "HOT CHOCOLATE": [
    { name: "The Classical", desc: "Rich, smooth, and authentic hot chocolate cocoa", price: 200 },
    { name: "Creamy Chocolate", desc: "Indulgent and extra velvety chocolate experience", price: 220 },
  ],
  "SHAKES": [
    { name: "Oreo Shake", desc: "Classic vanilla shake blended with crushed Oreo cookies", price: 299 },
    { name: "Ferrero Rocher Shake", desc: "Premium hazelnut chocolate shake with Ferrero Rocher", price: 375 },
    { name: "Biscoff Shake", desc: "Creamy shake with signature Lotus Biscoff flavor", price: 410 },
    { name: "Nutella Dark Fantasy Shake", desc: "Heavily loaded Nutella and chocolate cookie shake", price: 385 },
    { name: "KitKat Shake", desc: "Rich chocolate shake with crunchy KitKat pieces", price: 375 },
  ],
  "ICED COFFEE": [
    { name: "Iced Espresso", desc: "Bold and chilled double shot of espresso", price: 190 },
    { name: "Iced Americano", desc: "Chilled espresso with cold water for a smooth finish", price: 210 },
    { name: "Iced Latte", desc: "Smooth espresso with chilled milk and light foam", price: 259 },
    { name: "Iced Mocha", desc: "Perfect blend of espresso, chocolate, and cold milk", price: 235 },
  ],
  "HOT COFFEE": [
    { name: "Espresso", desc: "Strong and bold shot of premium coffee", price: 190 },
    { name: "Cappuccino", desc: "Rich espresso with velvety steamed milk foam", price: 190 },
    { name: "Mocha Latte", desc: "Perfect blend of espresso, chocolate, and steamed milk", price: 250 },
    { name: "Affogato", desc: "Options: Nutella Oreo / Hazelnut / Caramel", price: 240 },
    { name: "Americano", desc: "Rich espresso with hot water for a smooth finish", price: 210 },
    { name: "Pistachio Kunafa Affogato", desc: "Exotic blend of pistachio, kunafa, and rich coffee", price: 380 },
  ],
  "FRAPPE": [
    { name: "The Classic Beaten", desc: "Traditional hand-beaten frothy coffee", price: 260 },
    { name: "Mocha Beat", desc: "Rich chocolate and hand-beaten coffee blend", price: 290 },
    { name: "Flavoured Frappé", desc: "Options: Hazelnut / Cinnamon / Biscoff / Nutella", price: 299 },
    { name: "Brownie Mocha", desc: "Decadent mocha with fudgy brownie pieces", price: 340 },
  ],
  "SPECIALTY MATCHA": [
    { name: "Hot Matcha Latte", desc: "Authentic ceremonial grade hot matcha green tea", price: 385 },
    { name: "Iced Matcha Latte", desc: "Options: Orange / Mango / Strawberry / Blue Berry", price: 395 },
    { name: "Yuzu Tonic Matcha", desc: "Refreshing Japanese yuzu citrus and matcha blend", price: 390 },
    { name: "Tropical Tonic Matcha", desc: "Exotic tropical fruit infusion with premium matcha", price: 400 },
    { name: "Passion Fruit Tonic Matcha", desc: "Zesty passion fruit and matcha sparkling tonic", price: 430 },
  ],
  "SIGNATURE COOLERS": [
    { name: "Mojito", desc: "Classic mint and lime refreshing cooler", price: 250 },
    { name: "Flavoured Mojito", desc: "Options: Orange / Green Apple / Strawberry / Kiwi / Blueberry", price: 280 },
    { name: "Cranberry Delight", desc: "Tangy cranberry blend with a refreshing finish", price: 299 },
    { name: "Sunset Cooler", desc: "Warm citrus tones meeting chilled refreshment", price: 380 },
    { name: "Kiwi Blue Some", desc: "Unique kiwi and blue curacao sparkling fusion", price: 375 },
    { name: "Passion Fruit", desc: "Intense and aromatic passion fruit chilled beverage", price: 350 },
    { name: "Twist Energy", desc: "Revitalizing energizer with a citrusy twist", price: 395 },
    { name: "Masala Wine Sangria", desc: "Non-alcoholic spiced sangria with rich fruit notes", price: 340 },
    { name: "Pina Colada", desc: "Creamy pineapple and coconut tropical delight", price: 280 },
    { name: "Lemon / Peach Iced Tea", desc: "Classic chilled tea in lemon or peach variant", price: 280 },
  ],
  "CLASSIC PASTA": [
    { name: "Signature Rosé Rigatoni Pasta", desc: "Rigatoni in our house special pink rosé sauce", price: 450 },
    { name: "Heirloom Gnocchi Pasta", desc: "Soft potato gnocchi with heirloom cherry tomatoes", price: 470 },
    { name: "Wild Alfredo Pasta", desc: "Creamy white sauce with wild mushrooms and herbs", price: 420 },
    { name: "Portofino Mac 'n' Cheese Pasta", desc: "Gourmet cheese blend with traditional macaroni", price: 460 },
  ],
  "FINGER BITES": [
    { name: "French Fries", desc: "Classic crispy golden potato fries", price: 190 },
    { name: "Cheesy Fries", desc: "Golden fries topped with melted gourmet cheese", price: 250 },
    { name: "Peri Peri Fries", desc: "Spicy African bird's eye chili seasoned fries", price: 250 },
    { name: "Potato Skin Fries", desc: "Crispy potato skins with house special seasoning", price: 270 },
  ],
  "QUICK BITES": [
    { name: "Mexicano Nachos", desc: "Crispy tortilla chips with Mexican salsa and beans", price: 290 },
    { name: "Guacamole Cheese Nachos", desc: "Loaded nachos with fresh guacamole and cheese", price: 330 },
  ],
  "GARLIC BREAD": [
    { name: "Cheese Garlic Bread", desc: "Toasted artisan bread with garlic butter and cheese", price: 330 },
    { name: "Cheese Garlic Bread Loaded", desc: "Extra cheese and toppings on garlic sourdough", price: 390 },
    { name: "Italian Bruschetta", desc: "Tomato, basil, and olive oil on garlic toasties", price: 430 },
  ],
  "EAT HEALTHY SALADS": [
    { name: "Exotic Veggie with Herbs", desc: "Fresh seasonal exotic greens with herb vinaigrette", price: 320 },
    { name: "Sunshine Tofu Salad", desc: "Bright and healthy tofu salad with citrus notes", price: 390 },
    { name: "Tabbouleh Salad", desc: "Middle Eastern parsley and bulgur wheat salad", price: 390 },
    { name: "Steak Paneer with Sautéed Veggies", desc: "Grilled paneer steaks served with seasonal greens", price: 410 },
    { name: "Burrata Salad", desc: "Creamy burrata cheese with fresh tomatoes and pesto", price: 450 },
  ],
  "CHINESE": [
    { name: "Korean Udon Noodles", desc: "Thick udon noodles in spicy Korean glaze", price: 390 },
    { name: "Hakka Noodles", desc: "Street style vegetable tossed noodles", price: 350 },
    { name: "Burnt Garlic Noodles", desc: "Aromatic noodles with toasted golden garlic", price: 350 },
    { name: "Pad Thai Noodles", desc: "Classic Thai sweet and tangy rice noodles", price: 370 },
    { name: "Crispy Veg", desc: "Flash fried assorted vegetables in sweet chili", price: 290 },
    { name: "Crispy Corn", desc: "Golden fried kernels with salt and pepper", price: 290 },
    { name: "Chilli Cottage Cheese", desc: "Paneer cubes tossed in spicy soy-chili sauce", price: 365 },
  ],
  "SIZZLER": [
    { name: "Mexican Sizzler", desc: "Sizzling platter with Mexican rice and beans", price: 590 },
    { name: "Indo-Mex Sizzler", desc: "Fusion of Indian spices and Mexican favorites", price: 595 },
    { name: "Chinese Sizzler", desc: "Noodles and manchurian on a sizzling hot plate", price: 525 },
    { name: "Chef’s Special Sizzler", desc: "Our head chef's unique gourmet creation", price: 620 },
    { name: "CB Signature Sizzler", desc: "The ultimate Rythm & Brews signature platter", price: 650 },
  ],
  "CB FLATBREADS": [
    { name: "Marinara Pizza", desc: "Classic tomato and herb thin crust flatbread", price: 410 },
    { name: "Fiama Pizza", desc: "Spicy onion and chili thin crust pizza", price: 450 },
    { name: "Truffle Mushroom Bianco Pizza", desc: "White base with truffle oil and mushrooms", price: 480 },
    { name: "Pesto Buffalo Pizza", desc: "Fresh pesto base with buffalo mozzarella", price: 650 },
    { name: "Tuscan Pizza", desc: "Rustic toppings with sun-dried tomatoes", price: 670 },
    { name: "Harvest Pizza", desc: "Abundant seasonal vegetable garden pizza", price: 550 },
    { name: "Roasted Tandoori Paneer Pizza", desc: "Paneer cubes with tandoori spices and onion", price: 550 },
    { name: "Asian Grilled Paneer Pizza", desc: "Paneer with an Asian ginger-soy glaze", price: 599 },
  ],
  "SANDWICH": [
    { name: "Sauted Paneer Croissant Sandwich", desc: "Flaky croissant filled with sautéed spiced paneer", price: 380 },
    { name: "Chipotle Veggie Bagel Sandwich", desc: "Fresh bagel with smoky chipotle and veggies", price: 395 },
    { name: "Pesto Bagel Sandwich", desc: "Aromatic pesto and vegetable bagel stack", price: 400 },
    { name: "Harissa Cottage Cheese Sandwich", desc: "Spiced paneer in Moroccan harissa spread", price: 285 },
  ],
  "RICE BOWL": [
    { name: "Veg Jambalaya Rice with Pepper Curry", desc: "Spiced rice served with a robust pepper gravy", price: 499 },
    { name: "Thai Basil Cottage Cheese with Jasmine Rice", desc: "Fragrant rice with basil infused paneer", price: 510 },
    { name: "Spinach Rice with Thai Curry", desc: "Emerald spinach rice with aromatic green curry", price: 520 },
    { name: "Mexican Rice with Hot Pepper Curry", desc: "Cilantro rice paired with spicy Mexican curry", price: 499 },
    { name: "Mexican Rice Platter", desc: "Complete Mexican meal with rice and sides", price: 540 },
    { name: "Exotic Rice Platter", desc: "Premium selection of global flavored rices", price: 565 },
  ],
  "ON THE TOAST": [
    { name: "Next Level Avocado Toast", desc: "Smashed avocado with gourmet toppings on sourdough", price: 399 },
    { name: "Scrambled Paneer Toast", desc: "Fluffy spiced paneer crumble on toasted bread", price: 389 },
    { name: "Pesto Paneer Toast", desc: "Grilled paneer with pesto drizzle on artisan toast", price: 375 },
  ],
  "APPETIZER": [
    { name: "Crispy Chestnut", desc: "Water chestnuts tossed in sweet and spicy glaze", price: 350 },
    { name: "Korean Chili Lotus Stem", desc: "Stir-fried lotus stems with Korean chili kick", price: 410 },
    { name: "Kung Pao Cottage Cheese", desc: "Paneer with peanuts and scallions in soy sauce", price: 385 },
    { name: "Mediterranean Mezze Platter", desc: "Hummus, falafel, and pita bread selection", price: 430 },
    { name: "Hummus Bowl", desc: "Creamy house-made hummus with olive oil drizzle", price: 499 },
    { name: "Golden Arancini Balls", desc: "Crispy fried risotto balls with cheese center", price: 399 },
  ],
  "DESSERTS": [
    { name: "Pistachio Cheese Cake", desc: "Rich and nutty premium pistachio cheesecake", price: 450 },
    { name: "Tiramisu", desc: "Traditional Italian coffee-flavored dessert", price: 340 },
    { name: "Sizzling Hot Brownie", desc: "Warm brownie on a hot plate with chocolate sauce", price: 295 },
    { name: "Cheesecake", desc: "Options: Nutella / Biscoff / Strawberry / Blueberry", price: 370 },
  ],
};

const MenuPage = () => {
  const [active, setActive] = useState("SPECIALITY COFFEE");

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

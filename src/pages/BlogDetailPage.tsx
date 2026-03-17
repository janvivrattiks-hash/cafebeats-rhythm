import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2, Facebook, Instagram } from "lucide-react";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";

const blogPosts = [
  { 
    id: "perfect-espresso", 
    image: hero1, 
    title: "The Art of Perfect Espresso", 
    desc: "Crafting the perfect shot of espresso is an art form that requires precision, passion, and the right technique. Beyond just a caffeine kick, a well-made espresso is a symphony of flavors.",
    content: `
      An espresso is more than just a quick caffeine fix; it is the heart and soul of many coffee-based drinks. To pull the perfect shot, one must understand the balance of four key variables: the grind, the dose, the tamp, and the brew time. 
      
      At CafeBeats, our baristas undergo rigorous training to master these elements. We use 100% Arabica beans, roasted to perfection to bring out deep, chocolatey notes with a hint of citrus. The grind must be fine—similar to the texture of powdered sugar. A standard double shot uses about 18-20 grams of coffee, tamped with exactly 30 pounds of pressure to ensure even extraction.
      
      The result? A rich, syrupy liquid topped with a thick, hazelnut-colored crema. It's the ultimate coffee experience, one that we take pride in serving every single day.
    `,
    date: "Mar 5, 2026",
    author: "Rohan Sharma",
    readTime: "5 min read"
  },
  { 
    id: "milestone-50", 
    image: hero2, 
    title: "CafeBeats Opens 50th Store", 
    desc: "We're absolutely thrilled to celebrate a major milestone in our journey—the opening of our 50th store! This achievement wouldn't have been possible without our amazing community.",
    content: `
      From a single, cozy corner in Mumbai to 50 locations across India, the CafeBeats rhythm has spread far and wide. Our 50th store, located in the heart of Surat, represents everything we stand for: premium quality, modern design, and a place where music and coffee come together.
      
      "This is just the beginning," says our founder during the ribbon-cutting ceremony. "Our goal has always been to be more than just a coffee shop; we want to be a part of people's daily lives and special moments." 
      
      The new Surat outlet features a state-of-the-art brewing station, an expanded snack menu, and a dedicated 'Vinyl Corner' for music lovers. We invite you all to come and celebrate this rhythm with us!
    `,
    date: "Feb 20, 2026",
    author: "Ananya Iyer",
    readTime: "4 min read"
  },
  { 
    id: "seasonal-menu", 
    image: hero3, 
    title: "New Seasonal Menu Launch", 
    desc: "Spring is in the air, and so are the refreshing flavors of our new seasonal menu. From floral-infused lattes to zesty iced teas, there's a new favorite waiting for everyone.",
    content: `
      As the seasons change, so does our inspiration. This spring, we're bringing the garden to your cup. Our new limited-edition menu features innovative flavors that are both refreshing and sophisticated.
      
      Highlights of the new menu include:
      - Lavender Honey Latte: A soothing blend with a hint of floral sweetness.
      - Hibiscus Berry Iced Tea: A vibrant, antioxidant-rich cooler perfect for sunny afternoons.
      - Avocado Toast with Spiced Seeds: Our take on a classic, now with a CafeBeats twist.
      - Pistachio Dream Shake: A creamy, nutty delight that's as beautiful as it is delicious.
      
      These items are available for a limited time only at all CafeBeats outlets. Come in today and find your new seasonal favorite!
    `,
    date: "Feb 10, 2026",
    author: "Vikram Malhotra",
    readTime: "3 min read"
  },
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <Link to="/" className="mt-4 text-accent hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article>
          {/* Header */}
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
              
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider">Lifestyle</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full uppercase tracking-wider">Coffee</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border mb-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{post.author}</p>
                    <p className="text-xs text-muted-foreground">Author</p>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-border hidden md:block" />
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                
                <div className="ml-auto flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Share:</span>
                  <div className="flex gap-2">
                    <a href="https://www.facebook.com/cafebeats.restaurant" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="https://www.instagram.com/cafebeats.india/profilecard/?igsh=MW54dGJldTJscWhsOQ" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container mx-auto px-4 md:px-8 mb-16"
          >
            <div className="aspect-[21/9] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-xl md:text-2xl font-display font-medium leading-relaxed italic text-foreground/80 mb-10 border-l-4 border-accent pl-8">
                  {post.desc}
                </p>
                
                <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                  {post.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>
                
                <div className="mt-16 p-8 bg-muted rounded-3xl border border-border flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-premium flex items-center justify-center text-white shrink-0">
                    <Share2 className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h4>
                    <p className="text-muted-foreground mb-4">Get the latest CafeBeats rhythm straight to your inbox.</p>
                    <div className="flex gap-2">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="flex-1 px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <button className="bg-accent px-6 py-2 rounded-xl text-white font-bold hover:brightness-110 transition-all">
                        Join Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;

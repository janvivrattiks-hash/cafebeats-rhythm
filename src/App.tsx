import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "./components/ui/sonner.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";


const Index = lazy(() => import("./pages/Index.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const MenuPage = lazy(() => import("./pages/MenuPage.tsx"));
const FranchisePage = lazy(() => import("./pages/FranchisePage.tsx"));
const StoresPage = lazy(() => import("./pages/StoresPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        <ScrollToTop />
        <WhatsAppButton />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Preloader from "./components/PreLoader";

import "./App.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [heroReady, setHeroReady] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

 const handlePreloaderFinish = () => {
  const preloaderElement = document.querySelector(".preloader");
  preloaderElement?.classList.add("exit");

  setTimeout(() => {
    setShowPreloader(false);
    setHeroReady(true);
  }, 1200);

  setTimeout(() => {
    setShowHeader(true); // ✅ After 3s, show navbar
  }, 2000);
};


  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderFinish} />}

      <div className="main-content">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
<Route path="/" element={<Index heroReady={heroReady} showHeader={showHeader} />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App;

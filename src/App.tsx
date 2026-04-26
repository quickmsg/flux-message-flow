import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashDownloadRedirect } from "@/components/HashDownloadRedirect";
import Index from "./pages/Index";
import Architecture from "./pages/Architecture";
import Contact from "./pages/Contact";
import Demos from "./pages/Demos";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Test from "./pages/Test";
import DownloadRedirect from "./pages/DownloadRedirect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    window.setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashDownloadRedirect />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<DownloadRedirect />} />
          <Route path="/test" element={<Test />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

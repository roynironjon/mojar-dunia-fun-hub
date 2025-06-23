
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home";
import JokeZone from "./pages/JokeZone";
import QuizPuzzle from "./pages/QuizPuzzle";
import MemeGallery from "./pages/MemeGallery";
import CartoonComics from "./pages/CartoonComics";
import MiniGames from "./pages/MiniGames";
import AITools from "./pages/AITools";
import FunLearning from "./pages/FunLearning";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jokes" element={<JokeZone />} />
              <Route path="/quiz" element={<QuizPuzzle />} />
              <Route path="/memes" element={<MemeGallery />} />
              <Route path="/cartoons" element={<CartoonComics />} />
              <Route path="/games" element={<MiniGames />} />
              <Route path="/ai-tools" element={<AITools />} />
              <Route path="/learning" element={<FunLearning />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
